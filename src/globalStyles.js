import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    /* font-family: ; */
    }
`;

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 480px) {
        padding-left: 15px;
        padding-right: 15px;
    }

`;

export default GlobalStyles;

