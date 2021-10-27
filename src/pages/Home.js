import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <div class='text-container'>
            <h1>Stargazer</h1>
            <p>A simple way of storing your own pictures of the night sky.</p>
            <Link to='/astrocollection'>Add them here</Link>
        </div>
    ) 
};

export default Home;