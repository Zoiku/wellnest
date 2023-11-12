import "../styles/FormInputs.css";
import useObject from "../hooks/useObject";
import { TextField } from "@mui/material";

export const FormInputs = ({ children }) => (
  <div className="form-inputs">{children}</div>
);

const FormInput = (props) => {
  const { removeProps } = useObject(props);
  const newProps = removeProps(["label", "labelHelper"]);
  return (
    <div className="form-input">
      <div className="form-label">
        <span>{props.label}</span>
      </div>
      <div>
        <TextField size="small" fullWidth {...newProps} />
      </div>
    </div>
  );
};

export default FormInput;
