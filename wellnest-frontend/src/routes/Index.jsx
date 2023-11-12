import { Routes, Route } from "react-router-dom";
import LoginPatient from "../pages/patient";
import DashboardPatient from "../pages/patient/Dashboard";
import TherapistProfile from "../pages/patient/TherapistProfile";
import LayoutPatient from "../layouts/Patient";
import LoginTherapist from "../pages/therapist";
import RequireAuth from "../private/RequireAuth";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPatient />} />
      <Route path="/patient" element={<LoginPatient />} />
      <Route path="/therapist" element={<LoginTherapist />} />

      <Route element={<RequireAuth fallback={"/patient/"} />}>
        <Route element={<LayoutPatient />}>
          <Route path="patient/dashboard" element={<DashboardPatient />} />
          <Route
            path="patient/view/therapist/:id"
            element={<TherapistProfile />}
          />
        </Route>
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
