import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/register/User";
import RegisterTherapist from "./pages/register/Therapist";
import LoginUser from "./pages/login/User";
import DashboardUser from "./pages/protected/user/Dashboard";
import ViewTherapist from "./pages/protected/user/ViewTherapist";
import AppLayout from "./protected/layouts/App";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginUser />} />
      <Route path="/register/user" element={<RegisterUser />} />
      <Route path="/register/therapist" element={<RegisterTherapist />} />

      <Route element={<AppLayout />}>
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/user/therapist/:id" element={<ViewTherapist />} />
      </Route>
    </Routes>
  );
};

export default App;
