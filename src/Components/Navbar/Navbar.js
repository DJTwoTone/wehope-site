import React from 'react'
import wehopelogo from '../../images/wehopelogo.jpg'
import {
    Nav,
    NavContainer,
    NavLogo,
    LogoImg,
    NavMenu,
    NavItem,
    NavLink

} from './Navbar.elements'


const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <LogoImg src={wehopelogo} alt='We Hope Logo' />
                </NavLogo>

                <NavMenu>
                    <NavItem>
                        <NavLink to='/about'>
                            ABOUT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/blog'>
                            BLOG
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/contact'>
                            CONTACT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/volunteer'>
                            VOLUNTEER
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/donate'>
                            DONATE
                        </NavLink>
                    </NavItem>
                </NavMenu>
            </NavContainer>
            
        </Nav>
    )
}

export default Navbar
