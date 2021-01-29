import React from 'react'
import { CardsContainer, CardsH1, CardsWrapper, CardsCard, CardsIcon, CardsH2, CardsP } from './CardsElements'

const Cards = () => {
    return (
        <CardsContainer id="">
            <CardsH1>Projects</CardsH1>
            <CardsWrapper> 
                <CardsCard>
                    <CardsIcon src="/images/rocket.svg" alt="space"/>
                    <CardsH2>Project Name</CardsH2>
                    <CardsP>This project was made with blah using blah and does blah</CardsP>
                </CardsCard>
                <CardsCard>
                    <CardsIcon src="/images/rocket.svg" alt="space"/>
                    <CardsH2>Project Name</CardsH2>
                    <CardsP>This project was made with blah using blah and does blah</CardsP>
                </CardsCard>
                <CardsCard>
                    <CardsIcon src="/images/rocket.svg" alt="space"/>
                    <CardsH2>Project Name</CardsH2>
                    <CardsP>This project was made with blah using blah and does blah</CardsP>
                </CardsCard>
            </CardsWrapper>
        </CardsContainer>
    )
}

export default Cards