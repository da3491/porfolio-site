import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
// import Projects from "./Projects";
const Projects = React.lazy(() => import("./Projects"));
import Skills from "./Skills";
// const Skills = React.lazy(() => import("./Skills"));

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2em;

  @media (max-aspect-ratio: 3/4) {
    grid-template-columns: 1fr;
  }
  // @media (min-width: 1400px) {
  //   gap: 8em;
  // }
`;
const GridRow = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 10%);

  @media (max-aspect-ratio: 3/4) {
    grid-template-rows: repeat(5, 20%);
  }
`;
const Header = styled.h1`
  grid-row: 2/3;

  position: relative;
  // font-size: var(--fs-4);
  font-size: 3.4rem;
  margin-bottom: 1em;
  margin-left: 1rem;
  font-weight: 300;
  text-align: left;
  color: white;

  @media (max-aspect-ratio: 3/4) {
    font-size: 2rem;
  }
`;
const Bio = styled.div`
  grid-row: 5/9;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (max-aspect-ratio: 3/4) {
    grid-row: 3/6;
  }
`;
const Paragraph = styled.p`
  line-height: 1.6;
  // font-size: var(--fs--1);
  font-size: 1.2rem;
  font-weight: 300;
  color: white;
  border-radius: 5px;
  margin: 1.5em;

  @media (max-aspect-ratio: 3/4) {
    font-size: var(--fs-1);
    padding: 0;
    line-height: 1.4;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
const ContentButtons = styled.div`
  // Grid item stylings
  grid-row: 4/5;
  align-items: end;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  text-align: center;

  @media (max-aspect-ratio: 3/4) {
    grid-row: 1/2;
    font-size: var(--fs-1);
  }
`;
const ContentButton = styled.button`
  display: inline;
  background: none;
  border: none;

  color: white;
  // font-size: var(--fs-1);
  font-size: 1.5rem;
  padding-bottom: var(--space-xs);

  cursor: pointer;

  & h2 {
    font-weight: 300;
  }

  &:hover,
  &:active {
    box-shadow: inset 0px -3px 0px -1px white;
  }

  @media (max-aspect-ratio: 3/4) {
    font-size: 1.2rem;
  }
`;
const ContentLoaded = styled.div`
  // Grid item stylings
  grid-row: 5/9;
  @media (max-aspect-ratio: 3/4) {
    grid-row: 2/6;
    margin-bottom: 1em;
  }
`;

const Home = () => {
  const [content, setContent] = useState(true);
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setContent(false);
      console.log("User Swiped Left!", eventData);
    },
    onSwipedRight: (eventData) => {
      setContent(true);
      console.log("User Swiped Left!", eventData);
    },
    // ...config,
  });
  return (
    <Container>
      <GridRow>
        <Header>Hey, there.</Header>
        <Bio>
          <Paragraph>
            I'm Drew, a Front-End developer who loves learning new technologies,
            building clean codebases and interfaces, and growing as a
            professional and individual. I'm a huge foodie who loves to travel
            and a mountain view (as you might guess). <br />
            <br />I appreciate you checking out my site! Feel free to reach out
            if interested in working with me on your project.
          </Paragraph>
        </Bio>
      </GridRow>
      <GridRow>
        <ContentButtons>
          <ContentButton onClick={() => setContent(true)}>
            <h2>Projects</h2>
          </ContentButton>
          <ContentButton onClick={() => setContent(false)}>
            <h2>Skills</h2>
          </ContentButton>
        </ContentButtons>
        <ContentLoaded {...handlers}>
          <React.Suspense>{content ? <Projects /> : <Skills />}</React.Suspense>
        </ContentLoaded>
      </GridRow>
    </Container>
  );
};

export default Home;
