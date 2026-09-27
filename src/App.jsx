import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PatientRegistration from "./pages/PatientRegistration";
import DoctorRegistration from "./pages/DoctorRegistration";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorSearch from "./pages/DoctorSearch";
import DoctorProfile from "./pages/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/patient-register" element={<PatientRegistration />} />

        <Route path="/doctor-register" element={<DoctorRegistration />} />

        <Route path="/patient-dashboard" element={<PatientDashboard />} />

        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/doctors" element={<DoctorSearch />} />

        <Route path="/doctor/:id" element={<DoctorProfile />} />

        <Route
          path="/book-appointment/:doctorId"
          element={<BookAppointment />}
        />

        <Route path="/my-appointments" element={<MyAppointments />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;