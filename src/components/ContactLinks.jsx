import styled from "styled-components";
import { useTheme } from "./ThemeContext";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

const StyledIconGroup = styled.div`
  position: absolute;
  top: -0.5em;
  right: 0.25em;
  color: ${(props) => props.themecolor};

  display: flex;
  text-align: right;
  font-size: var(--fs-1);
  // font-size: var(--fs-2);
  margin-bottom: 1em;
  gap: 0.5em;
  z-index: 5;

  transition: color 300ms ease-in-out;
  @media (max-aspect-ratio: 3/4) {
    font-size: 1.6rem;
  }
`;
const StyledLinks = styled.a`
  color: inherit;
  line-height: 1.1;

  &:hover svg,
  &:active svg {
    color: white;
  }

  &:firt-child {
    font-size: 2.4rem;
  }
`;

const ContactLinks = () => {
  const theme = useTheme();

  return (
    <StyledIconGroup themecolor={theme.colors.accent}>
      <StyledLinks href="/resume.com" aria-label="Contact me through Gmail">
        <FaGoogle />
      </StyledLinks>
      <StyledLinks
        href="https://github.com/da3491"
        aria-label="View my github profile"
      >
        <FaGithub />
      </StyledLinks>
      <StyledLinks
        href="https://linkedin.com/da3491"
        aria-label="View my Linkedin Profile"
      >
        <FaLinkedinIn />
      </StyledLinks>
    </StyledIconGroup>
  );
};

export default ContactLinks;
