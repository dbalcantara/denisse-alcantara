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
            projectDetails: 'A command-line interface project to connect farmers to markets.',
            image: './blob/main/assets/farm2market.png',
        },
        {
            name: 'Digital Slambook',
            toolsUsed: ['Java,', 'Flutter'],
            githubLink: 'https://github.com/example/digital-slambook',
            projectDetails: 'A mobile app to create a digital slambook where users can share thoughts and memories.',
            image: 'https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg',

        },
        {
            name: 'Farmer-Customer Web App',
            toolsUsed: ['JavaScript,', 'React,', 'MongoDB,', 'NodeJS'],
            githubLink: 'https://github.com/dbalcantara/farm-to-table.git',
            projectDetails: 'A web app that connects farmers directly to customers for selling produce.',
            image: './blob/main/assets/farm2table.png',
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
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="git"><img src="./blob/main/assets/github.png" className="git"></img></a> 
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
