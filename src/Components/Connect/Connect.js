import React from 'react'
import {
    ConnectSection,
    ConnectContainer,
    ConnectHeader,
    ConnectHeaderText,
    IconContainer,
    SocialIcon


} from './Connect.elements'

function Connect() {
    return (
        <>
            <ConnectSection>
                <ConnectContainer>
                    <ConnectHeader>
                        <ConnectHeaderText>

                        </ConnectHeaderText>
                    </ConnectHeader>
                    <IconContainer>
                        <SocialIcon />
                        <SocialIcon />
                        <SocialIcon />
                    </IconContainer>
                </ConnectContainer>
            </ConnectSection>   
        </>
    )
}

export default Connect
