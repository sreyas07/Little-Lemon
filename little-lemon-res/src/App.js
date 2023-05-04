
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Layouts from './components/layouts/Layouts';
import Home from './components/pages/Home/Home'
import AboutSection from './components/pages/Home/AboutSection';
import Testimonials from './components/pages/Home/Testimonials';
import Bookingpage from './components/pages/Booking/Bookingpage'
import Confirmbooking from './components/pages/Booking/Confirmbooking';



function App() {
  return (
    <>
    <Layouts>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<><AboutSection/><Testimonials/></>}/>
          <Route path="/reservation" element={<Bookingpage/>}/>
          <Route path='/confirmbooking' element={<Confirmbooking/>}/>
        </Routes>
    </Layouts>
    </>
  );
}

export default App;
