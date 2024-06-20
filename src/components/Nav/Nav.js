import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link aria-label="Home Page" to={'/'}>Home</Link>
        </li>
        <li>
        <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link aria-label="Reserve Table" to={'/reservations'}>Reservations</Link>
        </li>
        <li>
          <Link to={'/order-online'}>Order Online</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
