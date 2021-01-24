import React, { useState, useEffect } from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <IconContext.Provider value={{ color: '#1b1b1b' }}>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Z</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="work" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Work</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="resume" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Resume</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contactme" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Me</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
                        </NavBtn>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar

