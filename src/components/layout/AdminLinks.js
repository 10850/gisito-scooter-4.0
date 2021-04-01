import { Link } from 'react-router-dom'
import '../layout/Navbar.css';

const AdminLinks = () => {

    return (
        <ul id="admin-links">
            <li>
                <Link to="/profil">
                    Profil
                </Link>
            </li>
            <li>
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