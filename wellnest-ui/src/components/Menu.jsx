import "../styles/Menu.css";
import { Menu } from "@mui/material";

export const MenuItem = (props) => {
  return <div {...props} className="menu-item"></div>;
};

const MenuComponent = (props) => {
  const position = {
    left: {
      transformOrigin: { horizontal: "left", vertical: "top" },
      anchorOrigin: { horizontal: "left", vertical: "bottom" },
    },
    right: {
      transformOrigin: { horizontal: "right", vertical: "top" },
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    },
  };

  const theme = {
    dark: {
      background: "#24252a",
      color: "white",
      border: "initial",
    },
    light: {
      background: "white",
      color: "black",
      border: "1px solid #c5c5c5",
    },
  };

  return (
    <Menu
      id="lock-menu"
      disableScrollLock
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
      onClick={props.onClose}
      transformOrigin={position[props.position]?.transformOrigin}
      anchorOrigin={position[props.position]?.anchorOrigin}
      slotProps={{
        paper: {
          position: "relative",
          elevation: 0,
          sx: {
            background: theme[props.theme].background,
            color: theme[props.theme].color,
            border: theme[props.theme].border,
            borderRadius: 1,
            minWidth: 150,
          },
        },
      }}
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
    >
      {props.header && <div className="menu-header">{props.header}</div>}
      {props.children}
      {props.footer && <div className="menu-footer">{props.footer}</div>}
    </Menu>
  );
};

export default MenuComponent;
