import './MealCards.css'
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MealCards=({meal})=>{
    return(
        <article className='meal-card'>
            <div className='meal-card-image'>
                <img src={meal.image} alt={meal.name}></img>
            </div>
            <div className='meal-card-header'>
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className='meal-card-body-footer'>
                <p>{meal.description}</p>
                <Link to="/orderonline">Order of Delivery<FontAwesomeIcon icon={faMotorcycle} /></Link>
            </div>
        </article>
    )
}

export default MealCards;