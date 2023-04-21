import { useTheme, useThemeUpdate } from "./ThemeContext";
import themes from "../utils/themes";
import styled from "styled-components";

const StyledThemeSelector = styled.div`
  position: fixed;
  bottom: var(--space-m);
  // bottom: -0.5em;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: end;
  justify-content: center;
  gap: 2rem;
`;

const StyledButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  border-bottom: 4px solid #ccc;
  width: clamp(50px, 75px, 100px);
  height: 10px;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 5px solid ${(props) => props.theme};
  }

  @media (min-width: 1200px) {
    width: 75px;
    height: 12px;
  }
`;

const ThemeSelector = () => {
  const changeTheme = useThemeUpdate();
  const selectedTheme = useTheme();

  const isThemeSelected = (themeKey) => {
    // console.log("input is,", themeKey);
    // console.log("theme is,", selectedTheme);
    return selectedTheme === themeKey;
  };

  console.log(selectedTheme === themes.theme1);
  return (
    <StyledThemeSelector id="theme_Buttons">
      {Object.keys(themes).map((theme) => (
        <StyledButton
          key={theme}
          aria-label={`Select ${theme}`}
          onClick={() => {
            changeTheme(theme);
          }}
          theme={themes[theme].colors.accent}
          // className={isThemeSelected(theme) ? "active" : ""}
        ></StyledButton>
      ))}
    </StyledThemeSelector>
  );
};

export default ThemeSelector;
