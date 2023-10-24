import "../styles/Note.css";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

const Note = ({ message }) => {
  return (
    <div className="note">
      <div>
        <ErrorOutlineRoundedIcon />
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Note;
