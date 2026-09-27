const API_URL = "http://localhost:8080/api/hospitals";

export async function getHospitals() {

  const response = await fetch(API_URL);

  return response.json();
}

export async function addHospital(hospitalData) {

  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(hospitalData)
    }
  );

  return response.json();
}

export async function updateHospital(id, hospitalData) {

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(hospitalData)
    }
  );

  return response.json();
}

export async function getHospitalDoctors(id) {

  const response = await fetch(
    `${API_URL}/${id}/doctors`
  );

  return response.json();
}

export async function getHospitalDepartments(id) {

  const response = await fetch(
    `${API_URL}/${id}/departments`
  );

  return response.json();
}