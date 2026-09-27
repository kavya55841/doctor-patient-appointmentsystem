import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getDoctorAppointments,
  updateAppointmentStatus
} from "../services/appointmentService";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || user.role !== "DOCTOR") {
        return;
      }

      const doctorId = user.profileId;

      const data = await getDoctorAppointments(doctorId);
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching doctor appointments:", error);
    }
  };

  const handleAccept = async (appointmentId) => {
    try {
      await updateAppointmentStatus(appointmentId, "accept");
      await loadAppointments();
    } catch (error) {
      console.error("Error accepting appointment:", error);
    }
  };

  const handleReject = async (appointmentId) => {
    try {
      await updateAppointmentStatus(appointmentId, "reject");
      await loadAppointments();
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Doctor Dashboard</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>My Profile</h3>
            <p>Manage your doctor profile.</p>
          </div>

          <div className="dashboard-card">
            <h3>Availability</h3>
            <p>Manage your working days and hours.</p>
          </div>

          <div className="dashboard-card">
            <h3>Appointments</h3>
            <p>You have {appointments.length} appointment(s).</p>
          </div>

        </div>

        <div style={{ marginTop: "30px" }}>
          <h2>Appointment Requests</h2>

          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="appointment-card"
                style={{ marginTop: "20px" }}
              >
                <p>
                  <strong>Appointment ID:</strong>{" "}
                  {appointment.id}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {appointment.appointmentDate}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {appointment.startTime} - {appointment.endTime}
                </p>

                <p>
                  <strong>Consultation Type:</strong>{" "}
                  {appointment.consultationType}
                </p>

                <p>
                  <strong>Reason:</strong>{" "}
                  {appointment.reason}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {appointment.status}
                </p>

                {appointment.status === "REQUESTED" && (
                  <div style={{ marginTop: "15px" }}>

                    <button
                      onClick={() => handleAccept(appointment.id)}
                      style={{
                        marginRight: "10px",
                        background: "#087f8c",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        cursor: "pointer"
                      }}
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => handleReject(appointment.id)}
                      style={{
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        cursor: "pointer"
                      }}
                    >
                      Reject
                    </button>

                  </div>
                )}

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default DoctorDashboard;