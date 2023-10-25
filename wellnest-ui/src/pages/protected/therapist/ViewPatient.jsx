import "../../../styles/ViewPatient.css";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";
import PatientCard from "../../../components/PatientCard";
import Button from "../../../components/Button";
import { TextField } from "@mui/material";

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
          <PatientCard focus color={{ borderColor: "#c5c5c5", color: "#c5c5c5" }} />
        </div>
        <div className="grid-item grid-b meeting-schedule">
          <div></div>
          <div></div>
        </div>
        <div className="grid-item grid-c patient-history">
          <div className="patient-history-controller">
            <div>What is your main reason for therapy</div>
            <TextField
              disabled
              value={"Anxiety, Depression"}
              fullWidth
              size={"small"}
            />
          </div>
          <div className="patient-history-controller">
            <div>Do you have any previous therapy experience?</div>
            <TextField disabled value={"Yes"} fullWidth size={"small"} />
          </div>
          <div className="patient-history-controller">
            <div>If yes, please elaborate.</div>
            <TextField
              value={
                "In 2019 I got into therapy for my depression. It was a very tedious experience and I did not think I would be looking for another therapist anytime."
              }
              multiline
              rows={5}
              fullWidth
              size={"small"}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
