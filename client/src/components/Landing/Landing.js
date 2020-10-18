import React from 'react'; 
import './Landing.css';
import HeaderLanding from '../HeaderLanding/HeaderLanding';


const Landing = () => {
    return (
        <section className="landing">
            <HeaderLanding />
            <div className="hero-text-box">
                <h1>Transform Your Life <br></br>Learn from ancient wisdom</h1>
                <a className="btn btn-full" href="#">Reserve My Spot</a>
                <a className="btn btn-ghost" href="#">Show me more</a>
            </div>
        </section>
    )
}

export default Landing;
