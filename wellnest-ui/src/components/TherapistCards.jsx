import "../styles/TherapistCards.css";
import TherapistCard from "./TherapistCard";

const color = {
  user: { borderColor: "#c5c5c5", color: "black" },
  therapist: { borderColor: "#c5c5c5", color: "black" },
};

const TherapistCards = ({ title, user }) => {
  return (
    <div className="therapist-cards">
      <div className="therapist-cards-header">
        <div style={{ color: color[user].color }} className="therapist-cards-title">
          {title}
        </div>
        <div className="therapist-cards-more-action">View All</div>
      </div>
      <div className="therapist-cards-grid">
        {Array.from(Array(6)).map((_, index) => (
          <TherapistCard key={index} color={color[user]} />
        ))}
      </div>
    </div>
  );
};

export default TherapistCards;
