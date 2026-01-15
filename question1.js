import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(
        "https://dibzo2eko.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setMessage("Login successful");
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
      {token && <p>Token: {token}</p>}
    </div>
  );
}

export default Login;