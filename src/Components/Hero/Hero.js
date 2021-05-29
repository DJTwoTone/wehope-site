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

                        </HeroText>
                        <HeroCalendar>

                        </HeroCalendar>
                    </HeroInfo>
                    <HeroCarousel
                           center
                           infinite
                           showArrows
                           showIndicator
                           slidesToShow={3}
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
