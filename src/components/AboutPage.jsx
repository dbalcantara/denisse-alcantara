import React from 'react'
import NavBar from './NavBar'
import './AboutPage.css'
import Footer from './Footer';

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


const AboutPage = () => {
  return (
    <>
    <p className='abt'></p>
    <div id='about' >
        <FadeInSection>
        {/* Details */}
        <div className='details'>
            <img src='./src/assets/1x1.jpeg' className='pic'/>
            <p className='about-name'>Denisse Jennievive B. Alcantara</p>
            <p className='loc'>Taguig City, Philippines</p>
            <a href='#educ' className='arrow'>&#8595;</a>     
        </div>
        </FadeInSection>
        <p id='educ'></p>
        <FadeInSection>
        {/* Education */}
        <p className='titles' id="educ">Education</p>
        <hr></hr>
        <div className='education'>
        <div className='school'>
            <div className='school-det'>
                <p className='school-name'>University of the Philippines- Los Baños</p>
                <p className='course'>Bachelor of Science in Computer Science, Junior</p>
                <p className='duration'>2022-Present</p>
            </div>
            <div className='map'>
              <iframe className='frame' src="https://maps.google.com/maps?q=University+of+the+Philippines-+Los+Ba%C3%B1os&output=embed"></iframe>
            </div>
        </div>
        
        <div className='school'>
            <div className='school-det'>
                <p className='school-name'>Makati Science High School</p>
                <p className='course'>Junior & Senior High School, STEM Strand</p>
                <p className='duration'>2016-2022</p>

            </div>
            <div className='map'>
              <iframe className='frame' src="https://maps.google.com/maps?q=makati+science+high+school&output=embed"></iframe>
            </div>
        </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <p className='titles'>Leadership</p>
        <hr></hr>
        {/* Leadership */}
        <div className='leadership'>
            <div className='orgs'>
                <p className='org-position'>Externals Committee Head</p>
                <div className='org-link'>
                  <p className='org-name'>CATS of UPLB</p>
                  <a href='https://www.facebook.com/catsofuplb' target="_blank" className='org-link-logo'><img src='./src/assets/fb.png' className='org-link-logo'></img></a>
                </div>
                <p className='org-detail'>CATS of UPLB which stands for <i><b>Compassion for Animals Through Service (CATS) of UPLB Students</b></i> is a student-led organization 
                  that is concerned mainly with animal welfare. The organzation was established on 2020, during the height of the pandemic.
                  It was later made a UPLB official organization in April 2021. 
                  Which started to be a concern on the univeristy animals during the lockdown turned to be a joint-force advocacy 
                  of students, staff, and the community.  </p>
                <p className='position-detail'>With a passion for animal welfare and a wealth of experience in building strong partnerships, 
                  being the Externals Committee Head from 2024 up to this day, I was expected to play a crucial role in fostering strong, collaborative 
                  partnerships within our community. Being assigned in this position, I am responsible for overseeing communication with our dedicated caregivers, 
                  fosters, partners, and collaborators. My goal is to strengthen these vital connections, ensuring that our shared mission to protect and care for 
                  animals continues to thrive through open dialogue and mutual support.</p>
            </div>
        </div>
        </FadeInSection>

        {/* Other Experience */}
        <FadeInSection>
        <p className='titles'>Experience</p>
        <hr></hr>
        <div className='experience'>
            <div className='company'>
                <p className='company-position'>Front-End Developer Intern</p>
                <div className='company-link'>
                  <p className='comppany-name'>SupSoft Tech</p>
                  <a href='https://www.linkedin.com/company/supsoft-tech/' target="_blank" className='company-link-logo'><img src='./src/assets/linkedin.png' className='company-link-logo'></img></a>
                </div>                
                <p className='company-detail'>As an intern in SupSoft Tech, .... </p>
            </div>
        </div>
        </FadeInSection>
    </div>
    <FadeInSection>
        <Footer/>
    </FadeInSection>
    <div className="floating-button-div">
    <a href='#about' className='fb'>Back to Top</a>
    </div>
    <NavBar/>
    </>
  )
}

export default AboutPage