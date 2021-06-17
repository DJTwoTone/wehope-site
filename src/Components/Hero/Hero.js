import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
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
    const [heroText, setHeroText] = useState('');

    useEffect(() => {
        sanityClient
        .fetch(`*[slug.current == 'home-page-hero-description']{
            passageText
        }[0]`)
        .then((data) => {
            setHeroText(data.passageText)}
            )
        .catch(console.error);

    }, [])


    return (
        <div>
            <HeroSection>
                <HeroContainer>
                    <HeroInfo>
                        <HeroText>
                        {heroText}
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
        </div>
    )
}

export default Hero
