import "./Footer.css";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className="footer" id="footer">
            <div className="container">
                <ul>
                    <li>Register</li>
                    <li>Forum</li>
                    <li>Affiliate</li>
                    <li>FQA</li>
                </ul>
                <div className="icons">
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                    <div className="icon">
                        <FaTwitter />
                    </div>
                    <div className="icon">
                        <FaInstagram />
                    </div>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <div className="icon">
                        <TfiYoutube />
                    </div>
                </div>
                <div className="copyghit">
                    {" "}
                    {date}. Foodera. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
