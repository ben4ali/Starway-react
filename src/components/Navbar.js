import '../styles/component.css';
import logo from '../assets/logo.svg';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#" ><img src={logo} className="navbar-logo" alt="logo" /></a>
                <h3 className="navbar-title">STARWAY</h3>
            </div>
            
            
            <ul className="navbar-links">
                <li className="navbar-link"><a href="#Hero">HOME</a></li>
                <li className="navbar-link"><a href="#About">ABOUT</a></li>
                <li className="navbar-link"><a href="#Contact">CONTACT</a></li>
            </ul>
        </nav>
    );
}