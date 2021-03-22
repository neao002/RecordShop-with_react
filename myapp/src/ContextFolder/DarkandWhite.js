import React from "react";

export const themes = {
  dark: {
    color: "white",
    background: "black;",
  },
  white: {
    color: "black",
    background: "white;",
  },
};

const ChangeColor = React.createContext(themes.dark);

export default ChangeColor;
