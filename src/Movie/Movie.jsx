import React from "react"
import './Style.css';

function Movie (props) {
    return (
       <div className="movie-card">
         <img src={props.banner}></img>
        <label>{props.likes} {props.name} {props.hero}</label>
       </div>
    )
}

export default Movie;