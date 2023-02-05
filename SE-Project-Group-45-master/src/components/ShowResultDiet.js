import React from "react";
import "./ShowResultDiet.css"


function ShowResultDiet (props) {
    let foodIntake = parseInt(props.data.intake);
    let calories = 0;

    if (props.data.FoodType === "Carbohydrates") {
        calories = foodIntake * 4;
    } else if (props.data.FoodType === "Fruits/Veg") {
        calories = foodIntake * 0.15;
    } else if (props.data.FoodType === "Dairy") {
        calories = foodIntake * 0.7;
    } else {
        calories = mins * 4;
    }

    let steps = calories * 20
    return(
        <div className="result">
            <p style={{color:"white", marginTop:"0.8vh", marginLeft:"2vw", marginBottom:"-0.1vh", fontWeight:"bold"}}>Result:</p>
                <span style={{color:"white",marginLeft:"17vw"}}>lookup time: {props.data.moment} </span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Food Type: {props.data.FoodType} </span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Food intake: {props.data.intake}grams </span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Calorie intake: {calories}kcals</span><br></br>
                <span style={{color:"white",marginLeft:"17vw"}}>Steps for fitness: {steps}steps</span><br></br>
                <p></p>
        </div>
    );

    
} 

export default ShowResultDiet
