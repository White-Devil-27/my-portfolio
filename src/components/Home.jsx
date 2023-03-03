import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import intro from '../Images/IntroImg.png';


export default function Home(){
    useEffect(() => { 
       Aos.init({});
    },[])
    return(
        <React.Fragment>
            <div className="col-sm-11">
                <div className="row">
                    <div className="mt-5"></div>
                    <div className="mt-5"></div>
                    <div className="col-sm-7 mt-5" >
                        <h4 className="mb-4 col-sm-12 --home-head" data-aos="fade-up" data-aos-duration="2000">Hello,&nbsp;&nbsp;I am</h4>
                        <div className="col-sm-12" data-aos="fade-up" data-aos-duration="2500" >
                            <span style={{fontFamily: "monospace"}} className="mt-5 --home-name">SURESH M</span>
                        </div>
                        <div style={{fontFamily: "monospace"}} className="mt-5 col-sm-12 --home-desc"  data-aos="fade-up" data-aos-duration="3000"> 
                            <span className="--content-color"><span className="--highlighter">DevOps Engineer</span>.</span>
                            <span className="--content-color">&nbsp;Loves to write to <span className="--highlighter">Code,&nbsp;Design</span> a websites.&nbsp;</span>
                            <span className="--content-color">Aspiring into <span className="--highlighter">Full Stack Developer</span>.</span>
                        </div>
                        <div className="mt-5 col-sm-11 --home-btn-align" data-aos="fade-up" data-aos-duration="2900">
                            <button className="--home-btn">Contact</button> 
                        </div>
                    </div>
                    <div className="col-sm-5 --home-img" data-aos="fade-left" data-aos-duration="2900">
                        <img src={intro} alt="nthg"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}