import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles';


export const Nav = styled.nav`
    background: #fff;
    height: 135px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    position: sticky;
    top: 0;

    @media screen and (max-width: 480px) {
        height: 95rem;
    }
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 135px;

    @media screen and (max-width: 480px) {
        height: 95px;
    }
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 150px;
    height: auto;

    @media screen and (max-width: 480px) {
        width: 85px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


`;

export const NavItem = styled.li`
    height: 80px;

`;

export const NavLink = styled(Link)`
    color: #3271B4;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2.75rem;
    height: 100%
`;

export const NavButton = styled(Button)`
    background: #543263;
    cursor: pointer;

    ${Button}
`;

