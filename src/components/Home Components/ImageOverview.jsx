import mario from '../../imgs/mario.jpg'
import '../../stylesheets/css/instructions.css'

const ImageOverview = () => {
    return (
        <img className='mario-img' src={mario} alt="mario characters" />
    )
}

export default ImageOverview