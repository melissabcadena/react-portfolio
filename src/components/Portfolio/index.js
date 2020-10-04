import React, {useState} from 'react';
import Project from '../Project'

function Portfolio () {
    
    const [projects] = useState([
        {
            name: "COVID Travel Tracker",
            description: "We designed an easy to use application that allows users to input their travel dates from origin and destination locations to quickly obtain COVID-19 statistics and any known travel restrictions for their country of destination as well as flight options all in one conveniently organized site.                     Additionally, users can search within the site for airport codes if they are unsure of their origin or destination airport code.",
            githubLink: "https://github.com/melissabcadena/covid-travel-tracking.git",
            deployedLink: "https://melissabcadena.github.io/covid-travel-tracking/"        },
        {
            name: "Git Cookin",
            description: "With more and more people who are choosing to #stayhome, home cooked meals are becoming increasingly popular. But cooking the same meals again and again can get old pretty quickly. Git Cookin’ allows users to share their favorite recipes and find new recipes to try out at the same time. Whether you are a skilled chef or an excited beginner, we hope that you can find the inspiration that will help you ‘git cookin’!",
            githubLink: "https://github.com/melissabcadena/git-cookin.git",
            deployedLink: "https://git-cookin.herokuapp.com/"        },
        {
            name: "Workday Scheduler",
            description: "A website that was created to assist users in managing their daily tasks. Once the tasks for that day are saved, they will persist on page load. Users can also see if tasks are in the past (color coded gray), present (color coded red), or future (color coded green)",
            githubLink: "https://github.com/melissabcadena/workday-scheduler.git",
            deployedLink: "https://melissabcadena.github.io/workday-scheduler/"        },
        {
            name: "Technical Coding Quiz",
            description: "A website that was created to allowed a user to test their technical coding knowledge with a short, timed quiz. Using DOM Elements and JavaScript, I have created a quick quiz quiz that deducts time if a question is answered incorrectly. High scores and users initials can be saved to localStorage if users would like to continue to play and improve their score. All scores saved to localStorage can be seen on the High Scores page.",
            githubLink: "https://github.com/melissabcadena/technical-coding-quiz.git",
            deployedLink: "https://melissabcadena.github.io/technical-coding-quiz"        },
        {
            name: "Read Me Generator",
            description: "This application allows users to quickly and easily generate a professional ReadMe.md file via the command line using Node.js. The user will be prompted with several questions for information required to create the file. Once created, the ReadMe.md file will put output into the dist file of the application's directory.",
            githubLink: "https://github.com/melissabcadena/readme-generator",
            deployedLink: "No deployed link"        },
        {
            name: "E-Commerce Back End",
            description: "This is the back end application for an e-commerce site. Using Sequelize, the models for the Category, Product, ProductTag, and Tag endpoints have been added. The CRUD routes for the Category, Product and Tag models has also been added to the code.",
            githubLink: "https://github.com/melissabcadena/ecommerce-backend",
            deployedLink: 'No deployed link'        }
    ]);

    return (
        <div>
            <h2>My Work.</h2>
            <div>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        i={i}
                    />
                    ))}
            </div>
        </div>
    )
}

export default Portfolio;

