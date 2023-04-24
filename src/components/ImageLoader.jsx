import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;
const StyledImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;
  z-index: -1000;
  transition: opacity 0.05s ease-in-out;

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }
`;

const ImageLoader = () => {
  const theme = useTheme();
  const [imgSrc, setImgSrc] = useState(null);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );

  // Check for screen size and change to correct picture
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };
    window.addEventListener("resize", handleResize);

    const imageToLoad =
      screenWidth >= 768 ? theme.imageDesktop : theme.imageMobile;
    async function loadImage() {
      const { default: image } = await import(
        `../assets/images/${imageToLoad}.webp`
      );
      setImgSrc(image);
    }
    loadImage();
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, theme]);

  return (
    <Overlay>
      <StyledImage
        priority
        rel="preload"
        src={imgSrc}
        srcset={`
        ${theme.imageMobile} 480w,
        ${theme.imageDesktop} 800w`}
        alt="Background image"
        role="presentation"
        fetchpriority="high"
      />
    </Overlay>
  );
};

export default ImageLoader;
