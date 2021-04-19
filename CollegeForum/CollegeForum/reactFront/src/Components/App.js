import React from 'react';
import {Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import OTP from './OTP';
import Home from './Home';
import About from "./About-us";
import Contact from "./Contact-us";
import Aques from "./Askques";
import Front from "./front";

// import Update from './Update';
// import Questions from './Questions';
function App() {
  
return( 
    <div>
        <Route exact path="/" component= {Front}/>
    
        <Route  path="/Login" component= {Login}/>
        <Route  path="/Signin" component= {Register}/>
        <Route  path="/Home" component= {Home}/>
        <Route  path="/OTP" component= {OTP}/> 
        <Route  path="/AboutUs" component= {About}/> 
        <Route  path="/ContactUS" component= {Contact}/> 
        <Route  path="/AskQuestion" component= {Aques}/> 
    </div>
);

}

export default App;