import React from "react";




function showSignUp (props) {
    if (props.data.usertype === "expert" 
        ) {
            return(
                <div>
                    <h1>hello</h1>
                </div>
            );
    } else {
        return(
            <div>
                <h2>hi</h2>
            </div>
        );

    }
    
} 

export default showSignUp