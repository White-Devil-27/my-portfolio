import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(){
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
                                    <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Works">Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Footer">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )

}