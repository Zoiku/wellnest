import "../styles/Drawer.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const Drawer = (props) => {
  return (
    <SwipeableDrawer
      className="chat-component"
      anchor="bottom"
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {props.children}
    </SwipeableDrawer>
  );
};

export default Drawer;
