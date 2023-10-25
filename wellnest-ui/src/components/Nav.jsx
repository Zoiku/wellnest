import "../styles/Nav.css";
import { Avatar, IconButton } from "@mui/material";
import Menu from "./Menu";
import { MenuItem } from "./Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";

const avartarSx = {
  sx: { height: 30, width: 30, fontSize: "small", fontWeight: 600 },
};

const Nav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState({
    profile: null,
    notification: null,
  });
  const open = {
    profile: Boolean(anchorEl.profile),
    notification: Boolean(anchorEl.notification),
  };
  const onClick = (component) => (event) => {
    setAnchorEl({ ...anchorEl, [component]: event.currentTarget });
  };
  const onClose = (component) => () => {
    setAnchorEl({ ...anchorEl, [component]: null });
  };
  const logout = () => navigate("/");

  const [openChat, setOpenChat] = useState(false);
  const handleOpen = () => {
    setOpenChat(true);
  };
  const handleClose = () => {
    setOpenChat(false);
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-title">Wellnest</div>
        <div></div>
      </div>
      <div className="nav-right">
        <IconButton onClick={handleOpen}>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-regular/20/sms.png"
            alt="/"
          />
        </IconButton>
        <IconButton onClick={onClick("notification")}>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-regular/20/appointment-reminders--v1.png"
            alt="/"
          />
        </IconButton>
        <IconButton onClick={onClick("profile")}>
          <Avatar {...avartarSx}>J</Avatar>
        </IconButton>
      </div>

      <Drawer
        open={openChat}
        onOpen={handleOpen}
        onClose={handleClose}
      ></Drawer>

      <Menu
        theme={"light"}
        open={open.notification}
        onClick={onClick("notification")}
        onClose={onClose("notification")}
        anchorEl={anchorEl.notification}
        position={"right"}
      ></Menu>

      <Menu
        theme={"light"}
        open={open.profile}
        onClick={onClick("profile")}
        onClose={onClose("profile")}
        anchorEl={anchorEl.profile}
        position={"right"}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Nav;
