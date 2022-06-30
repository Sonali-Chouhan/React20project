//For context Api use usecontext
import React,{useContext} from "react";
import { ApptoHome } from "../App";

const Home=()=>{
const User = useContext(ApptoHome)

    return(
        <div>
            <p>My Name is {User}</p>
        </div>
    )
}
export default Home;