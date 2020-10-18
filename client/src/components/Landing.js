import React from 'react'
import Continent from './Continent.js';

const Landing = () => {
       
    return (
    
        <section className="landing">
           <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Countries Project</h1>
                    <Continent/>
                </div>
            </div>
        </section>
    )
}


export default Landing
