import "../styles/Nav.css";
import { Avatar, IconButton } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const iconSx = { sx: { color: "#24252a" } };
const avartarSx = {
  sx: { width: 30, height: 30, fontSize: "small", fontWeight: 600 },
};

const Nav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState({
    profile: null,
    chats: null,
    notification: null,
  });
  const open = {
    profile: Boolean(anchorEl.profile),
    chats: Boolean(anchorEl.chats),
    notification: Boolean(anchorEl.notification),
  };
  const onClick = (component) => (event) => {
    setAnchorEl({ ...anchorEl, [component]: event.currentTarget });
  };
  const onClose = (component) => () => {
    setAnchorEl({ ...anchorEl, [component]: null });
  };
  const logout = () => navigate("/");

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-title">Wellnest</div>
        <div></div>
      </div>
      <div className="nav-right">
        <IconButton onClick={onClick("notification")}>
          <NotificationsNoneRoundedIcon {...iconSx} fontSize="small" />
        </IconButton>
        <IconButton onClick={onClick("chats")}>
          <SmsOutlinedIcon {...iconSx} fontSize="small" />
        </IconButton>
        <IconButton onClick={onClick("profile")}>
          <Avatar {...avartarSx}>J</Avatar>
        </IconButton>
      </div>

      <Menu
        open={open.notification}
        onClick={onClick("notification")}
        onClose={onClose("notification")}
        anchorEl={anchorEl.notification}
        position={"right"}
      ></Menu>

      <Menu
        open={open.chats}
        onClick={onClick("chats")}
        onClose={onClose("chats")}
        anchorEl={anchorEl.chats}
        position={"right"}
      ></Menu>

      <Menu
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
