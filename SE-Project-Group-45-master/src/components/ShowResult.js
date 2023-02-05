import React from "react";
import "./showResult.css";




function ShowResult (props) {
    let mins = parseInt(props.data.hour , 10 ) * 60 + parseInt(props.data.min , 10 )
    let calories =  0
    if (props.data.exercise === "walk") {
        calories = mins * 5;
    } else if (props.data.exercise === "jog") {
        calories = mins * 6.5;
    } else if (props.data.exercise === "run") {
        calories = mins * 7;
    } else {
        calories = mins * 4.3;
    }
    let steps = 0
    if (props.data.exercise === "walk") {
        steps = mins * 100;
    } else if (props.data.exercise === "jog") {
        steps = mins * 200;
    } else {
        steps = mins * 270;
    }
    if (props.data.exercise === "walk" || props.data.exercise === "jog" || props.data.exercise === "run") {
            return(
                <div className="result">
                    <p style={{color:"white", marginTop:"0.8vh", marginLeft:"2vw", marginBottom:"-0.1vh", fontWeight:"bold"}}>Result:</p>
                    <span style={{color:"white",marginLeft:"17vw"}}>Lookup time: {props.data.moment} </span><br></br>
                    <span style={{color:"white",marginLeft:"17vw"}}>Exercise method: {props.data.exercise} </span><br></br>
                    <span style={{color:"white",marginLeft:"17vw"}}>Duration: {props.data.hour}hrs  {props.data.min}mins</span><br></br>
                    <span style={{color:"white",marginLeft:"17vw"}}>Calories burnt: {calories} </span><br></br>
                    <span style={{color:"white",marginLeft:"17vw", paddingBottom:"3vh"}}>Steps took: {steps}</span><br></br>
                    <p></p>
                </div>
            );
    } else {
        return(
            <div className="result">
                <p style={{color:"white",marginTop:"0.8vh", marginLeft:"2vw", marginBottom:"-0.1vh", fontWeight:"bold"}}>Result:</p>
                <span style={{color:"white",marginLeft:"17vw"}}>Lookup time: {props.data.moment} </span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Exercise method: {props.data.exercise} </span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Duration: {props.data.hour}hrs  {props.data.min}mins</span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Calories burnt: {calories} </span><br></br>
                <p></p>
            </div>
        );

    }
    
} 

export default ShowResult
