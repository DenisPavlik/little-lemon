import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./ConfirmedBooking.css";
import NavMobile from "../Nav/mobile/NavMobile";

export default function ConfirmedBooking({ openNav, setOpenNav }) {
  return (
    <section>
      <Header setOpenNav={setOpenNav} />
      {openNav ? (
        <NavMobile setOpenNav={setOpenNav} />
      ) : (
        <div className="confirmation">
          <h1>Your booking has been confirmed!</h1>
          <Link to={'/'}>Back to homepage</Link>
        </div>
      )}
    </section>
  );
}
