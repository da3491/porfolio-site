import styled from "styled-components";
import { useTheme } from "./ThemeContext";
import skills from "../utils/skills";

import Skill from "./Skill";

const Grid = styled.div`
  max-width: 100%;
  height: 100%;
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 1fr);
  gap: 0.1em;
`;
const P = styled.p`
  background-color: ${(props) => props.darkGrey};
  border-radius: 3px;
  font-weight: 300;

  grid-column: 1/3;
  grid-row: 1/4;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1em;
`;

const Skills = () => {
  const theme = useTheme();

  return (
    <Grid>
      <P accent={theme.colors.accent} darkGrey={theme.colors.darkGrey}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum
        consectetur voluptate assumenda debitis facilis natus beatae voluptates
        quisquam error?
      </P>
      {Object.entries(skills).map((skill, index) => {
        return <Skill key={index} name={skill[1].name} icon={skill[1].icon} />;
      })}
    </Grid>
  );
};

export default Skills;
