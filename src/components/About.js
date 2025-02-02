import spaceShip from '../assets/ship.webp';

export const About = () => {
    return (
        <div className="about">
   
            <div className="aboutBackground"> 
                <h1>
                    INFINITE
                </h1>
            </div>
            <div className="aboutContent">
                <h3>
                    ABOUT US
                </h3>
                <h4>
                    Exploring the cosmos,<br></br>one spacecraft  at a time,
                    <br></br>
                    for a brighter tomorrow.
                </h4>
            </div>

            <div className="imageContainer">
                <img src={spaceShip} alt="Space Ship" />
            </div>
        </div>
    );
};