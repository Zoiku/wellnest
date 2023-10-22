import "../../../styles/Dashboard.css";
import InfoCards from "../../../components/InfoCards";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <InfoCards user={"user"} title={"Your Matched Therapists"} />
      <InfoCards user={"therapist"} title={"View Other Therapists"} />
    </div>
  );
};

export default Dashboard;
