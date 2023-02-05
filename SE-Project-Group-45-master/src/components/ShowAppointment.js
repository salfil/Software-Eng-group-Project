import React from "react";
import moment from "moment"

const mins = (props) => {
    parseInt(props.data.hour , 10 ) * 60 + parseInt(props.data.min , 10 )
};

const calories = (props, mins) => {
    if (props.data.exercise === "walk") {
        mins * 5;
    } else if (props.data.exercise === "jog") {
        mins * 6.5;
    } else if (props.data.exercise === "run") {
        mins * 7;
    } else {
        mins * 4.3;
    }
};

const steps = (props, mins) => {
    if (props.data.exercise === "walk") {
        mins * 100;
    } else if (props.data.exercise === "jog") {
        mins * 200;
    } else {
        mins * 270;
    }
};

function ShowResult (props) {
    if (props.data.exercise === "walk" 
        || props.data.exercise === "jog" 
        || props.data.exercise === "run") {
            return(
                <div>
                    <span>lookup time: {moment().format('YYYY-MM-DD HH:mm:ss')} </span>
                    <span>training method: {props.data.exercise} </span>
                    <span>duration: {props.data.hour}hr {props.data.min}min </span>
                    <span>calories burnt: {calories} </span>
                    <span>Steps took: {steps} </span>
                </div>
            );
    } else {
        return(
            <div>
                <span>lookup time: {moment().format('YYYY-MM-DD HH:mm:ss')} </span>
                <span>training method: {props.data.exercise} </span>
                <span>duration: {props.data.hour}hr {props.data.min}min </span>
                <span>calories burnt: {calories} </span>
            </div>
        );

    }
    
} 

export default ShowResult