import React from 'react'
import {
    HeroSection,
    HeroContainer,
    HeroInfo,
    HeroText,
    HeroCalendar,
    HeroCarousel,
    CarouselItem

} from './Hero.elements';

const Hero = () => {
    return (
        <>
            <HeroSection>
                <HeroContainer>
                    <HeroInfo>
                        <HeroText>
                        WeHOPE  is an NPO based in Ulsan, South Korea. We are growing quickly as we continue to develop new programs and expand our outreach in the communities we serve.
                        </HeroText>
                        <HeroCalendar>

                        </HeroCalendar>
                    </HeroInfo>
                    <HeroCarousel
                           center
                           infinite
                           showArrows
                           showIndicator
                           slidesToShow={1}
                    >
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                        <CarouselItem>3</CarouselItem>
                    </HeroCarousel>
                </HeroContainer>
            </HeroSection>
        </>
    )
}

export default Hero
