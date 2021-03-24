import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'

export const LinkButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 1rem 0 0;
    font-size: 1.1rem;
    color: #48adf5;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #000;
    }

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`

export const LinkText = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
    padding-right: 20px;

    &:visited {
        text-decoration: none;
        color: #48adf5;

        &:hover {
            color: #000;
        }
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    
`;
