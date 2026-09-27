import axios from "axios";

const API_URL = "http://localhost:8080/api/appointments";

export async function createAppointment(appointmentData) {
  const response = await axios.post(API_URL, appointmentData);
  return response.data;
}

export async function getAppointment(id) {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

export async function updateAppointment(id, appointmentData) {
  const response = await axios.put(
    `${API_URL}/${id}`,
    appointmentData
  );
  return response.data;
}

export async function deleteAppointment(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

export async function getPatientAppointments(id) {
  const response = await axios.get(
    `${API_URL}/patient/${id}`
  );
  return response.data;
}

export async function getDoctorAppointments(id) {
  const response = await axios.get(
    `${API_URL}/doctor/${id}`
  );
  return response.data;
}
export async function updateAppointmentStatus(id, action) {
  const response = await axios.put(
    `${API_URL}/${id}/${action}`
  );

  return response.data;
}