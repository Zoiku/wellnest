import "../../../styles/ViewTherapist.css";
import { Avatar } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Rating from "@mui/material/Rating";
import avatar from "../../../assets/avatar.png";

const Review = () => {
  const avatarSx = {
    sx: { height: 35, width: 35, fontWeight: 600, fontSize: "small" },
  };
  return (
    <div className="view-therapist-review">
      <div>
        <Avatar {...avatarSx}>J</Avatar>
      </div>
      <div className="view-therapist-review-text">
        <div style={{ display: "flex", alignContent: "center", gap: "10px" }}>
          <div>John Doe</div>
          <div>
            <Rating size="small" name="read-only" value={1} readOnly />
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          voluptates explicabo, assumenda facere libero corporis cum delectus!
          Porro numquam delectus hic amet corporis voluptatum dolorem cumque
          debitis laboriosam quidem tenetur tempore necessitatibus quis
          possimus, autem eaque odit iusto quo minus magni sapiente quia unde
          omnis ea. Quae nesciunt consectetur odit.
        </div>
      </div>
    </div>
  );
};

const Tag = () => <div className="tag">Depression</div>;

const ViewTherapist = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path, { replace: true });

  return (
    <div className="view-therapist-page">
      <div
        className="view-therapist-page-action"
        onClick={navigateTo("/user/dashboard")}
      >
        <span>
          <KeyboardBackspaceRoundedIcon />
        </span>
        <span>Go back</span>
      </div>

      <div className="view-therapist-meta">
        <div className="view-therapist-profile-intro">
          <div className="view-therapist-profile">
            <div className="view-therapist-profile-image">
              <img src={avatar} alt="" />
            </div>
            <div>John Doe</div>
          </div>
          <div className="view-therapist-profile-action-buttons">
            <Button styles={"010"} label={"Leave a review"} />
            <Button styles={"020"} label={"Book now"} />
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          aliquid cupiditate modi quisquam autem expedita reiciendis voluptates
          et, asperiores repellendus similique non eos tenetur maxime minima
          accusantium dolor porro ipsa veritatis laudantium magni dignissimos,
          quasi facilis delectus? Laborum, nesciunt id modi deleniti, a error
          officiis minus doloremque, facere eum ducimus.
        </div>
      </div>

      <div className="view-therapist-meta-1">
        <div className="view-therapist-meta-1-sessions-meta">
          <div>Accra, Ghana</div>
          <div>51 completed sessions</div>
        </div>
        <div className="view-therapist-meta-1-tags">
          {Array.from(Array(3)).map((_, index) => (
            <Tag key={index} />
          ))}
        </div>
      </div>

      <div className="view-therapist-reviews-container">
        <div>Reviews</div>
        <div className="view-therapist-reviews">
          {Array.from(Array(5)).map((_, index) => (
            <Review key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTherapist;
