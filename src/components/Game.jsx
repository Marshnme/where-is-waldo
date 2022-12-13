import ImageOverview from "./Home Components/ImageOverview"
import Objectives from "./Game Components/Objectives"
import '../stylesheets/css/game.css'
import { useState } from "react"
const Game = () => {
    const [toggleChoice, setToggleChoice] = useState(false)
    const [toggleChoiceStyle, setToggleChoiceStyle] = useState('')

    function makeChoice(e) {
        if (toggleChoice === false) {
            setToggleChoiceStyle({
                position: "absolute",left:`${e.clientX}px`,top:`${e.clientY}px`}
            )
            return setToggleChoice(true)
        } else {
            return setToggleChoice(false)
        }
    }

    return (
        <>
            <div className="game-container">
                {toggleChoice ? <div style={toggleChoiceStyle} className="choice-box"><p>choice box</p></div> : null }
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