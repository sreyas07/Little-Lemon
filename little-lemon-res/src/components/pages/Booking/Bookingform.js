import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Link } from "react-router-dom"

const initialValues={
    name:'',
    email:'',
    booking_date:null,
    booking_time: '',
    guests:'',
    occasion:'',
}

const onSubmit=(values)=>{
    console.log ('Form values',values)
}

const validationSchema =Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().email("Invalid Format").required("Required"),
    booking_date:Yup.date().required("Required").nullable(),
    booking_time: Yup.string().required("Required"),
    guests:Yup.string().required("Required"),
    occasion:Yup.string().required("Required"),
})


export default function Bookingform(props) {
    const [date,setDate]=useState('');
    const [time, setTime] = useState('');

    const handleDateChange=(e)=>{
        setDate(e);
        var stringify=e;
        const date=new Date(stringify)
        props.updateTimes(date);
        setTime(props.availableTimes.map((times) => <option>{times}</option>))
    }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      handleDateChange={handleDateChange}
      validateOnMount
      >
        {
            (formik)=>{
                return(
                    <div className='form-background'>
                        <Form>
                            <fieldset>
                                <div className='form-field'>
                            <label htmlFor='name'>Name</label>
                            <Field
                                type='text'
                                placeholder="Enter your name"
                                id='name'
                                name='name'
                            />
                            <ErrorMessage name='name'>
                                {(errorMsg)=> <div className='errorMsg'>{errorMsg}</div>}
                            </ErrorMessage>
                            </div >
                            <div className='form-field'>
                            <label htmlFor='email'>Email</label>
                            <Field
                                type='email'
                                placeholder="Enter your email"
                                id='email'
                                name='email'
                            />
                            <ErrorMessage name='email'>
                                {(errorMsg)=> <div className='errorMsg'>{errorMsg}</div>}
                            </ErrorMessage>
                            </div >
                            <div className='form-field'>
                                <label htmlFor='booking_date'>Date</label>
                                <DatePicker
                                    selected={date}
                                    onChange={handleDateChange}
                                    dateFormat='dd/MM/yyyy'
                                    minDate={new Date()}
                                    name='booking_time'
                                />
                                <ErrorMessage name='booking_date'>
                                {(errorMsg)=> <div className='errorMsg'>{errorMsg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='booking_time'>Time</label>
                                <Field as='select' id='time' name='booking_time'>
                                    {time}
                                </Field>
                                <ErrorMessage name='booking_time'>
                                {(errorMsg)=> <div className='errorMsg'>{errorMsg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='guests'>Guests</label>
                                <Field
                                    type='number'
                                    placeholder='Number of guests'
                                    min='1'
                                    max='10'
                                    id='guests'
                                    name='guests'
                                />
                                <ErrorMessage name='guests'>
                                {(errorMsg)=> <div className='errorMsg'>{errorMsg}</div>}
                            </ErrorMessage>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='occasion'>Occassion</label>
                                <Field as='select' id='occasion' name='occasion'>
                                    <option>Select any occasion</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </Field>
                                <ErrorMessage name='occasion'>
                                {(errorMsg)=> <div className='errorMsg'>{errorMsg}</div>}
                            </ErrorMessage>
                            </div>
                <Link to="/confirmbooking">
                  <button className='button-primary bookings-button'
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Book Table
                  </button>
                </Link>
                            </fieldset>
                        </Form>
                    </div>
                )
            }
        }
    </Formik>
  )
}
