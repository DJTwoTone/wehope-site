import React from 'react'
import wehopelogo from '../../images/wehopelogo.jpg'
import {
    Nav,
    NavContainer,
    NavLogo,
    LogoImg,
    NavMenu,
    NavItem,
    NavLink,
    NavButton

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
                        <NavLink to='/aboutus'>
                            ABOUT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/programs'>
                            PROGRAMS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/events'>
                            EVENTS
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
                            <NavButton>
                                VOLUNTEER
                            </NavButton>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/donate'>
                            <NavButton>
                                DONATE
                            </NavButton>
                        </NavLink>
                    </NavItem>
                </NavMenu>
            </NavContainer>
            
        </Nav>
    )
}

export default Navbar
