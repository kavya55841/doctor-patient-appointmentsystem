import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">

      <h2>Doctor Appointment</h2>

      <button onClick={() => navigate("/patient-dashboard")}>
        Dashboard
      </button>

      <button onClick={() => navigate("/doctors")}>
        Find Doctors
      </button>

      <button onClick={() => navigate("/my-appointments")}>
        My Appointments
      </button>

      <button onClick={() => navigate("/profile")}>
        Profile
      </button>

      <button onClick={() => navigate("/login")}>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;