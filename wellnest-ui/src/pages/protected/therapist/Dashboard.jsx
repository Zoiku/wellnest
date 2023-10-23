import "../../../styles/Dashboard.css";
import PatientCards from "../../../components/PatientCards";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <PatientCards user={"user"} title={"Your Patients"} />
    </div>
  );
};

export default Dashboard;
