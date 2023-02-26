import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
   font-size: 16px;

}

::-webkit-scrollbar {
   display: none;
}

*, *::before, *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   list-style: none;
}

body {
   margin: 0;
   padding: 0;
   font-family: "Roboto", "Poppins", "Roboto-flex", sans-serif;
   width: 100%;
   height: 100vh;
   background-color: hsl(0, 0%, 15%);
   color: #e9e9e9;
}

button {
   color: #fafafa;
   border: none;
   outline-color: transparent;
   cursor: pointer;
}

input, textarea {
   color: #e9e9e9;
}

h1 {
   font-size: 1.8rem;
}
h2 {
   font-size: 1.6rem;
}
h3 {
   font-size: 1.4rem;
}
h4 {
   font-size: 1.2rem;
}
h5 {
   font-size: 1.1rem;
}
h6 {
   font-size: 1rem;
}

`;

export default GlobalStyle;
