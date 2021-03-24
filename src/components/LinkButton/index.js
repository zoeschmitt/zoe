import React from 'react'
import { LinkButtonContainer, LinkText, ArrowForward } from './LinkButtonElements'

const LinkButton = ({ label, dark, link }) => {
    return (
        <div>
            <LinkButtonContainer dark={dark}>
                <LinkText href={link} target="_blank">{label}</LinkText>
                <ArrowForward style={{ transform: `rotate(-45deg)` }}/>
            </LinkButtonContainer>
        </div>
    )
}

export default LinkButton
