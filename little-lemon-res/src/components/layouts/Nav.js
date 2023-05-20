import './Nav.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogoicon from './assets/logo.png'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav=()=>{

    const [isNavExpanded,setIsNavExpanded]=useState(false)

    return(
        <>
        <nav className="container grid nav-bar">
            <Link className='nav-bar-logo' to="/">
                <img src={headerLogoicon} alt="Little Lemon"/>
             </Link>

             <button 
                className="nav-bar-hamburger" 
                type="button" 
                onClick={() => setIsNavExpanded(!isNavExpanded)}
             >
             {isNavExpanded ?
             <FontAwesomeIcon icon={faXmark} size="2x" /> : 
             <FontAwesomeIcon icon={faBars} size="2x" />}
             </button>

             <ul 
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
             >
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