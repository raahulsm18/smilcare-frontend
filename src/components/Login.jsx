import { useState } from "react";

function Login({ onSuccess }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ⭐ your admin credentials
  const ADMIN_ID = "admin";
  const ADMIN_PASS = "1234";

  const handleLogin = () => {
    if (id === ADMIN_ID && password === ADMIN_PASS) {
      localStorage.setItem("isAdmin", "true");
      onSuccess();
    } else {
      setError("Invalid ID or Password ❌");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Admin Login</h2>

      <input
        placeholder="Admin ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
