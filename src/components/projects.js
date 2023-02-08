import * as React from "react";
import { useState } from 'react';
import "../style/accordion.css"


const Projects = ({image, content})=>{

    const [isActive, setIsActive] = useState("");
    const [isOpacity, setIsOpacity] = useState("0");
    const [isVisibility, setIsVisibility] = useState("hidden")
    
    function toggleAccordion() {
        setIsActive(isActive === "" ? "active" : "");
        setIsOpacity(
          isActive === "active" ? "0" : "1"
        );
        setIsVisibility(
           isActive === "active" ? "hidden" : "visible"
        );
    }

    return(
    
        <div className="accordion-object">
            <div className={`accordion-title ${isActive}`}
            onClick={toggleAccordion}
            >
                <img style={{width: "400px"}} src={image} alt="the first page on sleepcycles investor site"/>
                
            </div>
            <div className="accordion-content"
                  style={{opacity: `${isOpacity}`, visibility: `${isVisibility}`}}>{content}</div>
          </div>
    
    )
};

export default Projects;