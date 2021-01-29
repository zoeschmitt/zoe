import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const SideMenu = styled.nav`
    background: transparent;
    /* width: 80px; */
    /* height: 100%; */
    /* margin-left: -80px; */
    /* display: flex; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 
    align-items: center; */
    /* font-size: 1rem; */
    position: sticky;
    top: 0;
    left:0;
    z-index: 10;
    float: left;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
//padding: 0 0 50px 0;
export const SideMenuContainer = styled.div`
    /* display: flex; */
    display: flex;
    /* justify-content: space-between; */
    padding-left: 30px;
    flex-direction:column;
    align-items: left;
    /* justify-content: center;
    align-items: center; */
    height: 100%;
    z-index: 1;
    width: 80px;
    /* float: left; */
`;

export const Menu = styled.ul`
    /* height: 100%; */
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    
    /* justify-content: center; */
    
    list-style: none;
    text-align: top;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    display: flex;
    /* align-items: top; */
    height: 80px;
`;

export const MenuLinks = styled(LinkS)`
    color: #48adf5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    /* height: 100%; */
    cursor: pointer;
    /* transform: rotate(-90deg); */

    &.active {
        border-bottom: 3px solid #48adf5;
        /* width: 50%; */
    }
`;

