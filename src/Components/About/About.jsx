import "./About.css";
import img from "../../assets/1.png";
import img2 from "../../assets/2.png";
import { Buttons } from "../index";
import { Fragment } from "react";
import { FaCheck, FaPlay } from "react-icons/fa6";

const About = () => {
    return (
        <Fragment>
            <div className="about container" id="about">
                <div className="about-imag">
                    <img src={img} alt="about" />
                </div>
                <div className="content-about">
                    <h3>
                        We pride ourselves on making real food from the best
                        ingredients.
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum in sit amet leo.
                        Mauris feugiat erat tellus.
                    </p>
                    <Buttons>Learn More</Buttons>
                </div>
            </div>
            <div className="about2">
                <div className="about2-content">
                    <h3>
                        We make everything by hand with the best possible
                        ingredients.
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum in sit amet leo.
                        Mauris feugiat erat tellus.Far far away, behind the word
                        mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.
                    </p>
                    <ul>
                        <li>
                            <FaCheck />
                            Etiam sed dolor ac diam volutpat.
                        </li>
                        <li>
                            <FaCheck />
                            Erat volutpat aliquet imperdiet.
                        </li>

                        <li>
                            <FaCheck /> purus a odio finibus bibendum.
                        </li>
                    </ul>
                    <Buttons className="read-more">Read More</Buttons>
                </div>
                <div className="about2-imag">
                    <img src={img2} alt="About deux" />
                </div>
            </div>
            <div className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>
                                When a man's stomach is full it makes no <br />
                                difference whether he is rich or poor.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam et purus a odio <br />
                                finibus bibendum in sit amet leo. Mauris feugiat
                                erat tellus.
                            </p>
                            <a href="/">
                                {" "}
                                <FaPlay />
                                Watch Our Story
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default About;
