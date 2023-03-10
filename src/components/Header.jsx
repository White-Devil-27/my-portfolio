import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Header(){
    const [activeItem, setActiveItem] = useState("Home");

    useEffect(() => {
        function handleScroll() {
          const homeSection = document.getElementById("Home");
          const aboutSection = document.getElementById("About");
          const skillsSection = document.getElementById("Skills");
          const worksSection = document.getElementById("Works");
          const contactSection = document.getElementById("Contact");
    
          if (
            window.scrollY >= homeSection.offsetTop &&
            window.scrollY < aboutSection.offsetTop
          ) 
          {
            setActiveItem("Home");
          } 
          else if (
            window.scrollY >= aboutSection.offsetTop &&
            window.scrollY < skillsSection.offsetTop
          ) 
          {
            setActiveItem("About");
          }
          else if (
            window.scrollY >= skillsSection.offsetTop &&
            window.scrollY < worksSection.offsetTop
          ) 
          {
            setActiveItem("Skills");
          }
          else if (
            window.scrollY >= worksSection.offsetTop &&
            window.scrollY < contactSection.offsetTop
          )   
          {
            setActiveItem("Works");
          } 
          else if (
            window.scrollY >= contactSection.offsetTop
          ) 
          {
            setActiveItem("Contact");
          }
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <React.Fragment>
            <div className="container-fluid header">
                <div className="row">
                    <nav className="navbar navbar-expand-sm p-2">
                        <div className=" navbar-brand col-sm-3 text-center">
                            <span className="--name-color">Suresh</span>
                        </div>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-sm-8" id="navbarNav">
                            <ul className="navbar-nav col-sm-10 ms-auto --navbar-menu">
                                <li className="nav-item">
                                    <a className={activeItem === "Home" ? "nav-link active" : "nav-link"} href="#Home" id="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={activeItem === "About" ? "nav-link active" : "nav-link"} href="#About" id="#About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className={activeItem === "Skills" ? "nav-link active" : "nav-link"} href="#Skills" id="#Skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className={activeItem === "Works" ? "nav-link active" : "nav-link"} href="#Works" id="#Works">Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className={activeItem === "Contact" ? "nav-link active" : "nav-link"} href="#Contact" id="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )

}