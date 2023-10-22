import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import { styling } from "../styles/js/Button";

const ButtonComponent = (props) => {
  const styles = styling(props.styles);
  const Button = styled(LoadingButton)({
    minWidth: 130,
    background: styles?.background.default,
    color: styles?.color.default,
    textTransform: "capitalize",
    borderRadius: props?.borderRadius,
    fontFamily: [].join(","),
    "&:hover": {
      background: styles?.background.hover,
      color: styles?.color.default,
    },
  });

  return (
    <Button
      disableElevation
      variant={styles?.variant}
      fullWidth={styles?.fullWidth}
      startIcon={props?.icon}
      {...props}
    >
      <span>{props.label}</span>
    </Button>
  );
};

export default ButtonComponent;
