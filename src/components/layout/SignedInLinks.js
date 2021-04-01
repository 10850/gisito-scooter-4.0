import { Link } from 'react-router-dom'
import '../layout/Navbar.css';

const SignedInLinks = () => {

    return (
        <ul id="signedin-links">
            <li>
                <Link to="/profil"> 
                    Profil
                </Link>
            </li>
            <li>
                Log ud
            </li>
        </ul>
    )
}

export default SignedInLinks;