import React from "react";
import mail from '../Images/Email.png'
export default function Footer(){
    return(
        <React.Fragment>
            <div className="container-fluid text-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="--skills-title">Get In Touch</h1>
            </div>
            <div className="container-fluid mt-5">
                <div className="--footer-align" data-aos="fade-up" data-aos-duration="2100">
                    <p>Discuss about Projects or Just wanna SAY HI, I'd love to hear from you</p>
                </div>
                <div className="--footer-align mt-5" data-aos="fade-up" data-aos-duration="2100">
                    <img src={mail} alt="" width={50}/><br/>
                </div>
                <span className="--footer-align" data-aos="fade-up" data-aos-duration="2100">msuresh20031999@gmail.com</span>
                <div className="mt-2">
                    &nbsp;
                </div>
                <div className="mt-5 mt-5 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="2400">
                    <a href="mailto:msuresh20031999@gmail.com"><button className="--home-btn">Say Hello</button> </a>
                </div>
                <div className="mt-5 text-center" data-aos="fade-up" data-aos-duration="2600">
                    <a href="https://www.linkedin.com/in/contactsuresh/" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin-square" style={{color: "#e1ad01"}}></i></a>
                    <a href="https://github.com/White-Devil-27" target="_blank" rel="noreferrer"><i className="bx bxl-github" style={{color: "#e1ad01"}}></i></a>
                    <a href="mailto:msuresh20031999@gmail.com" target="_blank" rel="noreferrer"><i className="bx bx-mail-send" style={{color: "#e1ad01"}}></i></a>
                </div>
                <br/>
                <p className="mt-5 --footer-design">Designed and Developed by Suresh M</p>
            </div>
            <br/>
            <br/>
            <br/>
        </React.Fragment>
    )
}