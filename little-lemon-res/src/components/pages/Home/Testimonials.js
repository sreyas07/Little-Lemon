import TestimonialCard from './TestimonialCard';
import './Testimonials.css'
import customer1Image from './assets/customer (1).jpg';
import customer2Image from './assets/customer (2).jpg';
import customer3Image from './assets/customer (3).jpg';
import customer4Image from './assets/customer (4).jpg';

const customers=[
    {
        name:'Trilok',
        image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: 'Leya',
        image: customer2Image,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        name: 'Asif',
        image: customer3Image,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        name: 'Mike',
        image: customer4Image,
        rating: [1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
]
const Testimonials=()=>{
    return(
        <>
            <section className="testimonials">
                <div className='container grid'>
                    <h2>
                        What people say about us!
                    </h2>
                    {customers.map((customer)=>
                    <TestimonialCard key={customer.name} customer={customer}/>
)}
                </div>
            </section>
        </>
    );
}

export default Testimonials;