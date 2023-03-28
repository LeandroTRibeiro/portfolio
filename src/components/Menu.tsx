import { Link } from 'react-router-dom'

import center from '../assets/images/centerTest.png';
import whats from '../assets/images/whatsappIcon2.png';

export const Menu = () => {

    return (

        <nav className="fixed p-1 z-50 fade3">
            <Link to="/">
                <img src={center} alt="center circuit" className="w-10 hover:animate-pulse"/>
            </Link>
            <a href="https://wa.me/5548996214871?text=Olá+consegui+seu+contato+atravéz+de+seu+site!" target="_blank">
                <img src={whats} alt="whatsapp icon" className="fixed w-10 right-2 bottom-2 hover:opacity-70"/>
            </a>
        </nav>
    );
};