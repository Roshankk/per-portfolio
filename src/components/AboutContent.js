import { Link } from "react-router-dom";
import "./AboutContent.css";
import About from "../assets/about.jpg.jpg"
import About2 from "../assets/about2.jpg.jpg"
const AboutContent = () => {
    return (
        <div className="about">

            <div className="left">
                <h1>Who Am I ?</h1>
                <p>
                    I'm a react front-end developer. I create
                    responsive secure website
                </p>
                <Link to="/Contact">
                    <button className="btn">
                        CONTACT
                    </button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="top">
                        <img src={About} className= "img" alt="About" />

                    </div>
                    <div className="bottom">
                        <img src={About2} className= "img" alt="About" />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutContent;