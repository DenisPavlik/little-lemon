import { useState } from "react";
import "./BookingForm.css";

export default function BookingForm(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState("Birthday");
  return (
    <section className="formSection">
      <form>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              props.dispatch({
                type: 'updateTimes',
                date: e.target.value
              })
            }}
          />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {props.availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input onClick={(e)=>props.handleSubmit(e, { date,time, guests, occasion })} type="submit" value="Make reservation" />
      </form>
    </section>
  );
}
