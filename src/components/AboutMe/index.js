import React from 'react';
import Melissa from "../../images/melissa-cadena.jpg" 

function About () {
    return(
        <section>
            <div>
                <img
                className="profile-photo"
                src={Melissa}
                alt="Melissa and her husband">
                </img>
            </div>
            <div className="about-me">
                <h1>About Me</h1>
                <p>
                    Software Engineer with a background in case quality assurance and problem solving looking to implement skills gained from previous roles to develop clean, concise applications. Recently earned a certificate in full stack development from the University of Texas at Austin, which has equipped me with skills in JavaScript, CSS, React.js, Node.js, jQuery, APIs, CSS frameworks including Bootstrap and Materialize, and responsive, mobile first web design.

                    Peers would describe me as passionate and dedicated to my work. In my current position, when presented with a problem, I use my resources to come up with out of the box, win-win solutions to benefit both the company and the consumer. In a recent group project, I implemented three free APIs together in a single-page application that provides the user with COVID-19 data for their desired travels. It is my technical expertise, passion, and leadership that make me an advantageous candidate for any team.
                </p>
            </div>
        </section> 
    )
}

export default About;