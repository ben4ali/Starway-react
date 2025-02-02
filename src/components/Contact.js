import cockpit from '../assets/cockpit.webp';
import offer from '../assets/offer.jpg';
import race from '../assets/race.jpg';
import armor from '../assets/armor.png';

export const Contact = () => {
    return(
        <div className="contact">
            <div className="optionsHolder">
                <div className="option">
                    <h4>Visit a Starway location</h4>
                    <a href="#">See all locations in the system
                    <svg viewBox="0 0 16 16" fill="none" height="0.5em" role="img" class="css-1krb9jt"><path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="currentColor"></path></svg>
                    </a>
                </div>
                <div className="option">
                    <h4>Explore certified Starway starcraft</h4>
                    <a href="#">Visit inventory
                    <svg viewBox="0 0 16 16" fill="none" height="0.5em" role="img" class="css-1krb9jt"><path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="currentColor"></path></svg>
                    </a>
                </div>
                <div className="option">
                    <h4>The benefits of a starcraft</h4>
                    <a href="#">Explore benefits and business
                        <svg viewBox="0 0 16 16" fill="none" height="0.5em" role="img" class="css-1krb9jt"><path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="currentColor"></path></svg>
                    </a>
                </div>
            </div>

            <div className="infoHolder">
                <a href="#" className="info">
                    <div className="infoImage">
                        <img src={cockpit} alt="info"/>
                    </div>
                    <div className="infoContent">
                        <h3>Get behind the wheel</h3>
                        <p>Book a test flight</p>
                    </div>

                </a>

                <a href="#" className="info">
                    <div className="infoImage">
                        <img src={offer} alt="info"/>
                    </div>
                    <div className="infoContent">
                        <h3>Current offers</h3>
                        <p>View the latest</p>
                    </div>

                </a>

                <a href="#" className="info">
                    <div className="infoImage">
                        <img src={race} alt="info"/>
                    </div>
                    <div className="infoContent">
                        <h3>National System flight</h3>
                        <p>Read more</p>
                    </div>

                </a>

                <a href="#" className="info">
                    <div className="infoImage">
                        <img src={armor} alt="info"/>
                    </div>
                    <div className="infoContent">
                        <h3>Additionals shopo</h3>
                        <p>Go to shop</p>
                    </div>

                </a>

            </div>
        </div>
    )
};