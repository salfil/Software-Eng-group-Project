import React, {Component, useReducer} from "react";

import Header from "./Header";

export default class login extends Component{
    
    constructor(props){
        super(props)

        this.state ={

            isExpert: false,
            isUser: false,
            isLoggedIn:false
        }

    }

    


    render(){

        

        const handleSubmit = event => {
            event.preventDefault();
            alert('Expert has logged in.')

          }

        
       

        
        const handleExpert = event => {
            this.state.isExpert = true;
            alert("hello")

        }
        const handleLogin= event => {
            this.state.isLoggedIn = true;

        }
        

                
        
            return(
            
                <div className="login">
                    <form onSubmit={handleSubmit}>

                        
                        <label>
                            
                            <select name="userType" onChange={handleExpert}>
                            <option value="">--Please choose user type--</option>
                            <option value="expert">expert</option>
                            <option value="user">user</option>
                                
                            </select>
                        </label>
                        <label>
                        
                            <p>Username</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" />
                        </label>
                        
                        <div>
                            <button type="submit">login</button>
                        </div>
                       
                        
                        </form>
                
    
    
                    
                </div>
                
    
            )
    

        }
        
    }


