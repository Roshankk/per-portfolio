import './WorkCard.css'
import React from "react"
import { NavLink ,Link } from 'react-router-dom'
const WorkCard = (props) => {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p> {props.text}</p>
            <div className="pro-btns">
                <Link to={props.view }  className="btn"> View</Link>
                <NavLink to={props.source} className="btn"> source</NavLink>
            </div>
        </div>
    </div>
    )
}

export default WorkCard;

// import './WorkCard.css'
// import React from "react"
// import { NavLink } from 'react-router-dom'

// const WorkCard = (props) => {
//     const handleViewClick = () => {
//         window.open(props.view, "_blank");
//     }

//     const handleSourceClick = () => {
//         window.open(props.source, "_blank");
//     }

//     return (
//         <div className="project-card">
//             <img src={props.imgsrc} alt="image" />
//             <h2 className="project-title">{props.title}</h2>
//             <div className="pro-details">
//                 <p>{props.text}</p>
//                 <div className="pro-btns">
//                     <button className="btn" onClick={handleViewClick}>View</button>
//                     <button className="btn" onClick={handleSourceClick}>Source</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WorkCard;
