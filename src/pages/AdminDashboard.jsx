import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <h1>Hospital Admin Dashboard</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>Doctors</h3>
            <p>Manage doctors.</p>
          </div>

          <div className="dashboard-card">
            <h3>Patients</h3>
            <p>Manage patients.</p>
          </div>

          <div className="dashboard-card">
            <h3>Hospitals</h3>
            <p>Manage hospitals.</p>
          </div>

          <div className="dashboard-card">
            <h3>Departments</h3>
            <p>Manage departments.</p>
          </div>

          <div className="dashboard-card">
            <h3>Appointments</h3>
            <p>Manage appointments.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;