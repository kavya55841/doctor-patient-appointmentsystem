import { useState } from "react";
import { registerPatient } from "../services/patientService";

function PatientRegistration() {

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    gender: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    emergencyContact: "",
    bloodGroup: ""
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
      const response = await registerPatient(formData);

      console.log(response);

      alert("Patient registered successfully");

      setFormData({
        name: "",
        dateOfBirth: "",
        gender: "",
        mobile: "",
        email: "",
        password: "",
        address: "",
        emergencyContact: "",
        bloodGroup: ""
      });

    } catch (error) {
      console.error("Registration error:", error);

      alert("Patient registration failed");
    }
  };

  return (
    <div className="form-page">

      <div className="form-container">

        <h1>Patient Registration</h1>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />

          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Mobile Number</label>
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
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

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
            required
          />

          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />

          <label>Emergency Contact</label>
          <input
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="Emergency contact"
          />

          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default PatientRegistration;