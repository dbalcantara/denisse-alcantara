import React from 'react'
import NavBar from './NavBar'
import './HomePage.css'
import Footer from './Footer'

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

const HomePage = () => {
  return (
    <>
    <FadeInSection>
    <div className='home-body'>
        <p className='hi'>Hi, welcome!</p>
        <h3 className='about-me'>I am Denisse Alcantara, a third-year college student  with a strong passion for software development and UI/UX design. 
          Currently studying <b>Bachelor of Science in Computer Science</b> at the <b>University of the Philippines- Los Baños</b>, I’m on a journey to blend my technical skills with creative problem-solving to craft intuitive, user-centered digital experiences.
        My fascination with tech started with coding and quickly evolved into a love for designing user interfaces that are not only functional but also aesthetically pleasing and easy to navigate. I believe in the power of design to enhance usability and bring positive, meaningful experiences to users.
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
    </div>
    </FadeInSection>
    <FadeInSection>
    <div className='home-body'>
        <p className='works'>Here are some of my works: </p>
        <div className='projects'>
            <div className='proj-card'>
            <figure className="hover-img">
              <img src="./src/assets/farm2market.png"/>
              <a href='https://github.com/dbalcantara/Farm2Market.git' target='_blank'>
                <figcaption>
                <h3>Farm2Market</h3>
                <h6>Python Programming</h6>
              </figcaption>
              </a>
            </figure>
            </div>

            <div className='proj-card'>
            <figure className="hover-img">
              <img src="./src/assets/cat.jpg"/>
              <a href='https://github.com/dbalcantara/Digital-Slambook' target='_blank'>
                <figcaption>
                <h3>Digital Slambook</h3>
                <h6>Flutter Mobile Programming</h6>
              </figcaption>
              </a>
            </figure>
            </div>
            <div className='proj-card'>
            <figure className="hover-img">
              <img src="./src/assets/cat.jpg"/>
              <a href='https://github.com/dbalcantara/Farm-To-Table.git' target='_blank'>
                <figcaption>
                <h3>Farm-to-Table</h3>
                <h6>MERN Stack Web Programming</h6>
              </figcaption>
              </a>
            </figure>
            </div> 
        </div>
        <p className='more'>See more of my works here. <Link to="/projects" className='here'>&#8594;</Link></p>
    </div>
    </FadeInSection>
    <FadeInSection>
      <Footer/>
    </FadeInSection>
    <NavBar/>
    </>
  )
}

export default HomePage