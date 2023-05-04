import React from 'react'
import Reservation from './Reservation'
import './Booking.css'

export default function Bookingpage() {
  return (
    <div className='bookings'>
        <h2>Table reservation</h2>
        <Reservation/>
    </div>
  )
}
