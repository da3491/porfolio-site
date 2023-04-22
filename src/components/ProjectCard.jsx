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
  // font-size: var(--fs-1);
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0;

  @media (max-aspect-ratio: 3/4) {
    font-size: 1.2rem;
  }
`;
const StyledTags = styled.span`
  color: ${(props) => props.themecolor};
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 5px;

  display: flex;
  gap: 5px;

  & :not(:last-child) {
    border-right: 1px solid ${(props) => props.themecolor};
    padding-right: 5px;
  }

  @media (max-aspect-ratio: 3/4) {
    font-size: 0.8rem;
  }
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
  cursor: pointer;
  transition: transform 0.1s linear, border 0.1s linear;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.025, 1.05);
    box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectCard = ({ title, image, tags, text, repoLink, liveLink }) => {
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
            {tags.map((tag, index) => {
              // console.log(tag);
              // console.log(index);
              return (
                <span key={tag} themecolor={theme.colors.accent}>
                  {tags[index]}{" "}
                </span>
              );
            })}
          </StyledTags>
        </div>
        <Button
          aria-label={`View more info on the ${title} project`}
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
            tags={tags}
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
