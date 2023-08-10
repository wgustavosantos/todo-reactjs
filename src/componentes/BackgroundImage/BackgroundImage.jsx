import './BackgroundImage.css'
import imageUrl from '../../assets/img/bg-mobile-dark.jpg'

const BackgroundImage = () => {
    
    return (
        <div className="background-image">
            <img src={imageUrl}/>
        </div>
    ) 
  };

export default BackgroundImage;