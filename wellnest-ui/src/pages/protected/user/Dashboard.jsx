import "../../../styles/Dashboard.css";
import TherapistCards from "../../../components/TherapistCards";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <TherapistCards user={"user"} title={"Your Matched Therapists"} />
      <TherapistCards user={"therapist"} title={"View Other Therapists"} />
    </div>
  );
};

export default Dashboard;
