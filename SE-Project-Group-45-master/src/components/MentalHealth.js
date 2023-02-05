import React, {Component, useState } from "react";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';



class FormsAndInputs extends Component {
    constructor(props) {
      super(props)

      this.state = {
          email: "",
          issue: "",
          date: "",
          


      }
      this.handleSubmit=this.handleSubmit.bind(this);
  }


  firsthandler = (event) => {
      this.setState({
          email: event.target.value
      })
  }
  lasthandler = (event) => {
      this.setState({
          issue: event.target.value
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
      
      alert(this.state)
      this.setState({
          email: "",
          issue: "",
         
      });
      
  }
  setData(){
    let obj = {email: this.state.email, issue: this.state.issue}
    localStorage.setItem("myData", JSON.stringify(obj));
  
  }
  getData(){
    let data = localStorage.getItem("MyData")
    data = JSON. parse(data);
    alert(data.email)

    //<button onClick={ () => this.setData() }>set data</button>
                 // <button onClick={ () => this.getData() }>get data</button>

  }

  render() {
      return (
        
        <div>

            <form onSubmit={this.handleSubmit}>
                <h2 style={{textAlign:"center"}}>Book an appointment here</h2>
                <nav style={{textAlign:"left", marginTop:"8vh", marginBottom:"8vh"}}>
                    <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", marginLeft:"13.5vw", marginRight:"5vw", borderBottom:"2pt black solid"}} to="./"> Home</NavLink>
                    
                    <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", marginRight:"5vw", borderBottom:"2pt black solid"}} to="./fitness"> fitness </NavLink>
                    
                    <NavLink style={{color:"black", textDecoration:"none", fontWeight:"bold", fontSize:"2.5vh", borderBottom:"2pt black solid"}} to="./diet">  diet tracking </NavLink>
                
                </nav>
                <div className="user-detail">
                    <label>email : </label> <input type="text" value={this.state.email} onChange={this.firsthandler} style={{marginLeft:"2vw", marginBottom:"1vh"}} placeholder="email..." /><br />
                    <label style={{float:"left", marginLeft:"18vw"}}>issue : </label> <textArea value={this.state.issue} onChange={this.lasthandler} style={{marginLeft:"-14.5vw", marginBottom:"1vh", height:"8vh", width:"41.5vw"}} placeholder="issue..." /><br />
                  

                    <div style={{float:"left", marginTop:"1vh", marginLeft:"40vw"}}>
                        <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                  
                </div> 
              </form>
              

        </div>
          
      )
  }
}

export default FormsAndInputs
