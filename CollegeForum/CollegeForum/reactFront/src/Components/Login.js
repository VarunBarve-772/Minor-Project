import React from 'react';
import {Link} from 'react-router-dom';

 function Login() {
     return(

<div class="card">
<form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control input-style" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control input-style" placeholder="Enter Password" />
                </div>
                <Link className="btn btn-dark btn-lg btn-block" to="/Home">Login</Link>
                {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button> */}
                <p className="text-right">
                    <Link to="/Signin">Create Account</Link>
                    {/* <a href="">Create Account?</a> */}
                </p>
                </form>
</div>

     );
 }
 export default Login;


