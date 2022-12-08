import Instructions from "./Home Components/Instructions"
import ImageOverview from "./Home Components/ImageOverview"
import HomeFooter from "./Home Components/HomeFooter"
import '../stylesheets/css/home.css'

const Home = () => {
    return (
        <>
        <div className="home-container">
            <div>
                <ImageOverview />
            </div>
            <div>
                <Instructions />
            </div>
        </div>
        <footer>
            <HomeFooter />
        </footer>
        </>
    )
}

export default Home