import { useEffect, useState } from "react";
import API from "../services/api";

function ViewAppointments() {
  const [appointments, setAppointments] = useState([]);

  /* ===============================
     FETCH ALL
  =============================== */
  const fetchAppointments = async () => {
    const res = await API.get("/appointments");
    setAppointments(res.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  /* ===============================
     DELETE
  =============================== */
  const handleDelete = async (id) => {
    await API.delete(`/appointments/${id}`);
    fetchAppointments();
  };

  /* ===============================
     GROUP BY DATE (ALL DAYS)
  =============================== */
  const grouped = appointments.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  // ⭐ sort dates ascending
  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Appointments</h2>

      {sortedDates.map((date) => (
        <div key={date} style={{ marginBottom: "50px" }}>
          {/* DATE HEADER */}
          <h3 style={{ color: "#0a3d62", marginBottom: "10px" }}>
            📅 {date}
          </h3>

          {/* TABLE */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
              marginBottom: "20px"
            }}
          >
            <thead style={{ background: "#0a3d62", color: "white" }}>
              <tr>
                <th>Token</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {grouped[date]
                .sort((a, b) => a.token - b.token)
                .map((a) => (
                  <tr key={a._id}>
                    <td>{a.token}</td>
                    <td>{a.name}</td>
                    <td>{a.phone}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(a._id)}
                        style={{
                          background: "red",
                          color: "white",
                          border: "none",
                          padding: "6px 10px",
                          cursor: "pointer"
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default ViewAppointments;
