import { useEffect, useState } from "react";
import AppointmentCard from "../components/AppointmentCard";
import { getPatientAppointments } from "../services/appointmentService";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || user.role !== "PATIENT") {
        console.error("Patient is not logged in");
        return;
      }

      const patientId = user.profileId;

      const data = await getPatientAppointments(patientId);

      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div className="page">

      <h1>My Appointments</h1>

      <div className="appointment-container">

        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
            />
          ))
        ) : (
          <p>No appointments found.</p>
        )}

      </div>

    </div>
  );
}

export default MyAppointments;