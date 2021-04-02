import React from 'react';
import {Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import OTP from './OTP';
import Home from './Home';
function App() {
  
  return(
 
    <div>
      <Route exact path="/Login" component= {Login}/>
      <Route  path="/Signin" component= {Register}/>
      <Route  path="/Home" component= {Home}/>
      <Route  path="/OTP" component= {OTP}/>
    </div>
 );

}

export default App;