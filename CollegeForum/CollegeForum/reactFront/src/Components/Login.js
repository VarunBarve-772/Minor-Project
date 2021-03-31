import React from 'react';
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
                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="text-right">
                    <a href="">Create Account?</a>
                </p>
                </form>
</div>

     );
 }
 export default Login;


