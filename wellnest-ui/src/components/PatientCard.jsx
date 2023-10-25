import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const PatientCard = ({ color, focus }) => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);

  return (
    <div
      style={{ borderColor: color.borderColor }}
      onClick={navigateTo("/therapist/user/1")}
      className="patient-card"
    >
      <div className="patient-card-left">
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

      {focus && <Button label={"Join call"} styles={"221"} />}
    </div>
  );
};

export default PatientCard;
