import { Menu } from "@mui/material";

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
          elevation: 0,
          sx: {
            border: "1px solid #c5c5c5",
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
      {props.children}
    </Menu>
  );
};

export default MenuComponent;
