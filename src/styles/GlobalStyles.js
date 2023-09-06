import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color:#F47314;
    }

    a:link {
        color: #F47314;
        
    }

    a:visited {
        color: #F47314;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }

    html{
        scroll-behavior: smooth;
      }

`