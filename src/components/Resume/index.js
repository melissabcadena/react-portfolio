import React from 'react';
import MyResume from '../../images/myResume.pdf';

function Resume () {
    return (
    <div>
        <a href={MyResume}>Click for Resume</a>
        <h2>Skills</h2>
        <table>
            <tbody>
                <tr>
                    <td>JavaScript</td>
                    <td>Server Side APIs</td>
                </tr>
                <tr>
                    <td>CSS/HTML</td>
                    <td>Express.js</td>
                </tr>
                <tr>
                    <td>jQuery</td>
                    <td>OOP</td>
                </tr>
                <tr>
                    <td>Node.js</td>
                    <td>MVC</td>
                </tr>
                <tr>
                    <td>TDD</td>
                    <td>Jest</td>
                </tr>
                <tr>
                    <td>SQL/mySQL/NoSQL</td>
                    <td>ORM</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    )
}

export default Resume;