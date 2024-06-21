import "./Footer.css";
import footerLogo from "../../assets/images/logoFooter.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={footerLogo} alt="footerLogo" />
        <div>
          <div>
            <span>Doormat<br />Navigation</span>
            <ul>
              <li><Link aria-label="Home Page" to={'/'}>Home</Link></li>
              <li><Link to={'/'}>About</Link></li>
              <li><Link to={'/'}>Menu</Link></li>
              <li><Link aria-label="Reserve Table" to={'/reservations'}>Reservations</Link></li>
              <li><Link to={'/'}>Order Online</Link></li>
              <li><Link to={'/'}>Login</Link></li>
            </ul>
          </div>
          <div>
            <span>Contact</span>
            <ul>
              <li>Adress</li>
              <li>phone number</li>
              <li>email</li>
            </ul>
          </div>
          <div>
            <span>Social Media Links</span>
            <ul>
              <li>Adress</li>
              <li>phone number</li>
              <li>email</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
