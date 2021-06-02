import React,{ useState } from 'react';
import { Route } from 'react-router-dom';
import Register from './RegisterUser/Register';
import Login from './Login';
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
  
return( 
    <div>
        { userId 
            ?
            <div>

                <Route  path="/AboutUs" >
                    <About setUserId={ setUserId }/>
                </Route> 

                <Route  path="/ContactUS" >
                    <Contact setUserId={ setUserId }/>
                </Route> 

                <Route  path="/AskQuestion" >
                    <Aques setUserId={ setUserId }/>
                </Route> 

                <Route  path="/Home" >
                    <Home setUserId={ setUserId } />
                </Route>
                          
                <Route  path="/Question" >
                    <Question setUserId={ setUserId } />
                </Route>  

                <Route  path="/Profile" >
                    <Profile setUserId={ setUserId } />
                </Route>

                <Route  path="/Login" >
                    <Login setUserId={ setUserId }/>
                </Route>

                <Route  path="/Signin" >
                    <Register setUserId={ setUserId } />
                </Route> 
                
            </div>
            :
            <div>
                <Route exact path="/">
                    <Front/>
                </Route> 

                <Route  path="/AboutUs" >
                    <About />
                </Route> 

                <Route  path="/ContactUS" >
                    <Contact />
                </Route> 

                <Route  path="/ForgetPassword" >
                    <ForgetPassword/>
                </Route>
                
                <Route  path="/Login" >
                    <Login setUserId={ setUserId }/>
                </Route>

                <Route  path="/Signin" >
                    <Register setUserId={ setUserId } />
                </Route>  

            </div>    
            }
    </div>
);

}

export default App;