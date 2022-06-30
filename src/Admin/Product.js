//for Child to parent data Transfer
import React from "react";

const Product=(props)=>{
    const data={name:'sona',last:'chouhan'}
    return(
        <div>
            {/* <button onClick={()=>props.button("sonna")}>Click</button> */}
            {/* <button onClick={()=>props.button(data)}>Click</button> */}
            <button onClick={()=>props.button(100)}>Click</button>
        </div>
    )
}
export default Product;