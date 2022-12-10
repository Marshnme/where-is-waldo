import ImageOverview from "./Home Components/ImageOverview"
import Objectives from "./Game Components/Objectives"
import '../stylesheets/css/game.css'
import { useState } from "react"
const Game = () => {
    const [toggleChoice, setToggleChoice] = useState(false)

    function makeChoice() {
        if (toggleChoice === false) {
            console.log("triggered false")
            return setToggleChoice(true)
        } else {
            console.log("triggered true")
            return setToggleChoice(false)
        }
    }

    return (
        <>
            <div className="game-container">
               { toggleChoice ? <div className="choice-box"><p>choice box</p></div> : null }
                <div className="img-container">
                    <ImageOverview makeChoice={makeChoice}></ImageOverview>
                </div>
                <div className="game-obj">
                    <Objectives></Objectives>
                </div>
            </div>
        </>
    )
}

export default Game