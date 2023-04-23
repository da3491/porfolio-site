import React, { useContext, useState, useEffect } from "react";
import themes from "../utils/themes.js";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.theme1);
  // // // Animation for changing picture
  // const fadeIn = () => {
  //   const backgroundImage = document.querySelector(".background-image");
  //   if (backgroundImage) {
  //     backgroundImage.classList.remove("fade-out");
  //     backgroundImage.classList.add("fade-in");
  //   }
  // };

  // const fadeOut = () => {
  //   const backgroundImage = document.querySelector(".background-image");
  //   if (backgroundImage) {
  //     backgroundImage.classList.remove("fade-in");
  //     backgroundImage.classList.add("fade-out");
  //   }
  // };

  // async function changeTheme(themeName) {
  //   fadeOut(); // Trigger fade-out animation
  //   setTheme(themes[themeName]); // Update theme
  //   await new Promise((resolve) => setTimeout(resolve, 250)); // Wait for fade-out animation to complete (assuming 0.5s duration)
  //   fadeIn(); // Trigger fade-in animation
  // }

  function changeTheme(themeName) {
    setTheme(themes[themeName]);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={changeTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
