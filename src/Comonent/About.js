//context Api no use usecontext 
import React from "react";
import { ApptoAbout } from "../App";

const About=()=>{
    return(
        <div>
            <ApptoAbout.Consumer>
                {
                    (name)=>{
                        return(
                            <p>my name is {name}</p>
                        )
                    }
                }
            </ApptoAbout.Consumer>

        </div>
    )
}
export default About