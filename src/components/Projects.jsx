import styled from "styled-components";
import projects from "../utils/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-row: 3/5;
  grid-template-columns: 1;
  gap: var(--space-3xs);
`;

const Projects = () => {
  return (
    <Container>
      {Object.keys(projects).map((key) => (
        <ProjectCard
          key={key}
          tags={projects[key].tags}
          title={projects[key].title}
          image={projects[key].image}
          text={projects[key].text}
          repoLink={projects[key].repoLink}
          liveLink={projects[key].liveLink}
        />
      ))}
    </Container>
  );
};

export default Projects;
