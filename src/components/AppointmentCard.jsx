function AppointmentCard({ appointment }) {
  return (
    <div className="appointment-card">

      <h3>
        {appointment?.doctor?.user?.name || "Doctor"}
      </h3>

      <p>
        Date: {appointment?.appointmentDate || "-"}
      </p>

      <p>
        Time: {appointment?.startTime || "-"}
      </p>

      <p>
        Type: {appointment?.consultationType || "-"}
      </p>

      <p>
        Status: {appointment?.status || "-"}
      </p>

    </div>
  );
}

export default AppointmentCard;