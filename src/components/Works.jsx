import React from "react";
import portfolio from '../Images/Portfolio.png';
import tenzi from '../Images/Tenzi.png';


export default function Works(){
    return(
        <React.Fragment>
            <div className="container-fluid text-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="--skills-title">My Works</h1>
            </div>
            <br/>
            <br/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-sm-6 --works-img"  data-aos="fade-up" data-aos-duration="2100">
                        <img src={portfolio} alt=""></img>
                        <div className="text-center" style={{background: "#112240"}}>
                            <h4 className="--works-head">PORTFOLIO WEBSITE</h4>
                            <p className="--works-info">An Animative Portfolio Web App built with React, CSS and JavaScript to visualizing my featured Works and Skills.</p>
                        </div>
                    </div>
{/*                     <div className="col-sm-6 --works-img"  data-aos="fade-up" data-aos-duration="2200">
                        <a href="https://sureshmurugasamy-tenzi.netlify.app/" target="_blank" rel="noreferrer"><img src={tenzi} alt="" /></a>
                        <div className="text-center" style={{background: "#112240"}}>
                            <h4 className="--works-head">TENZI GAME</h4>
                            <p className="--works-info1">It's a small Game WebApplication I re-built with React hooks for understanding purpose.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}
