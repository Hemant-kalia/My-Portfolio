import './Styles/Header.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';

function Header() {
    return (
        <div className="content">

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

        </div>
    );
}

export default Header;