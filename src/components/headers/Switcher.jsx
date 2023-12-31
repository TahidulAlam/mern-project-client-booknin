/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";
const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ margin: "0px" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

export default Switcher;
