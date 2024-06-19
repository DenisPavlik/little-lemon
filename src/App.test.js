import { render, screen } from "@testing-library/react";
// import BookingForm from './components/BookingForm/BookingForm';
import BookingPage from "./components/BookingPage/BookingPage";
import { MemoryRouter } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI } from "./api/api";

// test("Test the initializeTimes function", () => {
//   const initializeTimes = () => {
//     return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   };
//   expect(initializeTimes()).toStrictEqual([
//     "17:00",
//     "18:00",
//     "19:00",
//     "20:00",
//     "21:00",
//     "22:00",
//   ]);
// });

test("Test the initializeTimes function", () => {
  const initializeTimes = () => {
    const date = new Date()
    return fetchAPI(date) 
  }
  expect(initializeTimes()).not.toBeNull();
});

test("Test the updateTimes function", () => {
  const updateTimes = (times, action) => {
    if (action.type === 'updateTimes') {
      const date = new Date(action.date)
      return fetchAPI(date)
    }
    return times
  }
  expect(updateTimes(null, {type: 'updateTimes', date: '2021-12-04'})).not.toBeNull();
});
