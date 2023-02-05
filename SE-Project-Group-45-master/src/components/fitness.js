import React, {Component} from "react";
import moment from "moment";
import ShowResult from "./ShowResult";
import "./fitness.css";
import {NavLink} from "react-router-dom";

export default class fitness extends Component{
    constructor (){
        super();
        this.state = {
            exercise: 'walk',
            hour:'0',
            min:'0',
            detail: []
        };
    }

    exercise = (e) => {
        this.setState({
            exercise: e.target.value
        });
    };

    hour = (e) => {
        this.setState({
            hour: e.target.value
        });
    };

    min = (e) => {
        this.setState({
            min: e.target.value
        });
    };

    componentDidMount(){
        this.timer = setInterval(() => {
            let {opacity} = this.state
            this.setState({opacity})
        }, 900);
    }

    submit = () => {
        let moment_1 = moment().format('YYYY-MM-DD HH:mm:ss');
        let temp = {exercise: this.state.exercise, hour: this.state.hour, min: this.state.min, moment: moment_1};
        console.log(temp)
        this.state.detail.push(temp)
        this.forceUpdate()
    };

    handleCheck(val) {
        return this.state.detail.some(
            (item) => val.exercise === item.exercise && val.hour === item.hour && val.min === item.min
        );
    }

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
                    <p>Fitness Support</p>
                </div>
                <div className="top-select">
                    <div style={{paddingTop:"3vh"}}>
                        <label>Fitness style</label><n> </n>
                        <select 
                            value={this.state.selectValue}
                            onChange={this.exercise}
                            style={{width:"45vw", height:"3vh"}}    
                        >
                            <option defaultValue>Select fitness style</option>
                            <option value="walk">walk</option>
                            <option value="jog">jog</option>
                            <option value="run">run</option>
                            <option value="Cycling">Cycling</option>
                        </select>
                    </div><br></br>
                    <div class="top-time">
                        <div style={{paddingTop:"1.5vh"}}>
                            <laber>Exercise time</laber><br></br>
                        </div>
                        <div style={{float:"right", paddingRight:"8vw"}}>
                            <input type="text" placeholder={"0"} 
                                value={this.state.selectValue} 
                                onChange={this.hour} /> hr<br></br>
                        <input type="text" placeholder={"0"} 
                            value={this.state.selectValue} 
                            onChange={this.min} /> min<br></br>
                        </div>
                        <p style={{paddingTop:"10vh", paddingLeft:"27vw", fontWeight:"bold", fontSize:"17px"}}>{moment().format('YYYY-MM-DD HH:mm:ss')}</p>
                        <div style={{paddingTop:"5vh", paddingLeft:"26.5vw"}}>
                            <button onClick={this.submit}
                                    style={{marginRight:"10vw", height:"4vh", width:"16vw", fontWeight:"bold", backgroundColor:"rgb(144, 208, 238)", borderRadius:"5pt"}}
                            >
                                Check
                            </button><t>   </t>
                            <button onClick={this.clear}
                                style={{height:"4vh", width:"16vw", fontWeight:"bold", backgroundColor:"rgb(144, 208, 238)", borderRadius:"5pt"}}
                            >
                                Clear
                            </button></div>
                        </div>
                        <nav style={{textAlign:"left", marginTop:"1vh", marginBottom:"8vh"}}>
                            <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", marginLeft:"5vw", marginRight:"5vw", borderBottom:"2pt black solid"}} to="./"> Home</NavLink>
                    
                            <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", marginRight:"5vw", borderBottom:"2pt black solid"}} to="./MentalHealth"> mental health </NavLink>
                    
                            <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", borderBottom:"2pt black solid"}} to="./diet">  diet tracking </NavLink>
                
                        </nav>
                    </div>
                {this.state.detail.map((data, index) => ( 
                    <ShowResult data={data} key={index} />
                ))}
            </div>
           
        );

    }


}
