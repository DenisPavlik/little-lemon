import { useReducer } from "react";
import BookingForm from "../BookingForm/BookingForm";
import Header from "../Header/Header";
import {fetchAPI, submitAPI} from '../../api/api'
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  // const timesArr = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const navigate = useNavigate();
  const updateTimes = (times, action) => {
    if (action.type === 'updateTimes') {
      const date = new Date(action.date)
      return fetchAPI(date)
    }
    return times
  }
  const initializeTimes = () => {
    const date = new Date()
    return fetchAPI(date) 
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (e, data) => {
    e.preventDefault()
    const response = submitAPI(data);
    if (response) {
      navigate("/booking-success")
    }
  }
  
  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} handleSubmit={submitForm} />
    </>
  );
}
