import "../../../styles/ViewPatient.css";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
import PatientCard from "../../../components/PatientCard";
import Button from "../../../components/Button";

const ViewPatient = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path, { replace: true });

  return (
    <div className="view-patient-page">
      <div>
        <Button
          startIcon={<KeyboardBackspaceRoundedIcon />}
          styles={"001"}
          label={"Go back"}
          onClick={navigateTo("/therapist/dashboard")}
        />
      </div>

      <div className="view-patient-page-grid">
        <div className="grid-item grid-a">
          <PatientCard color={"gray"} />
        </div>
        <div className="grid-item grid-b"></div>
        <div className="grid-item grid-c"></div>
      </div>
    </div>
  );
};

export default ViewPatient;
