import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Helvetica','Roboto', 'Arial', 'sans-serif';
    box-sizing: border-box;
    }
    body {
        background-color: #f2f2f2;
    }
`;

export const theme = {
    brand: '#E47D31',
}