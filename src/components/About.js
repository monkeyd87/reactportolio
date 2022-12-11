import React from "react";
import "../styles.css"
import Me from "../images/MB1565_ProductImage.png"


function About(){

    return(

    <div className="container">
        <div className="about">
            <p>Hi there! My name is Dennis Jackson and I am a self-taught programmer. I taught myself Python during the lockdown and then started learning JavaScript using Codecademy. I recently graduated from UC Davis' boot camp, where I gained a deeper understanding of web development and further honed my programming skills. I am excited to continue learning and growing as a programmer, and to apply my skills to solve challenging problems.
            </p>
        </div>
        <div className="photo">
            <img className="me" src={Me}/>
        </div>
    </div>
    )
}

export default About