import "./Navs.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navs = () => {
    return (
        <div className="header">
            <Navbar expand="lg" className="">
                <Container>
                    {" "}
                    <Link
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                        isDynamic={true}
                    >
                        <img src={logo} alt="" title="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link to="about">About Us</Nav.Link> */}
                            {/* <Nav.Link href="#home">Explore foods</Nav.Link> */}
                            {/* <Nav.Link href="#link">Reviews</Nav.Link> */}
                            {/* <Nav.Link href="#home">FAQ</Nav.Link> */}
                            <Link
                                to="landing"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                isDynamic={true}
                            >
                                Home
                            </Link>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                isDynamic={true}
                            >
                                about
                            </Link>
                            <Link
                                to="explore"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                isDynamic={true}
                            >
                                Explore Food
                            </Link>
                            <Link
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                isDynamic={true}
                            >
                                Reviews
                            </Link>
                            <Link
                                to="frequently"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                isDynamic={true}
                            >
                                FAQQ
                            </Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" id="call">
                                1092 092 0921
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navs;
