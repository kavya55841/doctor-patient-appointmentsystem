import { useState } from "react";
import { registerDoctor } from "../services/doctorService";

function DoctorRegistration() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    registrationNumber: "",
    qualification: "",
    specialization: "",
    experience: "",
    departmentId: "",
    hospitalId: "",
    consultationFee: "",
    consultationType: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const doctorData = {
        ...formData,
        experience: Number(formData.experience),
        consultationFee: Number(formData.consultationFee),
        hospitalId: formData.hospitalId ? Number(formData.hospitalId) : null,
        departmentId: formData.departmentId ? Number(formData.departmentId) : null
      };

      const response = await registerDoctor(doctorData);

      console.log(response);

      alert("Doctor registered successfully");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        registrationNumber: "",
        qualification: "",
        specialization: "",
        experience: "",
        departmentId: "",
        hospitalId: "",
        consultationFee: "",
        consultationType: ""
      });

    } catch (error) {
      console.error("Registration error:", error);
      alert("Doctor registration failed");
    }
  };

  return (
    <div className="form-page">

      <div className="form-container">

        <h1>Doctor Registration</h1>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />

          <label>Mobile</label>
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
            required
          />

          <label>Medical Registration Number</label>
          <input
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Registration number"
          />

          <label>Qualification</label>
          <input
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Example: MBBS, MD"
          />

          <label>Specialization</label>
          <input
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder="Example: Cardiology"
          />

          <label>Experience</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Years of experience"
          />

          <label>Department ID</label>
          <input
            type="number"
            name="departmentId"
            value={formData.departmentId}
            onChange={handleChange}
            placeholder="Enter department ID"
          />

          <label>Hospital ID</label>
          <input
            type="number"
            name="hospitalId"
            value={formData.hospitalId}
            onChange={handleChange}
            placeholder="Enter hospital ID"
          />

          <label>Consultation Fee</label>
          <input
            type="number"
            name="consultationFee"
            value={formData.consultationFee}
            onChange={handleChange}
            placeholder="Consultation fee"
          />

          <label>Consultation Type</label>
          <select
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
            <option value="BOTH">Both</option>
          </select>

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default DoctorRegistration;