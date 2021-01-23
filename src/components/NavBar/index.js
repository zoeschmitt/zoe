import React from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FaBars } from 'react-icons/fa';

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>Z</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="work">Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resume">Resume</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactme">Contact Me</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar

