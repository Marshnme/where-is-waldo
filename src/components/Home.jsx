import Instructions from "./Home Components/Instructions"
import ImageOverview from "./Home Components/ImageOverview"
import HomeFooter from "./Home Components/HomeFooter"

const Home = () => {
    return (
        <div>
            <div>
                <Instructions />
            </div>
            <div>
                <ImageOverview />
            </div>
            <div>
                <HomeFooter />
            </div>
        </div>
    )
}

export default Home