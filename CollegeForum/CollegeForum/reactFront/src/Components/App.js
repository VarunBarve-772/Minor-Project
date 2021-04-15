import React from 'react';
<<<<<<< HEAD
// import {Route, Switch} from 'react-router-dom';
// import Register from './Register';
// import Login from './Login';
// import OTP from './OTP';
// import Home from './Home';
// import About from "./About-us";
// import Contact from "./Contact-us";
// import Aques from "./Askques";
// import profile from "./profile";
import Myprofile from "./myProfile";
=======
import {Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import OTP from './OTP';
import Home from './Home';
import About from "./About-us";
import Contact from "./Contact-us";
import Aques from "./Askques";
import Front from "./front";
>>>>>>> f6ef3222156c62378e5a49818567a2ef06b51fe0

// import Update from './Update';
// import Questions from './Questions';
function App() {
  
return( 
    <div>
<<<<<<< HEAD
    <Myprofile/>
    
      {/* <Switch>
=======
        <Route exact path="/" component= {Front}/>
    
>>>>>>> f6ef3222156c62378e5a49818567a2ef06b51fe0
        <Route  path="/Login" component= {Login}/>
        <Route  path="/Signin" component= {Register}/>
        <Route  path="/Home" component= {Home}/>
        <Route  path="/OTP" component= {OTP}/> 
        <Route  path="/AboutUs" component= {About}/> 
        <Route  path="/ContactUS" component= {Contact}/> 
        <Route  path="/AskQuestion" component= {Aques}/> 
<<<<<<< HEAD
      </Switch> */}
=======
>>>>>>> f6ef3222156c62378e5a49818567a2ef06b51fe0
    </div>
);

}

export default App;