import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handelClick = () => setClick(!click);
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 200) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
    return (
        <div className={color ? "Header Header-bg" : "Header"}>
            <Link to="/">
                <h1>
                    Portfolio
                </h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div className="Hamburger" onClick={handelClick}>
                {click ? <FaTimes size={20} style={{ color: "white" }} /> : <FaBars size={20} style={{ color: "white" }} />}


            </div>
        </div>
    )
}

export default Navbar;