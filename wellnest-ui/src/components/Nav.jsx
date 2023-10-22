import "../styles/Nav.css";
import { Avatar, IconButton } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const iconSx = { sx: { color: "black" } };
const avartarSx = {
  sx: { width: 30, height: 30, fontSize: "small", fontWeight: 600 },
};

const Nav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const onClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => setAnchorEl(null);
  const logout = () => navigate("/");

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-title">Wellnest</div>
        <div></div>
      </div>
      <div className="nav-right">
        <IconButton>
          <NotificationsNoneRoundedIcon {...iconSx} fontSize="small" />
        </IconButton>
        <IconButton>
          <InboxRoundedIcon {...iconSx} fontSize="small" />
        </IconButton>
        <IconButton onClick={onClick}>
          <Avatar {...avartarSx}>J</Avatar>
        </IconButton>
      </div>

      <Menu
        open={open}
        onClick={onClick}
        onClose={onClose}
        anchorEl={anchorEl}
        position={"right"}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Nav;
