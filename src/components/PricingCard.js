import "./PricingCard.css"

import React from "react"
import { Link } from "react-router-dom"
const PricingCard = ()=>{
    return (
        <div className="Pricing">
          <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 10</p>
                <p>- 3 Days -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
            <Link to="/Contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 20</p>
                <p>- 7 Days -</p>
                <p>- 10 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
            <Link to="/Contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 40</p>
                <p>- 15 Days -</p>
                <p>- 20 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
            <Link to="/Contact" className="btn">Purchase Now</Link>
            </div>
          </div>
        </div>
    )
}


export default PricingCard;