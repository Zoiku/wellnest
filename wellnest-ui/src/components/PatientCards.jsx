import "../styles/PatientCards.css";
import PatientCard from "./PatientCard";

const color = {
  user: { borderColor: "#c5c5c5", color: "black" },
  therapist: { borderColor: "#c5c5c5", color: "black" },
};

const PatientCards = ({ user, title }) => {
  return (
    <div className="patient-cards">
      <div className="patient-cards-header">
        <div
          style={{ color: color[user].color }}
          className="patient-cards-title"
        >
          {title}
        </div>
        <div className="patient-cards-more-action">View All</div>
      </div>
      <div className="patient-cards-grid">
        {Array.from(Array(10)).map((_, index) => (
          <PatientCard key={index} color={color[user]} />
        ))}
      </div>
    </div>
  );
};

export default PatientCards;
