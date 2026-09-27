import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    loadDoctor();
  }, [id]);

  const loadDoctor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/doctors/${id}`
      );

      setDoctor(response.data);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };

  if (!doctor) {
    return <h2>Loading doctor profile...</h2>;
  }

  return (
    <div className="page">
      <h1>Doctor Profile</h1>

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
          <strong>Registration Number:</strong>{" "}
          {doctor.registrationNumber}
        </p>

        <p>
          <strong>Consultation Fee:</strong> ₹{doctor.consultationFee}
        </p>

        <p>
          <strong>Consultation Type:</strong>{" "}
          {doctor.consultationType}
        </p>

        <p>
          <strong>Status:</strong> {doctor.status}
        </p>

        <button
          onClick={() =>
            navigate(`/book-appointment/${doctor.id}`)
          }
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;