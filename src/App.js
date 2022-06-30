import axios from "axios";
import React, { createContext, useState,useEffect } from "react";
import Features from "./Admin/Feature";
import Product from "./Admin/Product";
import About from "./Comonent/About";
import Home from "./Comonent/Home";
import Profile from "./Comonent/Profile";
import Aboutus from "./Mycomponent/Aboutus";
import Contactus from "./Mycomponent/Contactus";
import 'antd/dist/antd.css';
export const ApptoHome=createContext();
export const ApptoAbout=createContext();
export const ApptoProfile=createContext();

const App=()=>{
  //App to Home
  const [data,setdata]=useState("Son")
  //App to About
  const [item,setitem]=useState("Sona")
  //App to Aboutus //parent to child data transfer
  const [object,setObject]=useState("Sonali")
  //App to Profile
  const [record,setRecord]=useState([])
  //App to Contectus //parent to child Api-data transfer
  const [User,setUser]=useState([])
  // for Child to parent data transfe
  const [count,setcount]=useState(0)
  const handleClick=(data)=>{
  setcount(current=>current+ data)
  }
  

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setRecord(res.data)
    })
  
  }, [])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      setUser(res.data)
    })
  
  }, [])
  return(
    <div>
      {/* <Features/> */}
         <h3>Parent to Child</h3>
        <Aboutus data={object} />
        <h3>Parent to child Api data transder</h3>
        <Contactus user={User}/>
      <h3>Home Page Provider</h3>
      <ApptoHome.Provider value={data}>
        <Home/>
      </ApptoHome.Provider>
      <h3>About Page Provider</h3>
      <ApptoAbout.Provider value={item}>
        <About/>
      </ApptoAbout.Provider>
    
      <h3>profile Page Provider</h3>
      <ApptoProfile.Provider value={record}>
        <Profile/>
      </ApptoProfile.Provider>
      <h3>Clild to Parent</h3>
       {/* Function Transfer */}
        <Product button={handleClick}/>
       <h4>child to parent :{count}</h4> 
      

    </div>
  )
}
export default App;
