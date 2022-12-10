import ImageOverview from "./Home Components/ImageOverview"
import Objectives from "./Game Components/Objectives"
import '../stylesheets/css/game.css'
const Game = () => {
    return (
        <>
            <div className="game-container">
                <div className="img-container">
                    <ImageOverview></ImageOverview>
                </div>
                <div className="game-obj">
                    <Objectives></Objectives>
                </div>
            </div>
        </>
    )
}

export default Game