import { useState } from 'react';

import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Technologies } from './Technologies';

export const Home = () => {

    const [firstStep, setFirstStep] = useState(false);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setthirdStep] = useState(false);

    const [fourthStep, setFourthStep] = useState(false);
    const [fifhStep, setFifhStep] = useState(false);
    const [sixthStep, setSixthStep] = useState(false);
    const [seventhStep, setSeventhStep] = useState(false);

    const [eighthStep, setEightStep] = useState(false);
    const [ninthStep, setNinthStep] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 50) {  
            setFirstStep(true);
        };
        if(window.pageYOffset < 50) {
            setFirstStep(false);
        };
        if(window.pageYOffset > 150) {
            setFirstStep(false);
            setSecondStep(true);
        };
        if(window.pageYOffset < 150) {
            setSecondStep(false);
        };
        if(window.pageYOffset > 250) {
            setSecondStep(false);
            setthirdStep(true);
        };
        if(window.pageYOffset < 250) {
            setthirdStep(false);
        };
        if(window.pageYOffset > 250) {
            setFourthStep(true);
        };
        if(window.pageYOffset < 250) {
            setFourthStep(false);
        };
        if(window.pageYOffset > 950) {
            setFifhStep(true);
        };
        if(window.pageYOffset < 950) {
            setFifhStep(false);
        };
        if(window.pageYOffset > 1050) {
            setFifhStep(false);
            setSixthStep(true);
            setEightStep(true);
        };
        if(window.pageYOffset < 1050) {
            setSixthStep(false);
            setEightStep(false);
        };
        if(window.pageYOffset > 1150) {
            setSixthStep(false);
            setSeventhStep(true);
        };
        if(window.pageYOffset < 1150) {
            setSeventhStep(false);
        };
        if(window.pageYOffset > 1250) {
            setNinthStep(true);
        };
        if(window.pageYOffset < 1250) {
            setNinthStep(false);
        };

    });

    return (
        <div className='overflow-x-hidden'>
            <Menu />
            <About firstStep={firstStep ? true : false} secondStep={secondStep ? true : false} thirdStep={thirdStep ? true : false}/>
            <Technologies fourthStep={fourthStep ? true : false} fifhStep={fifhStep ? true : false} sixthStep={sixthStep ? true : false} seventhStep={seventhStep ? true : false}/>
            <Projects eighthStep={eighthStep ? true : false} ninthStep={ninthStep ? true : false}/>
            <Contact />
            <Footer />
        </div>
    );
};