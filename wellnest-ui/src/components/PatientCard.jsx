import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const PatientCard = ({ color }) => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);

  return (
    <div
      style={{ borderColor: color.borderColor }}
      onClick={navigateTo("/therapist/user/1")}
      className="patient-card"
    >
      <div
        style={{ borderColor: color.borderColor }}
        className="patient-card-image"
      >
        <img src={avatar} alt="" />
      </div>
      <div className="patient-card-details">
        <div>Jeremy Klayton</div>
        <div>4 upcoming sessions</div>
        <div>8 completed sessions</div>
      </div>
    </div>
  );
};

export default PatientCard;
