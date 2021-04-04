import  heroImage  from "../home/hero-image.jpg";
import  heroImageSmall from "../home/hero-image-small.jpg";

const HeroImage = () => {
    return (
        <div id="hero-image">
            <img src={heroImageSmall} />
        </div>
    )
}

export default HeroImage;