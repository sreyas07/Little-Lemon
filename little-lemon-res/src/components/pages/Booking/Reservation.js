import React,{useReducer} from 'react'
import { fetchAPI } from "./FetchAPI";
import Bookingform from './Bookingform';

function updateTimes(date) {
    return fetchAPI(date);
  }
  const initializeTimes = fetchAPI(new Date());

export default function Reservation() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
   <>
        <Bookingform availableTimes={availableTimes} updateTimes={dispatch}/>
   </>
  )
}
