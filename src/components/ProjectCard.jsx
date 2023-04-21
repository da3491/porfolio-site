import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import styled from "styled-components";
const CardModal = React.lazy(() => import("./CardModal"));
// import Image from "../images/apple-clone-image.jpg";

const Card = styled.div`
  position: relative;
  width: 100%;

  background: ${(props) => props.themecolor};
  color: white;
  border: 1px solid #333;
  border-radius: 3px;
`;
const CardInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
`;
const Title = styled.div`
  font-size: var(--fs-1);
  font-weight: 300;
  margin: 0;
`;
const StyledTags = styled.span`
  color: ${(props) => props.themecolor};
  font-size: var(--fs--1);
`;
const Button = styled.button`
  grid-column: 2/3;
  display: inline;
  font-size: var(--fs--1);
  background: ${(props) => props.themecolor};
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.4em 1em;
`;

const ProjectCard = ({ title, image, text, repoLink, liveLink }) => {
  const theme = useTheme();
  const [visibleModal, setVisibleModal] = useState(false);

  if (!title) {
    title = "project1";
  }
  if (!image) {
    image = "airbnb-news-clone-image.jpg";
  }
  if (!text) {
    text = "Standard text";
  }

  return (
    <Card themecolor={theme.colors.darkGrey}>
      <CardInfo>
        <div>
          <Title>{title}</Title>
          <StyledTags themecolor={theme.colors.lightGrey}>
            JS | React | Chart.js | Responsive
          </StyledTags>
        </div>
        <Button
          themecolor={theme.colors.accent}
          onClick={() => setVisibleModal(true)}
        >
          More
        </Button>
      </CardInfo>
      <React.Suspense>
        {visibleModal && (
          <CardModal
            visible={visibleModal}
            title={title}
            image={image}
            text={text}
            repoLink={repoLink}
            liveLink={liveLink}
            closeModal={() => setVisibleModal(false)}
          />
        )}
      </React.Suspense>
    </Card>
  );
};

export default ProjectCard;
