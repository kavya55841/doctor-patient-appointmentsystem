import Sidebar from "../components/Sidebar";

function PatientDashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <h1>Patient Dashboard</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>Find Doctors</h3>
            <p>Search for doctors and specialists.</p>
          </div>

          <div className="dashboard-card">
            <h3>My Appointments</h3>
            <p>View your upcoming appointments.</p>
          </div>

          <div className="dashboard-card">
            <h3>Appointment History</h3>
            <p>View your previous appointments.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default PatientDashboard;