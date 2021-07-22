import React from 'react';
import { PortfolioContainer, PortfolioWrapper, PortfolioCard, PortfolioIcon,
PortfolioH2, PortfolioP, PortfolioH1 } from './PortfolioElements';
import Project1 from '../../images/lemooin.svg';
import Project2 from '../../images/svg-2.svg';
import Project3 from '../../images/svg-3.svg';





const Portfolio = () => {
    return (
        <>
            <PortfolioContainer>
                <PortfolioH1>Projects</PortfolioH1>
                <PortfolioWrapper>
                    <PortfolioCard>
                        <PortfolioIcon src={Project1}/>
                        <PortfolioH2>Lemooin</PortfolioH2>
                        <PortfolioP>Designing UI/UX and Building
                        Company Profile Website for CV. Lemooin Jaya Abadi</PortfolioP>
                    </PortfolioCard>
                    <PortfolioCard>
                        <PortfolioIcon src={Project2}/>
                        <PortfolioH2>Sahasra Anugrah Abadi</PortfolioH2>
                        <PortfolioP>Designing UI/UX and Building
                        Company Profile Website for PT. Sahasra Anugrah Abadi</PortfolioP>
                    </PortfolioCard>
                    <PortfolioCard>
                       <a target='_blank' href='https://fpsindonesia.com/'>
                        <PortfolioIcon src={Project3}/>
                        <PortfolioH2>Famous Pasific Shipping</PortfolioH2>
                        <PortfolioP>Redesign UI/UX and Rebuild
                        Company Profile Website for FPS Indonesia</PortfolioP>
                       </a>
                    </PortfolioCard>
                </PortfolioWrapper>
            </PortfolioContainer>
            
        </>
    )
}

export default Portfolio;
