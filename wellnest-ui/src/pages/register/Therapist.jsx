import "../../styles/Auth.css";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { Box, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path, { replace: true });

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <div className="auth-header">
          <div className="auth-title">Wellnest</div>
          <div className="auth-title-helper">
            Let us help you connect with Clients
          </div>
        </div>
        <div>
          <Box component={"form"} className="auth-form">
            <div className="auth-input-controller">
              <TextInput label={"Email"} />
            </div>
            <div className="auth-input-controller">
              <TextInput label={"Password"} />
            </div>
            <div className="auth-input-controller">
              <TextInput label={"Confirm Password"} />
            </div>
            <div className="auth-button-controller">
              <Button styles={"200"} label={"Sign up"} />
            </div>
          </Box>
        </div>
        <div className="auth-helper auth-helper-1">
          <span>Or sign up with</span>
        </div>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Button icon={<GoogleIcon />} styles={"201"} label={"Google"} />
          <Button icon={<FacebookIcon />} styles={"201"} label={"Facebook"} />
        </Stack>
        <div className="auth-helper">
          <span
            className="auth-helper-action"
            onClick={navigateTo("/therapist")}
          >
            Already a user? Sign in here
          </span>
        </div>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button styles={"211"} label={"User"} onClick={navigateTo("/")} />
        </Stack>
      </div>
    </div>
  );
};

export default Register;
