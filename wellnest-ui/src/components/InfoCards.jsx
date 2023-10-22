import "../styles/InfoCards.css";
import InfoCard from "./InfoCard";

const color = {
  user: { borderColor: "black", color: "black" },
  therapist: { borderColor: "black", color: "black" },
};

const InfoCards = ({ title, user }) => {
  return (
    <div className="info-cards">
      <div className="info-cards-header">
        <div style={{ color: color[user].color }} className="info-cards-title">
          {title}
        </div>
        <div className="info-cards-more-action">View All</div>
      </div>
      <div className="info-cards-grid">
        {Array.from(Array(9)).map((_, index) => (
          <InfoCard key={index} color={color[user]} />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
