import React from "react";
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.gif"
import project4 from "../images/project4.gif"
import project5 from "../images/project5.gif"

import '../styles.css'


function Projects(){
    return(
        <div className="container">
            <div className="content-container">
                <div className="content">
                    <h4><a>random text</a></h4>
                    <img src={project1}/>
                </div>
                <div className="content">
                    <h4><a>random text</a></h4>
                    <img src={project2}/>
                </div>
                <div className="content">
                    <h4><a>random text</a></h4>
                    <img src={project3}/>
                </div>
                <div className="content">
                    <h4><a>random text</a></h4>
                    <img src={project4}/>
                </div>
                <div className="content">
                    <h4><a>random text</a></h4>
                    <img src={project5}/>
                </div>
                <div className="content">
                    <h4><a>random text</a></h4>
                    <img/>
                </div>

            </div>
        </div>
    )
}

export default Projects