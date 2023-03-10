import * as React from "react";
import { useState } from 'react';
import "../style/accordion.css"

import Website from '../images/web-icon.svg';
import Github from '../images/github-icon.svg';

const Projects = ({id, image, heading, content, link})=>{

    const [isActive, setIsActive] = useState(false);
 
    
    function toggleAccordion() {
        setIsActive(current => !current);
    }

    

    return(
        <div>
        <div className="accordion-object" id={id}>
            <div className="accordion-title"
                 onClick={toggleAccordion}
                 style={{transform: isActive ? 'translateY(-50px)' : ''}}
            >
                <img src={image} alt="the first page on sleepcycles investor site"/>
            </div>
            <div className="accordion-content">
                  <h4>{heading}</h4> 
                  <div className="flex">
                    {link ?  
                    <a href={link}><img src={Website} alt="a circle with the text www inside it"/></a> 
                    : ""}
                     {content ?  
                    <a href={content}><img src={Github} alt="the github icon, a round icon with the siluette of a cat in the middle "/></a> 
                    : ""}
                  </div>
            </div>
          </div>
         
        </div>
          
    
    )
};

export default Projects;