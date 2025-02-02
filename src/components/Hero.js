export const Hero = () => {
    const urlScorpius = "https://benaliassets.s3.us-east-2.amazonaws.com/Videos/Scorpius-Antares.mp4";
    return (
        <div className="heroSection">
            <div className="overlay"></div>
            <div className="heroContent">
                <h2>SCORPIUS ANTARES</h2>
                <h1>
                    EXPLORE NEW WORLDS 
                    <br></br> 
                    DEFEND WITH CONFIDENCE
                    </h1>
                <button className="nextButton">FLY NOW</button>
            </div>

            <video autoPlay muted loop className="heroVideo">
                <source src={urlScorpius} type="video/mp4" />
            </video>
        </div>

    );
};