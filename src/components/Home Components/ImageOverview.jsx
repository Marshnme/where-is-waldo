import mario from '../../imgs/mario.jpg'
import '../../stylesheets/css/instructions.css'

const ImageOverview = ({makeChoice}) => {
    return (
        <img className='mario-img' src={mario} alt="mario characters" onMouseDown={makeChoice} />
    )
}

export default ImageOverview