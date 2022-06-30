//parent to child data transfer
import React from "react";

const Aboutus=(props)=>{

    return(
        <div>
            <p>Aboutus-Page</p>
            <p>My name is {props.data}</p>
        </div>
    )
}

export default Aboutus