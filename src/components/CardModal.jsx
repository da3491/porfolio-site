import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useTheme } from "./ThemeContext";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: black;
`;
const StyledModal = styled.div`
  position: relative;
  background: ${(props) => props.themecolor};
  border-radius: 5px;
  color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  width: 80%;
  max-width: 500px;
  h2 {
    font-size: 1.6rem;
    margin-bottom: 5px;
    font-weight: 400;
  }
  p {
    font-weight: 300;
    font-size: ;
    line-height: 1.5;
    margin: 1rem 0;
  }
`;
const StyledTags = styled.span`
  color: ${(props) => props.themecolor};
  font-size: 1rem;
  font-weight: 200;
  margin: 5px 0 5px 5px;

  display: flex;
  justify-content: center;
  gap: 5px;

  & :not(:last-child) {
    border-right: 1px solid ${(props) => props.themecolor};
    padding-right: 5px;
  }
`;
const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  margin-top: 2em;
`;
const StyledButton = styled.button`
  background: ${(props) => props.themecolor};
  border: none;
  color: white;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.1s linear, border 0.1s linear;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.025, 1.05);
    box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;
const ModalClose = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background: none;
  color: white;
  border: none;
  border-radius: 3px;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #dc3546;
  }
  svg {
    font-size: 2em;
    color: inherit;
  }
  svg path {
    stroke: white;
  }
  svg:hover {
    color: white;
  }
`;
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 2em 0;
`;

const CardModal = ({
  image,
  title,
  tags,
  text,
  closeModal,
  repoLink,
  liveLink,
}) => {
  const theme = useTheme();
  return (
    <StyledModalOverlay>
      <StyledModal themecolor={theme.colors.darkGrey}>
        <ModalClose onClick={() => closeModal(false)}>
          <GrClose />
        </ModalClose>
        <StyledImage src={`../src/assets/images/${image}`} alt="Project1" />
        <h2>{title}</h2>
        <StyledTags>
          {tags.map((tag, index) => {
            return (
              <span key={tag} themecolor={theme.colors.accent}>
                {tags[index]}{" "}
              </span>
            );
          })}
        </StyledTags>
        <p>{text}</p>
        <StyledButtons>
          <StyledButton themecolor={theme.colors.accent}>
            <a href={repoLink} target="_blank">
              Repo
            </a>
          </StyledButton>
          <StyledButton themecolor={theme.colors.accent}>
            <a href={liveLink} target="_blank">
              Live
            </a>
          </StyledButton>
        </StyledButtons>
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default CardModal;
