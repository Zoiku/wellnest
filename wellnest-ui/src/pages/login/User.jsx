import "../../styles/Auth.css";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { Box, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path, { replace: true });

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <div className="auth-header">
          <div className="auth-title">Wellnest</div>
          <div className="auth-title-helper">
            Let us help you connect with a Therapist
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
            <div className="auth-button-controller">
              <Button
                onClick={navigateTo("/user/dashboard")}
                styles={"210"}
                label={"Sign in"}
              />
            </div>
          </Box>
        </div>
        <div className="auth-helper auth-helper-1">
          <span>Or sign in with</span>
        </div>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Button startIcon={<GoogleIcon />} styles={"211"} label={"Google"} />
          <Button startIcon={<FacebookIcon />} styles={"211"} label={"Facebook"} />
        </Stack>
        <div className="auth-helper">
          <span
            className="auth-helper-action"
            onClick={navigateTo("/register/user")}
          >
            Register new account here
          </span>
        </div>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button
            styles={"221"}
            label={"Therapist"}
            onClick={navigateTo("/therapist")}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Login;
