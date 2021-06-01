import React from 'react';
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
    return (
        <>
            <ProgramsSection>
                <ProgramsContainer>
                    <OurProgramsHeader>
                        <OurProgramsTitle>

                        </OurProgramsTitle>
                        <OurProgramsDescription>

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
            
        </>
    )
}

export default OurPrograms
