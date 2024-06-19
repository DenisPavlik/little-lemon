import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import BookingPage from "./components/BookingPage/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/booking-success" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
