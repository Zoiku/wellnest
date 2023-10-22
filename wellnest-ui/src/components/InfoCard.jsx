import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

const InfoCard = ({ color }) => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);

  return (
    <div
      style={{ borderColor: color.borderColor }}
      onClick={navigateTo("/user/therapist/1")}
      className="info-card"
    >
      <div
        style={{ borderColor: color.borderColor }}
        className="info-card-image"
      >
        <img src={avatar} alt="" />
      </div>
      <div className="info-card-details">
        <div>John Doe</div>
        <div className="info-card-detail-rating">
          <span>
            <StarBorderRoundedIcon fontSize="small" />
          </span>
          <span>5.0 (93)</span>
        </div>
        <div>GHS 75/Session</div>
      </div>
    </div>
  );
};

export default InfoCard;
