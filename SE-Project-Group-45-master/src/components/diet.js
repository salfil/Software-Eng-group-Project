import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./diet.css";


import moment from "moment"
import ShowResultDiet from "./ShowResultDiet";


export default class diet extends Component{
    constructor (){
        super();
        this.state = {
            FoodType: 'Carbohydrates',
            intake:'0',
            detail: []
        };
    }

    FoodType = (e) => {
        this.setState({
            FoodType: e.target.value
        });
    };

    intake = (e) => {
        this.setState({
            intake: e.target.value
        });
    };

    // grams = (e) => {
    //     this.setState({
    //         grams: e.target.value
    //     });
    // };


    componentDidMount(){
        this.timer = setInterval(() => {
            let {opacity} = this.state
            this.setState({opacity})
        }, 900);
    }

    submit = () => {
        let moment_1 = moment().format('YYYY-MM-DD HH:mm:ss');
        let temp = {FoodType: this.state.FoodType, intake: this.state.intake, moment: moment_1};
        console.log(temp)
        this.state.detail.push(temp)
        this.forceUpdate()
    };

    // handleCheck(val) {
    //     return this.state.detail.some(
    //         (item) => val.FoodType === item.FoodType && val.intake === item.intake && val.min === item.min
    //     );
    // }

    clear = () => {
        this.setState({
            detail: []
        });
        localStorage.removeItem("detail");

    };


    render(){
        return(
            <div style={{marginTop:"20vh"}}>
                <div className="top">
                <p>Diet Tracking</p>
                </div>
                <div className="top-select">
                    <div style={{paddingTop:"3vh"}}>
                        <label>Diet type</label><n> </n>
                        <select 
                            value={this.state.selectValue}
                            onChange={this.FoodType}
                            style={{width:"45vw", height:"3vh"}}    
                        >
                            <option defaultValue>Select fitness style</option>
                            <option value="Carbohydrates">Carbohydrates</option>
                            <option value="Fruits/Veg">Fruits/Veg</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Protein">Protein</option>
                        </select>
                    </div><br></br>
                    <div class="top-time">
                        <div style={{paddingTop:"3vh", fontWeight:"bold"}}>
                            <laber>Intake</laber>
                            <input type="text" placeholder={"0"} 
                                value={this.state.selectValue} 
                                onChange={this.intake} 
                                style={{marginLeft:"19vw"}}
                            /> Grams
                        </div>
                        <p style={{paddingTop:"5vh", paddingLeft:"27vw", fontWeight:"bold", fontSize:"17px"}}>{moment().format('YYYY-MM-DD HH:mm:ss')}</p>
                        <div style={{paddingTop:"5vh", paddingLeft:"26.5vw"}}>
                            <button onClick={this.submit}
                                    style={{marginRight:"10vw", height:"4vh", width:"16vw", fontWeight:"bold", backgroundColor:"rgb(144, 208, 238)", borderRadius:"5pt"}}
                            >
                                Check
                            </button> 
                            <button onClick={this.clear}
                                style={{height:"4vh", width:"16vw", fontWeight:"bold", backgroundColor:"rgb(144, 208, 238)", borderRadius:"5pt"}}
                            >
                                Clear
                            </button>
                        </div>
                        <nav style={{textAlign:"left", marginTop:"5vh", marginBottom:"8vh"}}>
                            <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", marginLeft:"12vw", marginRight:"5vw", borderBottom:"2pt black solid"}} to="./"> Home</NavLink>
                    
                            <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", marginRight:"5vw", borderBottom:"2pt black solid"}} to="./MentalHealth"> mental health </NavLink>
            
                            <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", borderBottom:"2pt black solid"}} to="./fitness"> fitness </NavLink>
                
                        </nav>
                    </div>
                </div>
                {this.state.detail.map((data, index) => ( 
                    <ShowResultDiet data={data} key={index} />
                ))}
            </div>

        );

    }


}


