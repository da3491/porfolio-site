import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

// Components
import { ThemeProvider } from "./components/ThemeContext";
import ImageLoader from "./components/ImageLoader";
import ThemeSelector from "./components/ThemeSelector";
import ContactLinks from "./components/ContactLinks";
import Home from "./components/Home";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-shadow: border-box;
  font-family: "Roboto", 'sans-serif';

}
:root {
  --fs--2: clamp(0.69rem, calc(0.55rem + 0.65vw), 1.20rem);
  --fs--1: clamp(0.78rem, calc(0.55rem + 0.73vw), 1.30rem);
  --fs-0: clamp(0.88rem, calc(0.59rem + 1.58vw), 1.88rem);
  --fs-1: clamp(0.98rem, calc(0.60rem + 1.74vw), 2.34rem);
  --fs-2: clamp(1.11rem, calc(0.59rem + 2.34vw), 2.93rem);
  --fs-3: clamp(1.25rem, calc(0.56rem + 3.10vw), 3.66rem);
  --fs-4: clamp(1.40rem, calc(0.50rem + 4.07vw), 4.58rem);
  --fs-5: clamp(1.58rem, calc(0.70rem + 5.32vw), 5.72rem);

  --space-3xs: clamp(0.25rem, calc(0.18rem + 0.32vw), 0.50rem);
  --space-2xs: clamp(0.44rem, calc(0.30rem + 0.64vw), 0.94rem);
  --space-xs: clamp(0.69rem, calc(0.48rem + 0.96vw), 1.44rem);
  --space-s: clamp(0.88rem, calc(0.59rem + 1.28vw), 1.88rem);
  --space-m: clamp(1.31rem, calc(0.89rem + 1.92vw), 2.81rem);
  --space-l: clamp(1.75rem, calc(1.18rem + 2.57vw), 3.75rem);
  --space-xl: clamp(2.63rem, calc(1.78rem + 3.85vw), 5.63rem);
  --space-2xl: clamp(3.50rem, calc(2.37rem + 5.13vw), 7.50rem);
  --space-3xl: clamp(5.25rem, calc(3.55rem + 7.70vw), 11.25rem);
}

`;
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const CenteredContent = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1600px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Container>
        <ImageLoader />
        <CenteredContent>
          <ContactLinks />
          <Home />
          <ThemeSelector />
        </CenteredContent>
      </Container>
    </ThemeProvider>
  );
}

export default App;
