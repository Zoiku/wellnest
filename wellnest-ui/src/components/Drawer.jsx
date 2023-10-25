import "../styles/Drawer.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";

const Drawer = (props) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
      disableSwipeToOpen={false}
      PaperProps={{ elevation: 5, className: props.className }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div className="drawer-close-button">
        <IconButton sx={{ color: "white" }} onClick={props.onClose}>
          <CloseRoundedIcon color="inherit" />
        </IconButton>
      </div>

      <div style={{ height: "100%" }}>{props.children}</div>
    </SwipeableDrawer>
  );
};

export default Drawer;
