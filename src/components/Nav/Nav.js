import { Link } from "react-router-dom";
import "./Nav.css";
import humburger from "../../assets/images/humburger.svg";

export default function Nav({ setOpenNav }) {
  return (
    <div className="nav">
      <button onClick={() => setOpenNav((prev) => !prev)} className="humburger">
        <img src={humburger} alt="humburger" />
      </button>
      <nav>
        <ul>
          <li>
            <Link aria-label="Home Page" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Menu</Link>
          </li>
          <li>
            <Link aria-label="Reserve Table" to={"/reservations"}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to={"/"}>Order Online</Link>
          </li>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
