import { useState, useEffect, useRef } from 'react';

import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { Slides } from '../components/Slides';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Technologies } from './Technologies';

export const Home = () => {

    return (
        <div className="overflow-x-hidden bg-black">
            <Menu/>
            <About/>
            <Technologies />
            <Slides />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};