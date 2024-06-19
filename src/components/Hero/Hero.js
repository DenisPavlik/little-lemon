import { Link } from "react-router-dom";
import restauranfood from "../../assets/images/restauranfood.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container">
      <div className="inner">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button><Link to={"/reservations"}>Reserve a Table</Link></button>
        </div>
        <img src={restauranfood} alt="restauranfood_img" />
      </div>
    </div>
  );
}
