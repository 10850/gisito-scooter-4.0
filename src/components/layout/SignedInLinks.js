import '../layout/Navbar.css'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import React, { useState } from 'react';

const SignedInLinks = () => {
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
        <ul id="signedin-links">
            <li>
                <Link to="/profil"> 
                    Profil
                </Link>
            </li>
            <li onClick={handleLogout}>
                Log ud
            </li>
        </ul>
    )
}

export default SignedInLinks;