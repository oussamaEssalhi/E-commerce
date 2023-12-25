import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import imag1 from "../../assets/user1.jpg";
import imagz2 from "../../assets/user2.jpg";
const Testimonials = () => {
    return (
        <div className="testimonials" id="testimonials">
            <div className="heading">
                <h1>Testimonials</h1>
            </div>
            <div className="slide">
                {/* use react botstrap slide */}
                <Carousel>
                    <Carousel.Item>
                        <img src={imag1} alt="" />
                        <Carousel.Caption>
                            <p>
                                "Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they
                                live."
                            </p>
                            <span className="author">
                                Maccy Doe - Front End
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imagz2} alt="" />
                        <Carousel.Caption>
                            <p>
                                "Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                far from the countries Vokalia."
                            </p>
                            <span className="author">
                                Simab Dave - Web Designer
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imag1} alt="" />
                        <Carousel.Caption>
                            <p>
                                "Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. "
                            </p>
                            <span className="author">
                                Johnthan Doe - UX Designer
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;
