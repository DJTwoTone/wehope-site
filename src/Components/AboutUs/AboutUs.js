import React from 'react'
import {
    AboutUsSection,
    AboutUsContainer,
    AboutUsHeader,
    AboutUsHeaderText,
    CircleContainer

} from './AboutUs.elements';
import AboutUsCircle from '../AboutUsCircle/AboutUsCircle' 


function AboutUs() {
    return (
        <>
            <AboutUsSection>
                <AboutUsContainer>
                    <AboutUsHeader>
                        <AboutUsHeaderText>
                            
                        </AboutUsHeaderText>
                    </AboutUsHeader>
                    <CircleContainer>
                        <AboutUsCircle />
                        <AboutUsCircle />
                        <AboutUsCircle />
                        <AboutUsCircle />

                    </CircleContainer>
                </AboutUsContainer>
            </AboutUsSection>
            
        </>
    )
}

export default AboutUs
