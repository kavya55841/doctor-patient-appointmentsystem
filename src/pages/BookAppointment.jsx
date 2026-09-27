import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { createAppointment } from "../services/appointmentService";

function BookAppointment() {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);

  const [appointmentDate, setAppointmentDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [consultationType, setConsultationType] = useState("Online");
  const [reason, setReason] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadDoctor();
  }, [doctorId]);

  const loadDoctor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/doctors/${doctorId}`
      );

      setDoctor(response.data);
    } catch (error) {
      console.error("Error fetching doctor:", error);
      setError("Unable to load doctor details.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || user.role !== "PATIENT") {
        setError("Please login as a patient.");
        return;
      }

      const appointmentData = {
        patient: {
          id: user.profileId
        },
        doctor: {
          id: Number(doctorId)
        },
        hospital: null,
        appointmentDate: appointmentDate,
        startTime: startTime,
        endTime: endTime,
        consultationType: consultationType,
        status: "REQUESTED",
        reason: reason
      };

      await createAppointment(appointmentData);

      setMessage("Appointment booked successfully!");

      setAppointmentDate("");
      setStartTime("");
      setEndTime("");
      setReason("");

    } catch (error) {
      console.error("Error booking appointment:", error);

      if (error.response && error.response.data) {
        setError(
          typeof error.response.data === "string"
            ? error.response.data
            : "Unable to book appointment."
        );
      } else {
        setError("Unable to book appointment.");
      }
    }
  };

  if (!doctor) {
    return (
      <div className="page">
        <h2>Loading doctor details...</h2>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Book Appointment</h1>

      <div className="doctor-profile">
        <h2>{doctor.name}</h2>

        <p>
          <strong>Specialization:</strong> {doctor.specialization}
        </p>

        <p>
          <strong>Qualification:</strong> {doctor.qualification}
        </p>

        <p>
          <strong>Experience:</strong> {doctor.experience} years
        </p>

        <p>
          <strong>Consultation Fee:</strong> ₹{doctor.consultationFee}
        </p>

        <p>
          <strong>Consultation Type:</strong> {doctor.consultationType}
        </p>
      </div>

      <div className="booking-form">
        <h2>Appointment Details</h2>

        {message && (
          <p style={{ color: "green" }}>
            {message}
          </p>
        )}

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <div>
            <label>Appointment Date</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) =>
                setAppointmentDate(e.target.value)
              }
              required
            />
          </div>

          <div>
            <label>Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) =>
                setStartTime(e.target.value)
              }
              required
            />
          </div>

          <div>
            <label>End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) =>
                setEndTime(e.target.value)
              }
              required
            />
          </div>

          <div>
            <label>Consultation Type</label>

            <select
              value={consultationType}
              onChange={(e) =>
                setConsultationType(e.target.value)
              }
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div>
            <label>Reason</label>

            <textarea
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              placeholder="Enter reason for appointment"
              rows="4"
              required
            />
          </div>

          <button type="submit">
            Confirm Appointment
          </button>

          <button
            type="button"
            onClick={() => navigate(`/doctor/${doctorId}`)}
          >
            Back to Doctor Profile
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookAppointment;