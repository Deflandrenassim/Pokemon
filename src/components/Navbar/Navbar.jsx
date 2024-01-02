import './Navbar.css';
import { SiPokemon } from "react-icons/si";
import { LuGamepad } from "react-icons/lu";
import { Link } from 'react-router-dom';

export function NavBar({ children }) {
    return (
        <div className="navbar">
            {children}
        </div>
    )
}

export function NavBarLinks() {
    return (
        <NavBar>
            <div className="container_navbar_links">
                <Link to="/">
                    <SiPokemon size={40} />
                </Link>
                <Link to="/game">
                    <LuGamepad size={40} />
                </Link>
            </div>
        </NavBar>
    )
}

