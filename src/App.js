import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import BookingPage from "./components/BookingPage/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking";
import { useState } from "react";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home openNav={openNav} setOpenNav={setOpenNav} />} />
        <Route path="/reservations" element={<BookingPage openNav={openNav} setOpenNav={setOpenNav} />} />
        <Route path="/booking-success" element={<ConfirmedBooking  openNav={openNav} setOpenNav={setOpenNav} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
