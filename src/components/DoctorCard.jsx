import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <div className="doctor-card">
      <h3>{doctor?.name || "Doctor"}</h3>

      <p>
        <strong>Specialization:</strong>{" "}
        {doctor?.specialization || "-"}
      </p>

      <p>
        <strong>Qualification:</strong>{" "}
        {doctor?.qualification || "-"}
      </p>

      <p>
        <strong>Experience:</strong>{" "}
        {doctor?.experience || 0} years
      </p>

      <p>
        <strong>Consultation Fee:</strong> ₹
        {doctor?.consultationFee || 0}
      </p>

      <p>
        <strong>Consultation Type:</strong>{" "}
        {doctor?.consultationType || "-"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {doctor?.status || "-"}
      </p>

      <button onClick={handleViewProfile}>
        View Profile
      </button>
    </div>
  );
}

export default DoctorCard;