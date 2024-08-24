import { createGlobalStyle } from "styled-components";

import * as v from "./variables";

// Setting theme colors on GlobalStyle ->
// ${({theme}) => (theme ? theme.primary : defaultMode.primary)};

const GlobalStyle = createGlobalStyle`
/* General style */
/* :root {
  background-color: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
}; */

/* VARIABLES */
html {
  /* Light theme */
  --color-primary-light: papayawhip;
  --color-secondary-light: #BF4F74;
  --color-title-light: #333;
  --color-subtitles-light: black;
  --color-icons-light: black;
  --color-button-light: papayawhip;
  /* Dark theme */
  --color-primary-dark: #333;
  --color-secondary-dark: #BF4F74;
  --color-title-dark: #f8f8f8;
  --color-subtitles-dark: #f8f8f8;
  --color-icons-dark : #f8f8f8;
  --color-button-dark: papayawhip;
  /* Other */
}

* {
  box-sizing: border-box;
}

html,
body,
#root,
.App {
    margin: 0;
    height: 100%;
}

#root {
display: grid;
}

/* Application Structure */
body {
  font-family: Arial, sans-serif;
}

main {
  flex-grow: 1;
}

/* Footer  */
footer {
  padding: 2rem 0;
  /* background-color: ${({theme}) => (theme ? theme.primary : v.defaultMode.secondary)}; */
  text-align: center;
}

/* Page Content */
h1 {
  text-align: center;
}

`;



export default GlobalStyle;