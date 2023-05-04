import './HeroSection.css'
import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';

const HeroSection=()=>{
    return(
        <>
        <section className='hero-section'>
            <div className='container grid'>
                <div className='hero-information'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.</p>
            <Link className='button-primary' to="/reservation">Reserve a Table</Link>
                </div>
                <img className='hero-image' src={restaurantFoodImage} alt="Restaturant Food"></img>
            </div>
        </section>
        </>
    );
}

export default HeroSection;