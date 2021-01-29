import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const InfoContainer = styled.div`
    color: #000;
    background: ${({lightBg}) => (lightBg ? '#fafafa' : '#1b1b1b')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col2' 'col2 col1'`)};
    }
`;

export const Column1 = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: ${({imgStart}) => (imgStart ? 'flex-end' : 'flex-start')};
    grid-area: col1;
`;

export const Column2 = styled.div`
    /* background-color: blue; */
    /* padding: 0 0 0 15px; */
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #48adf5;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#fafafa' : '#1b1b1b')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#1b1b1b' : '#fafafa')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    padding: 0 0 0 35px;
    padding: ${({imgStart}) => (imgStart ? '0 35px 0 0' : '0 0 0 35px')};
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;

export const BigBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;