import Instructions from "./Home Components/Instructions"
import ImageOverview from "./Home Components/ImageOverview"
import HomeFooter from "./Home Components/HomeFooter"
import '../stylesheets/css/home.css'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
        <div className="home-container">
            <div className="img-container">
                <ImageOverview />  
            </div>
            <div className="instruc-container">
                <div>
                    <Instructions />
                </div>
                <div className="play-button-container">
                    <Link to="/game"><button className="play-button">Play</button></Link>
                </div>
            </div>
        </div>
            <footer>
                <HomeFooter />
            </footer>
        </>
    )
}

export default Home