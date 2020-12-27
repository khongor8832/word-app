import React from "react"
import './style.module.css';
import HeaderControl from "../Component/HeaderControl"
import Control from "../Component/Control"
import BoxControls from "../Component/BoxControls"


const App = () => {
 
  return (
    <div className="App">
                  
        <HeaderControl/>
        <Control/>
       <BoxControls/>
        
             
          
    </div>
  );
}

export default App;
/* <img src={logo} className="App-logo" alt="logo" /> */