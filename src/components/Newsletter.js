import background from '../assets/newsletter.jpg';

export const Newsletter = () => {
    return(

        <div className="newsletter">
            <img src={background} alt="newsletter" />
            <div className="newOverlay"></div>
            <div className="newsletterContent">
                <h3>
                    <span>Be the first</span>
                    <br></br>
                    Know about Starway's next 
                    <br></br>
                    steps
                </h3>
                <button>Subscribe</button>
            </div>
        </div>
    );
};