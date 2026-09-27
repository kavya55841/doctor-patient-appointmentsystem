import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/patient/register";

export const registerPatient = async (patientData) => {
  const response = await axios.post(API_URL, patientData);
  return response.data;
};