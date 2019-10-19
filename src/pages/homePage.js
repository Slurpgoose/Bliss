import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

let Home = () => {
    return (<div className="main-content">
                <div className="home-content">
                    <div className="title-container">
                    <h1>Welcome! Create a custom color scheme</h1>
                    <p>press start to begin</p>
                    <Link to="/fonts"><button className="primary-btn">Start!</button></Link>
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>)
}

export default Home;