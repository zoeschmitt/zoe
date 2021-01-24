import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer Title</FooterLinkTitle>
                            <FooterLink to="/about">About Me</FooterLink>
                            <FooterLink to="/work">About Me</FooterLink>
                            <FooterLink to="/resume">About Me</FooterLink>
                            <FooterLink to="/contactme">About Me</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer Title</FooterLinkTitle>
                            <FooterLink to="/about">About Me</FooterLink>
                            <FooterLink to="/work">About Me</FooterLink>
                            <FooterLink to="/resume">About Me</FooterLink>
                            <FooterLink to="/contactme">About Me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer Title</FooterLinkTitle>
                            <FooterLink to="/about">About Me</FooterLink>
                            <FooterLink to="/work">About Me</FooterLink>
                            <FooterLink to="/resume">About Me</FooterLink>
                            <FooterLink to="/contactme">About Me</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer Title</FooterLinkTitle>
                            <FooterLink to="/about">About Me</FooterLink>
                            <FooterLink to="/work">About Me</FooterLink>
                            <FooterLink to="/resume">About Me</FooterLink>
                            <FooterLink to="/contactme">About Me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
