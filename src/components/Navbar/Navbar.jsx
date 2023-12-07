import './Navbar.css';
import { SiPokemon } from "react-icons/si";
import { LuGamepad } from "react-icons/lu";
import { Link } from 'react-router-dom';

export function NavBar({ children }) {
    return (
        <div className="Navbar">
            {children}
        </div>
    )
}

export function NavBarLinks({ page }) {
    if (page === "home")
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
    if (page === "game")
        return (
            <NavBar>
                <div className="container_navbar_links">
                    <Link to="/">
                        <SiPokemon size={40} />
                    </Link>
                </div>
            </NavBar>
        )
}

