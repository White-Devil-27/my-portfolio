import React from "react";
import boot from '../Images/Bootstrap.png';
import c from '../Images/Clang.png';
import click from '../Images/Clickhouse.png';
import css from '../Images/Css.png';
import docker from '../Images/Docker.png';
import edraw from '../Images/Edraw.png';
import figma from '../Images/Figma.png';
import grafana from '../Images/Grafana.png';
import html from '../Images/Html.png';
import javast from '../Images/Javascript.png';
import kuber from '../Images/Kubernetes.png';
import mysql from '../Images/Mysql.png';
import nginx from '../Images/Nginx.png';
import pr from '../Images/PR.png';
import promo from '../Images/Prometheus.png';
import python from '../Images/Python.png';
import react from '../Images/React.png';
import redis from '../Images/Redis.png';
import skillimg from '../Images/Skillimg.png';

export default function Skills(){
    return(
        <div>
            <div className="col-sm-12 text-center" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="--skills-title">Skills</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-7 --skills-align">
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-duration="2100">
                                    <h5 className="col-sm-12 text-center" style={{color : "#e1ad01",opacity: "0.9"}}>Devops Tools</h5>
                                </div>
                                <div className="mt-5 col-sm-12">
                                    <div className="row" data-aos="fade-up" data-aos-duration="2200">
                                        <div className="col-sm-2 text-center --skills-dev" >
                                            <img src={nginx} width="50px" alt=""></img><br/>
                                            <span>Nginx</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={docker} width="62px" alt=""></img><br/>
                                            <span>Docker</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={kuber} width="57px" alt=""></img><br/>
                                            <span>Kubernetes</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={promo} width="57px" alt=""></img><br/>
                                            <span>Prometheus</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={grafana} width="57px" alt=""></img><br/>
                                            <span>Grafana</span>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-duration="2100">
                                    <h5 className="col-sm-12 text-center" style={{color : "#e1ad01",opacity: "0.9"}}>Front - End</h5>
                                </div>
                                <div className="mt-5 col-sm-12">
                                    <div className="row" data-aos="fade-up" data-aos-duration="2200">
                                        <div className="col-sm-2 text-center --skills-dev" >
                                            <img src={html} width="50px" alt=""></img><br/>
                                            <span>HTML</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={css} width="55px" alt=""></img><br/>
                                            <span>CSS</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={javast} width="47px" alt=""></img><br/>
                                            <span>Javascript</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={boot} width="57px" alt=""></img><br/>
                                            <span>Bootstrap</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={react} width="59px" alt=""></img><br/>
                                            <span>React</span>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-duration="2100">
                                    <h5 className="col-sm-12 text-center" style={{color : "#e1ad01",opacity: "0.9"}}>Back - End</h5>
                                </div>
                                <div className="mt-5 col-sm-12">
                                    <div className="row" data-aos="fade-up" data-aos-duration="2200">
                                        <div className="col-sm-2 text-center --skills-dev" >
                                            <img src={python} width="50px" alt=""></img><br/>
                                            <span>Python/Flask</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={mysql} width="55px" alt=""></img><br/>
                                            <span>Mysql</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={redis} width="100px" alt=""></img><br/>
                                            <span>Redis</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={click} width="59px" alt=""></img><br/>
                                            <span>Clickhouse</span>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-duration="2100">
                                    <h5 className="col-sm-12 text-center" style={{color : "#e1ad01",opacity: "0.9"}}>Others</h5>
                                </div>
                                <div className="mt-5 col-sm-12">
                                    <div className="row" data-aos="fade-up" data-aos-duration="2200">
                                        <div className="col-sm-2 text-center --skills-dev" >
                                            <img src={c} width="53px" alt=""></img><br/>
                                            <span>C Lang</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={figma} width="65px" alt=""></img><br/>
                                            <span>Figma</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={edraw} width="65px" alt=""></img><br/>
                                            <span>EdrawMax</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            <img src={pr} width="65px" alt=""></img><br/>
                                            <span>Adobe Premiere</span>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-duration="2100">
                                    <h5 className="col-sm-12 text-center" style={{color : "#e1ad01",opacity: "0.9"}}>Interest</h5>
                                </div>
                                <div className="mt-5 col-sm-12">
                                    <div className="row" data-aos="fade-up" data-aos-duration="2200">
                                        <div className="col-sm-2 text-center --skills-dev" >
                                            {/* <img src={c} width="53px"></img><br/> */}
                                            <span>Networking</span>
                                        </div>
                                        <div className="col-sm-2 text-center --skills-dev">
                                            {/* <img src={figma} width="65px"></img><br/> */}
                                            <span>Ethical Hacking</span>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div>  
                    <div className="col-sm-5 --skills-img" data-aos="fade-left" data-aos-duration="2200">
                        <img src={skillimg} alt="" />
                    </div> 
                </div>
            </div>
        </div>
    )
}