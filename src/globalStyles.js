import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
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

export const Button = styled.button`
    width: 10rem;
    height: 3.125rem;
    border-radius: 4px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    
    
`;

export default GlobalStyles;

