import React, {useState} from 'react';
import Video from '../../videos/video1.mp4';
import { HeroContainer, HeroBg, VideoBg, ProjectTitle, ProjectP, ProjectWrap, SectionTitle } from './IntidanaElements';


const Intidana = ({id}) => {

    return (
        <HeroContainer id={id}>
            <ProjectWrap>
                <SectionTitle>
                    Recent Project
                </SectionTitle>
                <ProjectTitle>
                    BPR Intidana (UI/UX Design and Web Developer)
                </ProjectTitle>
                <ProjectP>In this project i redesign user interface as well as user experience
                    of BPR Intidana Website and i rebuild it in the real website. Defining what client needs into great solution and beautiful product.
                    Collaborating with their internal team was make me grateful.
                </ProjectP>
            </ProjectWrap>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
        </HeroContainer>
    )
}

export default Intidana;
