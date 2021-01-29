import React from 'react';
import { SideMenu, SideMenuContainer, Menu, MenuItem, MenuLinks } from './WorkSideMenuElements';

const WorkSideMenu = () => {
    return (
        <>
            <SideMenu>
                <SideMenuContainer>
                    <Menu>
                        <MenuItem>
                            <MenuLinks to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Personal Website</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks to="contractor" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contractor App</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks to="inventory" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Inventory App</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks to="store" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Aircraft Store</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks to="trailerhub" smooth={true} duration={500} spy={true} exact='true' offset={-80}>TrailerHub</MenuLinks>
                        </MenuItem>
                    </Menu>
                </SideMenuContainer>
            </SideMenu>
        </>
    )
}

export default WorkSideMenu