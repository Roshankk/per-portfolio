import React from "react"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaRetweet, FaGithub } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>I.T.I Squre Gokul Nagre baypass </p>
                            <p>Behind  Dr.Mallik Hospital</p>
                            <p>Bhavani Niwas,</p>
                            <p>Gadchiroli (442-605) Maharashtra</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                    <h4> <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                        +91-9822-6858-21</h4>
                    </div>
                    <br />
                    <div className="email">
                    <h4>  <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                       roshankalmakr8888@gmail.com</h4>
                    </div>

                </div>
                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>
                        I am a fresher frontend developer with a passion for creating                       visually appealing and user-friendly web experiences. I have a solid                       foundation in HTML, CSS, and JavaScript and librery like React.js. I                       am skilled in building responsive websites that adapt seamlessly                       across different devices. With a commitment to continuous learning, I                       am excited to contribute to the ever-evolving world of web                       development. This portfolio showcases my dedication, skills, and                       projects in frontend development.</p>

                    <div className="social">
                        <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />

                        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />

                        <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer