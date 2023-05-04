import './Footer.css'
import { Link } from 'react-router-dom';
import footerLogo from './assets/logo-white.png'

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faLocationDot,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const contacts = [
    { icon: faLocationDot, info: '1206 E 53rd StreetChicago IL 60615', },
    { icon: faPhone, info: ' 773-324-6227', },
    { icon: faEnvelope, info: 'littlelemon@gmail.com', },
  ];


  const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
  ];
  

const Footer=()=>{
    return(
        <footer className='site-footer'>
            <div className='container grid'>
                <img src={footerLogo}  className='site-footer-logo' alt="Little Lemon" />
            <nav className='site-footer-nav'>
                <h4>Sitemap</h4>
                <ul>
                <li><Link to="/">Home</Link></li>        
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>  
                <li><Link to="/reservation">Reservation</Link></li>  
                <li><Link to="/orderonline">Order Online</Link></li>  
                <li><Link to="/login">Login</Link></li>  
                </ul>
            </nav>
            <div className='site-footer-contact'>
                <h4>Contact us</h4>
                <address>
                    {contacts.map((contact,index)=>
                    <p key={index}>
                        <FontAwesomeIcon icon={contact.icon}/>
                        {contact.info}
                    </p>)}
                </address>
            </div>
            <div className='site-footer-social'>
                <h4>Connect with us</h4>
                 {socials.map((social)=>
                 <a key={social.name} 
                 href={`http://www.${social.name}.com`}
                 target="_blank"
                 rel='noreferrer'
                >
                    <FontAwesomeIcon icon={social.icon} size="lg"/>
                </a>
                 )}
            </div>
            </div>
        </footer>
    )
}

export default Footer;