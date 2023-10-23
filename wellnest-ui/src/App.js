import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/register/User";
import RegisterTherapist from "./pages/register/Therapist";
import LoginUser from "./pages/login/User";
import LoginTherapist from "./pages/login/Therapist";
import DashboardUser from "./pages/protected/user/Dashboard";
import DashboardTherapist from "./pages/protected/therapist/Dashboard";
import ViewTherapist from "./pages/protected/user/ViewTherapist";
import ViewPatient from "./pages/protected/therapist/ViewPatient";
import AppLayout from "./protected/layouts/App";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginUser />} />
      <Route path="/therapist" element={<LoginTherapist />} />
      <Route path="/register/user" element={<RegisterUser />} />
      <Route path="/register/therapist" element={<RegisterTherapist />} />

      <Route element={<AppLayout />}>
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/user/therapist/:id" element={<ViewTherapist />} />
        <Route path="/therapist/user/:id" element={<ViewPatient />} />
        <Route path="/therapist/dashboard" element={<DashboardTherapist />} />
      </Route>
    </Routes>
  );
};

export default App;
