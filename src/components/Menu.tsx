import { Link } from 'react-router-dom'

export const Menu = () => {

    return (

        <nav className="fixed p-1 z-50 fade3">
            <Link to="/">
                <img src="https://cdn.filestackcontent.com/resize=width:40/RhRUWn89RzaEVUp76S5A" alt="center circuit" className="w-10 hover:animate-pulse" width={986} height={987}/>
            </Link>
            <a href="https://wa.me/5548996214871?text=Olá+consegui+seu+contato+atravéz+de+seu+site!" target="_blank">
                <img src="https://cdn.filestackcontent.com/resize=width:40/RYrIi79aQfKU7zktTHP5" alt="whatsapp icon" className="fixed w-10 right-2 bottom-2 hover:opacity-70" width={780} height={785}/>
            </a>
        </nav>
    );
};