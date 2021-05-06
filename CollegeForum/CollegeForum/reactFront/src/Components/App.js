import React,{ useState } from 'react';
import {Route} from 'react-router-dom';
import Register from './RegisterUser/Register';
import Login from './Login';
import OTP from './OTP';
import Home from './Home';
import About from "./About-us";
import Contact from "./Contact-us";
import Aques from "./Askques";
import Front from "./front";
import Profile from "./Profile/Profile";

// import Update from './Update';
// import Questions from './Questions';
function App() {

    const setUserSession = () => {
        if(sessionStorage.getItem('userId')) {
            return sessionStorage.getItem('userId');
        } else {
            return '';
        }
    }

    const[userId, setUserId] = useState(setUserSession);
    const[tempUserId, setTempUserId] = useState('');
  
return( 
    <div>
        { userId 
            ?
            <div>
                <Route exact path="/" component= {Front}/>        
                <Route  path="/AboutUs" component= {About}/> 
                <Route  path="/ContactUS" component= {Contact}/> 
                <Route  path="/AskQuestion" component= {Aques}/> 
                <Route  path="/Profile" component= {Profile}/> 

                <Route  path="/Login" render={() => (
                    <Login setUserId={setUserId}/>
                )}/>

                <Route  path="/Home" render={() => (
                    <Home setUserId={setUserId}/>
                )}/>

                <Route  path="/Signin" render={() => (
                    <Register setTempUserId={setTempUserId}/>
                )}/>  

                <Route  path="/OTP" render={() => (
                    <OTP tempUserId={tempUserId}/>
                )}/>  
                          
            </div>
            :
            <div>
                <Route exact path="/" component= {Front}/> 
                
                <Route  path="/Login" render={() => (
                    <Login setUserId={setUserId}/>
                )}/>

                <Route  path="/Signin" render={() => (
                    <Register setTempUserId={setTempUserId}/>
                )}/>  

                <Route  path="/OTP" render={() => (
                    <OTP tempUserId={tempUserId} setUserId={setUserId}/>
                )}/>
            </div>    
            }
    </div>
);

}

export default App;