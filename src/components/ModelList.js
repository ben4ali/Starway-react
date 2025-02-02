import galaxy from '../assets/Galaxy.jpg';
import scorpius from '../assets/ScorpiusAntares.jpg';
import perseus from '../assets/Perseus.jpg';
import a1Spirit from '../assets/A1Spirit.jpg';

export const ModelList = () => {

    const images = [galaxy, scorpius, perseus, a1Spirit];
    return (
        <div className="modelList">
            <div className="modelContent">
                <h3>
                    OUR MODELS
                </h3>
                <a href="#"> See more
                    <svg viewBox="0 0 16 16" fill="none" height="0.5em" role="img" class="css-1krb9jt"><path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="currentColor"></path></svg>
                </a>
            </div>
            
            {images.map((image, index) => {
                return(
                    <div className="model" key={index}>
                        <img src={image} alt="galaxy" />
                    </div>
                );
            })}
            
        </div>
    );
};