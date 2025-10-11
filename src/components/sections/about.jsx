import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2> Kousik Chandra </h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/kousik-chandra-826989342/"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/kousik-chandra-826989342/"><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/kousik-chandra-826989342/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/KousikTheHunk"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I am Kousik , <span> A Full Stack Software Engineer and Full Stack Digital Marketer </span> Based in India Who is 
                                    Specialized in Increasing Business Revenue by Streamlining Business Workflows by Building Custom Software Solutions for Business and by 
                                    Improving Sales and Marketing through Digital Marketing .
                                </h2>
                                <div className="hero-btns">
                                    <a href="https://drive.google.com/file/d/1K52klIcVYOHdlmqj_J_T4nPHpSwYTcDu/view" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Full Stack Software Development </li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Frontend Development </li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Backend Development </li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Database Design </li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Product Design </li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Full Stack Digital Marketing  </li>
                                </ul>
                            </SlideUp> 
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About