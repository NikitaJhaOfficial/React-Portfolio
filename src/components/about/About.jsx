import React from "react"
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaSchool} from 'react-icons/fa'
import {RiMedal2Fill} from 'react-icons/ri'
import {GoProjectSymlink} from 'react-icons/go'

const About = () => {
    return(
        <section id="about">
          <h5>Want to know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
             <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt='About image'/>
             </div>
          </div>

          <div className="about__content">
             <div className="about__cards">
                <article className="about__card">
                    <FaSchool className="about__icon"/>
                    <h5>College</h5>
                    <small>AMC Engineering College</small>
                </article>

                <article className="about__card">
                    <RiMedal2Fill className="about__icon"/>
                    <h5>Course</h5>
                    <small>B.E in computer science and engineering</small>
                </article>

                <article className="about__card">
                    <GoProjectSymlink className="about__icon"/>
                    <h5>Projects</h5>
                    <small>Worked on college and personal projects</small>
                </article>
             </div>

             <p>
             A driven Computer Science Engineer, deeply passionate about software development, showcasing proficiency
              across a spectrum of coding languages including HTML, JavaScript, CSS, Java, C++, J2EE, and Spring.Armed 
              with a profound understanding of the (React.js, Node.js),I am committed to harnessing my technical acumen
              and inventive problem-solving skills to make impactful contributions within the software realm.I thrive in 
              team-oriented settings, thriving on the complexities of demanding projects, and consistently strive for 
              excellence in collaboration.During my leisure hours, I find immense joy in the art of painting and the rhythm
              of dancing, allowing me to express my creativity and passion. I also make it a point to stay well-informed 
              about the latest trends in the industry. Furthermore, my love for sports keeps me active and inspired, adding 
              a dynamic dimension to my life outside of work. 
             </p>

             <a href="#contact" className="btn btn-primary">Let's Talk</a>
           </div>
          </div>
        </section>
    )
}
export default About