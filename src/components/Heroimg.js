import "./Heroimg.css"
import React from "react"
import Introimg from "../assets/bg-img.png.png"
import { Link } from "react-router-dom"

const Heroimg =()=>{
    return(
        <div className="hero">
            <div className="mask">
                <img  className ="intro-img" src={Introimg} alt="Introimg"/>
            </div>
            <div className="content">
                {/* <p>HI, I'M A FRONTEND DEVELOPER.</p>
                <h1>UI developer</h1> */}
                <p>HI, I'M A FRONTEND DEVELOPER.</p>
                <h1>ROSHAN KALAMKAR</h1>
                <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}

export default Heroimg;