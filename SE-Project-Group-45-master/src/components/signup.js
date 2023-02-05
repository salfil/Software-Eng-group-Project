import React, { Component } from 'react'
import "./signup.css";
import Button from '@material-ui/core/Button';



export default class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            usertype: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    userhandler = (event) => {
        this.setState({
            usertype: event.target.value
        })
        
    }

    handleSubmit = () => {
        
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            usertype: "",
        })
        if (this.state.usertype === "expert") {
            this.props.history.push("./ExpertAppointments")
                       
        } else if (this.state.usertype === "user") {
            this.props.history.push("./MentalHealth")
            
        }
    
        
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{textAlign:"center"}} >MoreLife: Physical and mental wellbeing</h1>
                    <h1 className="title">User Registration</h1>
                    <div className="user-detail">
                    <label>FirstName ：  </label><input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName  ： </label><input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password  ： </label><input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label style={{float:"left", paddingLeft:"13vw"}}>User type:</label><select style={{float:"left", marginTop:"0.5vh", marginLeft:"-5.5vw"}} onChange={this.userhandler} defaultValue="Select user type">
                        <option defaultValue>Select user type</option>
                        <option value="expert">expert</option>
                        <option value="user">user</option>
                    </select><br />
                    <div style={{float:"left", marginTop:"3vh", marginLeft:"-17.5vw"}}>
                    <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                    </div>
                </form>

            </div>
            
        )
    }
}

