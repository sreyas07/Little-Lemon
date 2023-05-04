import './Nav.css'
import { Link } from 'react-router-dom';
import headerLogoicon from './assets/logo.png'

const Nav=()=>{
    return(
        <>
        <nav className="container grid nav-bar">
            <Link className='nav-bar-logo' to="/">
                <img src={headerLogoicon} alt="Little Lemon"/>
             </Link>
            <ul className='nav-bar-links'>
                <li><Link to="/">Home</Link></li>        
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>  
                <li><Link to="/reservation">Reservation</Link></li>  
                <li><Link to="/orderonline">Order Online</Link></li>  
                <li><Link to="/login">Login</Link></li>  
            </ul>
        </nav>
        </>
    )
}

export default Nav;