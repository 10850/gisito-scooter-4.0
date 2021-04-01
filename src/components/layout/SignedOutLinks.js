import { Link } from 'react-router-dom'
import '../layout/Navbar.css';

const SignedOutLinks = () => {

    return (
        <ul id="signedout-links">
            <li>
                <Link to="log-ind">
                    Log Ind
                </Link>
            </li>
            <li>
                <Link to="opret-bruger">
                    Opret Bruger
                </Link> 
            </li>
        </ul>
    )
}

export default SignedOutLinks;