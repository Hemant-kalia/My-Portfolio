import './Styles/Header.css';
import { NavLink } from "react-router-dom";


function Header() {
    return (

        <header>
            <h2>MY PORTFOLIO</h2>
            <nav className="nav-links" >
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "link active" : "link"}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "link active" : "link"}
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "link active" : "link"}
                >
                    Contact
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "link active" : "link"}
                >
                    Projects
                </NavLink>
            </nav>
        </header>

    );
}

export default Header;