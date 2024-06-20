import {
  fireEvent,
  getByRole,
  getByText,
  render,
  screen,
} from "@testing-library/react";
// import BookingForm from './components/BookingForm/BookingForm';
import BookingPage from "./components/BookingPage/BookingPage";
import { MemoryRouter } from "react-router-dom";
import { act, useReducer } from "react";
import { fetchAPI } from "./api/api";
import BookingForm from "./components/BookingForm/BookingForm";

test("Test the initializeTimes function", () => {
  const initializeTimes = () => {
    const date = new Date();
    return fetchAPI(date);
  };
  expect(initializeTimes()).not.toBeNull();
});

test("Test the updateTimes function", () => {
  const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const updateTimes = (times, action) => {
    if (action.type === "updateTimes") {
      const date = new Date(action.date);
      return fetchAPI(date);
    }
    return times;
  };
  expect(
    updateTimes(timesArr, { type: "updateTimes", date: "2021-12-04" })
  ).not.toBeNull();
});

test("Validate date", () => {
  const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={timesArr} />);

  const inputDate = screen.getByTestId("res-date");
  const button = screen.getByText("Make reservation");

  fireEvent.blur(inputDate);
  const errMessage = screen.getByText("Enter date");

  expect(errMessage).toBeInTheDocument();

  // expect(inputDate).toBeInTheDocument()
  expect(button).toBeDisabled();
});

test("Validate time", () => {
  const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={timesArr} />);

  const selectTime = screen.getByTestId("res-time");
  const button = screen.getByText("Make reservation");

  fireEvent.change(selectTime, { target: { value: "18:00" } });
  fireEvent.blur(selectTime);

  const errMessage = screen.queryByText("Enter time");

  expect(errMessage).toBeNull();

  // expect(selectTime).toBeInTheDocument()
  expect(button).toBeDisabled();
});

test("Validate guests", () => {
  const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={timesArr} />);

  const inputGuests = screen.getByTestId("guests");
  const button = screen.getByText("Make reservation");

  expect(inputGuests).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("Validate occasion", () => {
  const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={timesArr} />);

  const selectOccasion = screen.getByTestId("occasion");
  const button = screen.getByText("Make reservation");

  expect(selectOccasion).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("Validate Button", () => {
  const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectedDate = "12-01-2024";
  const selectedTime = "19:00";
  const questsAmount = 2;
  const selectedOccasion = "Birthday";
  render(<BookingForm availableTimes={timesArr} />);

  const inputDate = screen.getByTestId("res-date");
  const selectTime = screen.getByTestId("res-time");
  const inputGuests = screen.getByTestId("guests");
  const selectOccasion = screen.getByTestId("occasion");
  const button = screen.getByText("Make reservation");

  act(() => {
    fireEvent.change(inputDate, { target: { value: selectedDate } });
    fireEvent.select(selectTime, { target: { value: selectedTime } });
    fireEvent.change(inputGuests, { target: { value: questsAmount } });
    fireEvent.select(selectOccasion, { target: { value: selectedOccasion } });
  });

  expect(button).not.toHaveAttribute("disabled", "true");
});
