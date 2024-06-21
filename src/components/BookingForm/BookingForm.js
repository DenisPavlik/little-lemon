import { useEffect, useState } from "react";
import "./BookingForm.css";

export default function BookingForm(props) {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(props.availableTimes[0]);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    const condition =
      Object.keys(errorMessage).length === 0 &&
      date !== "" &&
      guests !== "" &&
      fullName !== "" &&
      contact !== "";
    if (condition) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errorMessage, date, guests]);

  const validate = (type) => {
    if (type === "date") {
      if (date === "") {
        setErrorMessage((errors) => ({ ...errors, date: "Enter date" }));
        setDisabled(true);
      } else {
        setErrorMessage((errors) => {
          const { date, ...rest } = errors;
          return rest;
        });
      }
    } else if (type === "time") {
      if (time === "") {
        setErrorMessage((errors) => ({ ...errors, time: "Enter time" }));
        setDisabled(true);
      } else {
        setErrorMessage((errors) => {
          const { time, ...rest } = errors;
          return rest;
        });
      }
    } else if (type === "guests") {
      if (guests === "" || guests < 1 || guests > 10) {
        setErrorMessage((errors) => ({
          ...errors,
          guests: "Enter number of guests (1-10)",
        }));
        setDisabled(true);
      } else {
        setErrorMessage((errors) => {
          const { guests, ...rest } = errors;
          return rest;
        });
      }
    } else if (type === "occasion") {
      if (occasion === "") {
        setErrorMessage((errors) => ({
          ...errors,
          occasion: "Choose occasion",
        }));
        setDisabled(true);
      } else {
        setErrorMessage((errors) => {
          const { occasion, ...rest } = errors;
          return rest;
        });
      }
    } else if (type === "fullname") {
      if (fullName === "") {
        setErrorMessage((errors) => ({
          ...errors,
          fullname: "Enter your fullname, pleace",
        }));
        setDisabled(true);
      } else {
        setErrorMessage((errors) => {
          const { fullname, ...rest } = errors;
          return rest;
        });
      }
    } else if (type === "contact") {
      if (contact === "") {
        setErrorMessage((errors) => ({
          ...errors,
          contact: "Enter your contact information, pleace",
        }));
        setDisabled(true);
      } else {
        setErrorMessage((errors) => {
          const { contact, ...rest } = errors;
          return rest;
        });
      }
    }
  };

  return (
    <section className="formSection">
      <form
        onSubmit={(e) =>
          props.handleSubmit(e, { date, time, guests, occasion })
        }
      >
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            data-testid="res-date"
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              props.dispatch({
                type: "updateTimes",
                date: e.target.value,
              });
            }}
            onBlur={() => validate("date")}
          />
          {errorMessage.date && <span>{errorMessage.date}</span>}
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            data-testid="res-time"
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onBlur={() => validate("time")}
          >
            {props.availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>
          {errorMessage.time && <span>{errorMessage.time}</span>}
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            data-testid="guests"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onBlur={() => validate("guests")}
          />
          {errorMessage.guests && <span>{errorMessage.guests}</span>}
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            className="select_occasion"
            data-testid="occasion"
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            onBlur={() => validate("occasion")}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {errorMessage.occasion && <span>{errorMessage.occasion}</span>}
        </div>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            data-testid="fullname"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={() => validate("fullname")}
            placeholder="Full Name"
          />
          {errorMessage.fullname && <span>{errorMessage.fullname}</span>}
        </div>
        <div>
          <label htmlFor="contact">Contact Info</label>
          <input
            type="text"
            data-testid="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            onBlur={() => validate("contact")}
            placeholder="Email of phone nubmer"
          />
          {errorMessage.contact && <span>{errorMessage.contact}</span>}
        </div>
        <input
          // onClick={(e) =>
          //   props.handleSubmit(e, { date, time, guests, occasion })
          // }
          type="submit"
          value="Make reservation"
          disabled={disabled}
        />
      </form>
    </section>
  );
}
