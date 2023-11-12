import "../styles/Layout.Patient.css";
import { Outlet } from "react-router-dom";
import Preferences from "../pages/patient/Preferences";
import useAuth from "../hooks/useAuth";
import Nav from "../components/NavPatient";

const Patient = () => {
  const { auth } = useAuth();

  return auth.preferences ? (
    <div className="patient-layout">
      <Nav />
      <div className="patient-layout-body">
        <Outlet />
      </div>
    </div>
  ) : (
    <Preferences />
  );
};

export default Patient;
