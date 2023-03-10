import React from "react";
import about from "../Images/img.jpg";

export default function About(){
    return (
        <div>
            <div className="col-sm-12 text-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="--about-title">About Me</h1>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-sm-7">
                        <p className="--about-content" data-aos="fade-up" data-aos-duration="2300">
                            Hello,I'm <span className="--highlighter">Suresh</span> . I am currently working as a <span className="--highlighter">DevOps Engineer&nbsp;</span>
                            in a company called <span className="--highlighter">Digikriya Pvt Ltd</span> .
                        </p>
                        <p className="--about-content" data-aos="fade-up" data-aos-duration="2600">
                            I'm working in "Startup company" so I've learned lot of new technologies like &nbsp; 
                            <span className="--highlighter">Docker, Kubernetes, Nginx and Python</span> . I am <span className="--highlighter">Hard Working</span> person.
                        </p>
                        <p className="--about-content" data-aos="fade-up" data-aos-duration="2600">
                            Learning many technologies is not a big deal. That's how much expertise <span className="--highlighter">I've gained </span>in that technology . That's my <span className="--highlighter">motive</span>.  
                        </p>
                        <p className="--about-content" data-aos="fade-up" data-aos-duration="2900">
                            Apart from the "company work" . I've learned <span className="--highlighter">HTML, CSS, JS and React</span> .
                        </p>
                    </div>
                    <div className="col-sm-4 --about-img" data-aos="fade-up" data-aos-duration="2500">
                        <img src={about} width="250px" height="250px" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}