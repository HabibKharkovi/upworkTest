import heroBanner from '../../assets/hero_banner.png';
import './homePageStyles.scss';
import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div className="hero_banner">
            <div className="container">
                <div className="hero_image--wrapper">
                    <img className="hero_image" src={heroBanner} alt="Hero Banner" />
                </div>
                <div className="hero_content">
                    <h1 className="hero_title">Fenrir The Monster Wolf of Norse Mythology Necklace</h1>
                    <div className="hero_price">
                        <span className="hero_discount-price">$19.95</span>
                        <span className="hero_original-price">$29.95</span>
                    </div>
                    <div>
                        <Link className="btn btn-primary" to="/collection">Start Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;