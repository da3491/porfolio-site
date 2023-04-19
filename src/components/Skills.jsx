import styled from "styled-components";
import { useTheme } from "./ThemeContext";

import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRuby,
  SiRubyonrails,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.themecolor};
  color: white;
  border-radius: 5px;
  border: 1px solid #333;
`;
const Grid = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: var(--space-xs);
  gap: var(--space-xs);
`;
const Col = styled.div`
  color: ${(props) => props.themecolor};
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: center;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  justify-content: flex-start;
  align-items: center;
`;
const Flex = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs--1);
  color: inherit;

  & div {
    color: white;
  }

  & svg {
    font-size: var(--fs-0);
    color: inherit;
  }

  &:nth-of-type(6) svg {
    font-size: var(--fs-2);
  }
`;

const Skills = () => {
  const theme = useTheme();

  return (
    <Container themecolor={theme.colors.darkGrey}>
      <Grid themecolor={theme.colors.lightGrey}>
        {/* HTML/CSS */}
        <Flex>
          <div>HTML/CSS</div>
          <div>
            <FaHtml5 />
            <FaCss3Alt />
          </div>
        </Flex>
        {/* Bootstrap */}
        <Flex>
          <div>Bootstrap</div>
          <FaBootstrap />
        </Flex>
        {/* JavaScript */}
        <Flex>
          <div>JavaScript</div>
          <SiJavascript />
        </Flex>
        {/* React */}
        <Flex>
          <div>React</div>
          <FaReact />
        </Flex>
        {/* Ruby */}
        <Flex>
          <div>Ruby</div>
          <SiRuby />
        </Flex>
        {/* Rails */}
        <Flex>
          <div>RoR</div>
          <SiRubyonrails />
        </Flex>
        {/* Git */}
        <Flex>
          <div>Git</div>
          <FaGitAlt />
        </Flex>
        {/* Heroku */}
        <Flex>
          <div>Heroku</div>
          <SiHeroku />
        </Flex>
        {/* Netlify */}
        <Flex>
          <div>Netlify</div>
          <SiNetlify />
        </Flex>
      </Grid>
    </Container>
  );
};

export default Skills;
