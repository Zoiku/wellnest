import { chartAt } from "../../functions";

const variant = {
  0: "text",
  1: "outlined",
  2: "contained",
};

export const styling = (styles) => {
  let style = { transition: "all 0.2s ease" };
  const index0 = chartAt(styles, 0);
  const index1 = chartAt(styles, 1);
  const index2 = chartAt(styles, 2);

  if (index0) {
    style = {
      ...style,
      variant: variant[index0],
    };
  }

  if (index1) {
    if (index1 === "0") {
      style = {
        ...style,
        color: {
          default: "black",
          hover: "black",
        },
        background: {
          default: "inherit",
          hover: "inherit",
        },
        borderColor: {
          default: "#c5c5c5",
          hover: "black",
        },
      };
    } else if (index1 === "1") {
      style = {
        ...style,
        color: {
          default: "white",
          hover: "white",
        },
        background: {
          default: "#424242",
          hover: "black",
        },
        borderColor: {
          default: "inherit",
          hover: "inherit",
        },
      };
    } else if (index1 === "2") {
      style = {
        ...style,
        color: {
          default: "white",
          hover: "white",
        },
        background: {
          default: "#F4978E",
          hover: "#F4978E",
        },
        borderColor: {
          default: "inherit",
          hover: "inherit",
        },
      };
    } else if (index1 === "3") {
      style = {
        ...style,
        color: {
          default: "white",
          hover: "white",
        },
        background: {
          default: "#BD8CE9",
          hover: "#BD8CE9",
        },
        borderColor: {
          default: "inherit",
          hover: "inherit",
        },
      };
    }
  }

  if (index2) {
    style = {
      ...style,
      fullWidth: index2 === "0" ? true : false,
    };
  }

  return style;
};
