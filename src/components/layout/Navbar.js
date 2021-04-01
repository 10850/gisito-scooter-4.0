import { NavLink, Link } from 'react-router-dom'
import '../layout/Navbar.css';
import logo from  '../../icons/logo.svg';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleBurgermenu() {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    return (
        <nav id="global-menu">
            <Link id="logo-link" to="/">
                <img id="nav-logo" src={logo} />
            </Link>
            <button id="menu-btn" onClick={handleBurgermenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div id="user-tools">
                <ul>
                    <li>
                        Konto
                    </li>
                    <li>
                        Kurv
                    </li>
                </ul>
            </div>
            <input id="searchbar" type="text" placeholder="Search.."></input>
            <div className={menuOpen ? 'mobil-menu-container-active' : 'mobil-menu-container'}>
                <ul id="menu-liste">
                    <li className="nav-link">
                        <Link to="/komplette">
                            Komplette
                        </Link>
                    </li>
                    <li className="nav-link" id="dropdown-opener-link">
                        <Link to="/dele">
                            Dele
                        </Link>
                        <ul id="dropdown-list">
                            <li className="dropdown-link">
                                <Link to="/bars">
                                    Bars
                                </Link>
                            </li>
                            <li className="dropdown-link">
                                <Link to="/decks">
                                    Decks
                                </Link>
                            </li>
                            <li className="dropdown-link">
                                <Link to="/hjul">
                                    Hjul
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;