import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email: email,
        password: password
      };

      const user = await loginUser(loginData);

      console.log(user);

      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful");

      if (user.role === "PATIENT") {
        navigate("/patient-dashboard");
      } else if (user.role === "DOCTOR") {
        navigate("/doctor-dashboard");
      } else if (user.role === "HOSPITAL_ADMIN") {
        navigate("/admin-dashboard");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-page">

      <div className="form-container">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;