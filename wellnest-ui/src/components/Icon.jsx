import "../styles/Icon.css";

const Icon = ({ src }) => {
  return (
    <div className="icon">
      <img src={src} alt={src} />
    </div>
  );
};

export default Icon;
