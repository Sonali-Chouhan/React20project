 //parent to child
 //Get Api Data
 import React from "react"

const Contactus=(props)=>{
 return(
       <div>
            <p>List-Contactus-Page</p>
             {props?.user?.splice(0, 10).map((x) => {
        return (
          <ul key={x.id}>
            <li>{x.title}</li>
          </ul>
        );
      })}
       </div>
    )
}
export default Contactus