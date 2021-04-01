import '../layout/Navbar.css';
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import React, { useState } from 'react';

const AdminLinks = () => {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("")
        try {
          await logout()
          history.push("/log-ind")
        } catch {
          setError("Failed to log out")
        }
    }

    return (
        <ul id="admin-links">
            <li>
                <Link to="/profil">
                    Profil
                </Link>
            </li>
            <li onClick={handleLogout}>
                Log ud
            </li>
            <li id="add-product">
                <Link to="/add-product"> 
                    Tilføj produkt
                </Link>
            </li>
        </ul>
    )
}

export default AdminLinks;