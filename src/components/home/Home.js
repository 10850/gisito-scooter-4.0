import "../home/home.css";
import HeroImage from "./HeroImage";
import Top3 from "./Top3";

const Home = () => {
    return (
        <div className="home-container">
            <HeroImage />
            <Top3 />
        </div>
    )
}

export default Home;