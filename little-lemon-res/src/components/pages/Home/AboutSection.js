import './AboutSection.css'
import AboutsectionImage1 from  './assets/about-section-image1.jpg'
import AboutsectionImage2 from  './assets/about-section-image2.jpg'

const AboutSection=()=>{
    return(
        <>
        <section className="container grid about-story">
            <div className="about-description">
                <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>

        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum. Sed ut 
          perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
          inventore veritatis et quasi architecto beatae vitae dicta sunt 
          explicabo. 
        </p>
        </div>
        
                <div className='about-section-images'>
                <img src={AboutsectionImage1} alt="image1" />
                <img src={AboutsectionImage2} alt="image2" />
                </div>

        </section>
        </>
    );
}

export default AboutSection;