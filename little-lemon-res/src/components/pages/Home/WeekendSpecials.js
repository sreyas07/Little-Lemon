import './WeekendSpecials.css'
import MealCards from './MealCards';
import { Link } from 'react-router-dom';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import steakImage from './assets/steak.jpg'

const meals=[
    {
        name:'Greek Salad',
        image:greekSaladImage,
        price:"$12.99",
        description:`The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
      {
        name: 'Lemon Dessert',
        image: lemonDessertImage,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
          ingredient has been sourced and is as authentic as can be imagined.`,
      },

      {
        name: 'Steak',
        image: steakImage,
        price: '$6.00',
        description: `The famous steak of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
      },
];

const WeekendSpecials = () => {
    return (
        <>
            <section className='container grid week-specials'>
                <div className='week-specials-header'>
                    <h2>Weekend specials</h2>
                    <Link className='button-primary' to="onlinemenu">Online menu</Link>
                </div>
                {meals.map((meal)=>
                <MealCards key={meal.name} meal={meal}/>
                )}
            </section>
        </>
    );
}

export default WeekendSpecials;