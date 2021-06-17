import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import {
    ProgramsSection,
    ProgramsContainer,
    OurProgramsHeader,
    OurProgramsTitle,
    OurProgramsDescription,
    Programs,

} from './OurPrograms.elements';
import ProgramsCard from '../ProgramsCard/ProgramsCard';

function OurPrograms() {

    const [ourProgramsText, setOurProgramsText] = useState('');

    useEffect(() => {
        sanityClient
        .fetch(`*[slug.current == 'home-page-programs-description']{
            passageText
        }[0]`)
        .then((data) => {
            setOurProgramsText(data.passageText)
        })
        .catch(console.error)
    }, [])

    return (
        <div>
            <ProgramsSection>
                <ProgramsContainer>
                    <OurProgramsHeader>
                        <OurProgramsTitle>
                            Our Programs
                        </OurProgramsTitle>
                        <OurProgramsDescription>
                            {ourProgramsText}
                        </OurProgramsDescription>
                    </OurProgramsHeader>
                    <Programs>
                        <ProgramsCard>
                            
                        </ProgramsCard>
                        <ProgramsCard>

                        </ProgramsCard>
                        <ProgramsCard>

                        </ProgramsCard>
                    </Programs>
                </ProgramsContainer>
            </ProgramsSection>
            
        </div>
    )
}

export default OurPrograms
