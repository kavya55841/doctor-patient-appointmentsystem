import axios from "axios";

const API_URL = "http://localhost:8080/api/doctors";
const REGISTER_URL = "http://localhost:8080/api/auth/doctor/register";

export const getDoctors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const registerDoctor = async (doctorData) => {
  const response = await axios.post(REGISTER_URL, doctorData);
  return response.data;
};