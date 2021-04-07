import { NavLink, Link } from 'react-router-dom'
import '../layout/Navbar.css';
import logo from  '../../icons/logo.svg';
import { useState, useEffect } from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import AdminLinks from './AdminLinks';
import { useAuth } from "../auth/AuthContext"


const Navbar = () => {
    const { currentUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [userLinks, setUserLinks] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        width < 768 + "px" && handleBurgermenu();
    },[width]);


    function handleBurgermenu() {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    function handleUserLinks() {
        setUserLinks(!userLinks)
        console.log(userLinks)
    }

    function handleDropdown() {
        setDropdown(!dropdown)
        console.log(dropdown)
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
                    <li onClick={handleUserLinks}>
                        Konto
                        <div className={userLinks ? 'user-links-active' : 'user-links'}>
                            {currentUser && currentUser.email != "drescherrijna@gmail.com" && <SignedInLinks onClick={handleUserLinks} />}
                            {!currentUser && <SignedOutLinks onClick={handleUserLinks} />}
                            {currentUser && currentUser.email === "drescherrijna@gmail.com" && <AdminLinks onClick={handleUserLinks} />}
                        </div>
                    </li>
                    <li>
                        <Link to="/kurv">
                            Kurv
                        </Link>
                    </li>
                </ul>
            </div>
            <input id="searchbar" type="text" placeholder="Search.."></input>
            <div className={menuOpen ? 'mobil-menu-container-active' : 'mobil-menu-container'}>
                <ul id="menu-liste">
                    <li className="nav-link" onClick={width < 768 ? handleBurgermenu : undefined}>
                        <Link to="/komplette">
                            Komplette
                        </Link>
                    </li>
                    <li className="nav-link" id="dropdown-opener-link" onClick={handleDropdown}>
                            Dele
                        <ul className={dropdown ? 'dropdown-list-active' : 'dropdown-list'}>
                            <li className="dropdown-link" onClick={width < 768 ? handleBurgermenu : undefined}>
                                <Link to="/dele/bars">
                                    Bars
                                </Link>
                            </li>
                            <li className="dropdown-link" onClick={width < 768 ? handleBurgermenu : undefined}>
                                <Link to="/dele/decks">
                                    Decks
                                </Link>
                            </li>
                            <li className="dropdown-link" onClick={width < 768 ? handleBurgermenu : undefined}>
                                <Link to="/dele/hjul">
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