import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <nav>
        <h2>Doctor Appointment</h2>

        <div className="nav-buttons">
          <button onClick={() => navigate("/login")}>
            Login
          </button>

          <button onClick={() => navigate("/patient-register")}>
            Patient Register
          </button>

          <button onClick={() => navigate("/doctor-register")}>
            Doctor Register
          </button>
        </div>
      </nav>

      <main>
        <h1>Find the Best Doctor</h1>

        <p>
          Find trusted doctors and book your appointment easily.
        </p>

        <button onClick={() => navigate("/login")}>
          Find a Doctor
        </button>
      </main>
    </div>
  );
}

export default Home;