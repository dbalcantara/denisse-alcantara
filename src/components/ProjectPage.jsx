import NavBar from "./NavBar";
import './ProjectPage.css';
import React from 'react'
import Footer from "./Footer";

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

const ProjectPage = () => {

    const projects = [
        {
            name: 'Farm2Market',
            toolsUsed: "Python",
            githubLink: 'https://github.com/dbalcantara/Farm2Market.git',
            projectDetails: 'A Command Line Interface-based Python program that allows a user to expand his farm given a capital of P5,000. Users can visit their farmlot, item shop, plants seeds, place livestocks, harvest and sell farm produce, and view inventory. The loaded game depending on who is the palyer through their names.',
            image: 'images/farm2market.png',
        },
        {
            name: 'Digital Slambook',
            toolsUsed: ['Java,', 'Flutter'],
            githubLink: 'https://github.com/example/digital-slambook',
            projectDetails: 'A mobile application that serves as a Digital Slambook, allowing users to add, view, manage their friends details, and personalize their profile. Each user can manually add a friend using the Slambook, or add them through a generated QR code by their friend. Users can also generate their own QR codes to be used by their friends, and all data are managed using Firebase Firestore.',
            image: 'https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg',

        },
        {
            name: 'Farmer-Customer Web App',
            toolsUsed: ['JavaScript,', 'React,', 'MongoDB,', 'NodeJS'],
            githubLink: 'https://github.com/dbalcantara/farm-to-table.git',
            projectDetails: 'An e-commerce website that facilitates transactions between farmers and customers directly wehre there are two roles: consumer and admin. Admin facilitates the list of users, catalog of goods, and product sales. Meanhwile, the consumers can sign in and sign up, view product listing, manage shopping cart, and do a dummy checkout.',
            image: 'images/farm2table.png',
        }
    ];

    return (
        <>
            <FadeInSection>
            <div className="projects">
                {projects.map((project) => (
                    <div className="card" key={project.name}>
                        <div className='proj-card'>
                            <figure class="hover-img">
                                <img src={project.image} alt={project.name} className="proj-img"/>
                                <figcaption>
                                <h3>{project.name}</h3>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="detail-sec">
                            <div className="detail-sec github">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="git"><img src="images/github.png" className="git"></img></a> 
                                <p className="tools-title">Tools Used:</p>
                            </div>
                            
                            <div className="tools-used">
                            {Array.isArray(project.toolsUsed) 
                                ? project.toolsUsed.map((tool, index) => <p key={index} className="tools">{tool}</p>) 
                                : <p className="tools">{project.toolsUsed}</p>}
                            </div>
                        </div>
                        <div className="detail-sec">
                            <p className="proj-det">{project.projectDetails}</p>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
            </FadeInSection>
            <FadeInSection>
                <Footer/>
            </FadeInSection>
            <NavBar />
        </>
    );
}

export default ProjectPage;
