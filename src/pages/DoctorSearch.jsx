import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { getDoctors } from "../services/doctorService";

function DoctorSearch() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      const data = await getDoctors();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <div className="page">
      <h1>Find Doctors</h1>

      <div className="doctor-container">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))
        ) : (
          <p>No doctors available.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorSearch;