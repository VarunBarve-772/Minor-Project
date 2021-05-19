import React,{ useState } from 'react';
import { Route } from 'react-router-dom';
import Register from './RegisterUser/Register';
import Login from './Login';
import OTP from './OTP';
import Home from './Home/Home';
import About from "./About-us";
import Contact from "./Contact-us";
import Aques from "./Ques&Ans/Askques";
import Front from "./front";
import Profile from "./Profile/Profile";
import ForgetPassword from './Forgetpassword/ForgetPassword';
import Question from './Ques&Ans/Question'

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

    const [userId, setUserId] = useState(setUserSession);
    const [tempUserId, setTempUserId] = useState('');
  
return( 
    <div>
        { userId 
            ?
            <div>
                <Route exact path="/" component= { Front }/>        
                <Route  path="/AboutUs" component= { About }/> 
                <Route  path="/ContactUS" component= { Contact }/> 
                <Route  path="/AskQuestion" component= { Aques }/> 
                <Route  path="/ForgetPassword" component= { ForgetPassword }/>

                <Route  path="/Login" >
                    <Login setUserId={ setUserId }/>
                </Route>

                <Route  path="/Home" >
                    <Home setUserId={ setUserId } />
                </Route>

                <Route  path="/Signin" >
                    <Register setTempUserId={ setTempUserId }/>
                </Route>  

                <Route  path="/OTP" >
                    <OTP tempUserId={ tempUserId } setUserId={ setUserId }/>
                </Route>  
                          
                <Route  path="/Question" >
                    <Question />
                </Route>  

                <Route  path="/Profile" >
                    <Profile />
                </Route>
                          
            </div>
            :
            <div>
                <Route exact path="/" component= { Front }/> 
                <Route  path="/ForgetPassword" component= { ForgetPassword }/>
                
                <Route  path="/Login" >
                    <Login setUserId={ setUserId }/>
                </Route>

                <Route  path="/Signin" >
                    <Register setTempUserId={ setTempUserId }/>
                </Route>  

                <Route  path="/OTP" >
                    <OTP tempUserId={ tempUserId }/>
                </Route>
            </div>    
            }
    </div>
);

}

export default App;