import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.darkGrey};
  font-size: 1.4rem;
  border-radius: 3px;
  font-weight: 300;
  overflow: hidden;

  padding-left: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 300ms ease-in-out, transform 200ms ease-in-out;

  :hover {
    z-index: 5;
    transform: scale(1.1);
    background-color: ${(props) => props.lightGrey};
    transition: background-color 300ms ease-in-out, transform 200ms ease-in-out,
      z-index 300ms ease-in-out;
    // color: ${(props) => props.accent};
    color: black;
  }

  @media (max-aspect-ratio: 3/4) {
    font-size: 1rem;
  }
`;

const Skill = ({ name, icon }) => {
  const theme = useTheme();
  return (
    <Container
      accent={theme.colors.accent}
      darkGrey={theme.colors.darkGrey}
      lightGrey={theme.colors.lightGrey}
    >
      {name}
    </Container>
  );
};

export default Skill;
