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
`;

const ImageLoader = () => {
  const theme = useTheme();
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const { default: image } = await import(
        `../assets/images/${theme.imageMobile}.jpg`
      );
      setImgSrc(image);
    }
    loadImage();
  }, [theme.imageDesktop]);

  // const srcSet = `"../assets/images/${theme.imageMobile}" 1200w, "../assets/images/${theme.imageDesktop}" 2400w`;

  console.log(theme.imageDesktop);
  console.log(theme.imageMobile);

  return (
    <Overlay>
      <StyledImage
        priority
        rel="preload"
        src={imgSrc}
        // srcSet={srcSet}
        role="presentation"
        fetchpriority="high"
      />
    </Overlay>
  );
};

export default ImageLoader;
