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
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  width: 80%;
  max-width: 500px;
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
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
  &:hover {
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background: none;
  border: none;
  border-radius: 3px;
  width: 2em;
  height: 2em;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #dc3546;
  }
  svg {
    font-size: 2em;
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

const StyledTags = styled.span``;

const CardModal = ({ image, title, text, closeModal, repoLink, liveLink }) => {
  const theme = useTheme();
  return (
    <StyledModalOverlay>
      <StyledModal>
        <ModalClose onClick={() => closeModal(false)}>
          <GrClose />
        </ModalClose>
        <StyledImage src={`../src/assets/images/${image}`} alt="Project1" />
        <h2>{title}</h2>
        <StyledTags></StyledTags>
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
