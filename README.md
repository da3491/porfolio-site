## Screenshots

![Site Screenshot](https://raw.githubusercontent.com/da3491/react-portfolio/main/src/images/PortfolioDesign.jpg)

# Portfolio

Thanks for taking the time to check out my page!

This project has gone through multiple stages of structure and design.

As a multi-page site, I found there was not enough content for the amount of space I was using. My goal was to be concise with my delivery of information and make it all easily accessible. I feel I achieved this by removing the need to scroll down the window and make it a Single Page site, and incorporating tabs and modals.

As far as the design goes, I liked minimalistic styling. I wanted to use a Sans-Serif font with a low font weight. To show off a little of some personal flare, I wanted to include some beautiful images of nature that will have dynamic color styles to accompany it.

For some interactivity, theres of course the themese which change according the the selector fixed to the bottom of the screen. I plan on incorporating more as time goes on, adding more hover and click effects, and animations.

## Sections

- Links to email and socials
- Short bio section
- Projects section
- Skills section

## Tech Stack

**React:**
react-router, react-icons, styled-components, swipeable-react

**Resources:**

## Features

**Base:**

- React Hooks (useState, useEffect, useContext)
- Multiple themes with dynamic images/colors
- Fully Responsive
- Swipeable between Projects and Skills

**Considerations:**
-ProjectCards full page on mobile?

**Future Features:**
-Logo Animation: Spread to show full name

## To Do

- Create Logo
- Find loading alternative for Images (srcset/sizes)
- Skills section design
- Modal window styling
- React Loading Skeleton

## Lessons Learned

**No Bootstrap**
I chose not to use Bootstrap and instead write my own styles with styled-components, allowing me more control over the aesthetic and functionality of my website, and helped me achieve the look and feel I am after. I also enjoyed the cleanliness of my components without the class styling BootStrap provides.

**Dynamic Background Images**
I had multiple large images to load in my website that were slowing down the loading speed of my website, which would affect the user experience. To resolve this, I implemented lazy loading and prioritized the images that were immediately seen. I also made sure to compress these images so that they took up less space and could be loaded more quickly.

**Responsiveness**
I found difficulty in making the spacing and font sizes look great on any screen size. To resolve this, I employed a number of techniques, including using the CSS function clamp to limit the size of font and spacing, and using media queries more sparingly, mainly for 3/4 aspect ratio as the transition from desktop to mobile.

**Hosting on Gh-pages**
It was a little of a challenge hosting my react website on gh-pages. Through reading documentation and some trial and error, I learned more on the process of deploying my changes to the branch hosting my site. This strengthened my understanding of git and working with react in production.
