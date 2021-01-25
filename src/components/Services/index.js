import React from 'react';
import Icon1 from '../../images/javascript.svg';
import Icon2 from '../../images/html5.svg';
import Icon3 from '../../images/css3.svg';
import Icon4 from '../../images/react-2.svg';
import Icon5 from '../../images/figma.svg';
import Icon6 from '../../images/adobe-xd-1.svg';
import Icon7 from '../../images/invision.svg';
import Icon8 from '../../images/vsc.svg';
import Icon9 from '../../images/firebase-1.svg';
import Icon10 from '../../images/sass-1.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServicesIcon} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="skill">
            <ServicesH1>Experienced with</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon7}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon9}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon10}/>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
