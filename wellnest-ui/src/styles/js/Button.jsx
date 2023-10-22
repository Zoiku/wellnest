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
          default: "white",
          hover: "white",
        },
        background: {
          default: "black",
          hover: "#27282e",
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
          default: "#dd8d8d",
          hover: "rgb(202, 125, 125)",
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
          default: "rgb(226, 138, 226)",
          hover: "rgb(221, 115, 221)",
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
