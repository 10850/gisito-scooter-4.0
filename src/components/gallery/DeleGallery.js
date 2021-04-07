import { Link } from "react-router-dom"
import "./gallery.css";

const DeleGallery = () => {
    return (
        <section className="dele-gallery-container">
            <nav className="dele-navigation">
                <Link to="/dele/bars">
                    <button value="bars">
                        Bars
                    </button>
                </Link>
                <Link to="/dele/decks">
                    <button value="decks">
                        Decks
                    </button>
                </Link>
                <Link to="/dele/hjul">
                    <button value="hjul">
                        Hjul
                    </button>
                </Link>    
            </nav>
        </section>  
    )        
}

export default DeleGallery;