import footer from '../assets/footer.jpg';

export const Footer = () => {

    return(
        <div className="footer">
            <div className="footerContent">
                <h4>
                    Starway<br></br>Your gateway to the stars
                </h4>
                <img src={footer} alt="logo"/>
            </div>

            <div className="footerLinks">
                <a href="#">Contact</a>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Legal</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Support</a>
                <a href="#">Affiliates</a>
                <a href="#">Partners</a>
                <a href="#">Sitemap</a>
                <a href="#">Blog</a>
                <a href="#">Press</a>
                <a href="#">Developers</a>
                <a href="#">API</a>
                <a href="#">Community</a>
                <a href="#">Events</a>
                <a href="#">Newsletter</a>
                <a href="#">Feedback</a>
                <a href="#">Donate</a>
                <a href="#">Advertise</a>
            </div>
        </div>
    )

};