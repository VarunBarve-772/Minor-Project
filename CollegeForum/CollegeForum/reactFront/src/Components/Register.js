import React from 'react';
import Form from '../Forms/RegistrationForm'; 

function Register() {
    return(
    <div>
        <div class="card">
            <Form />
        </div>
    </div>
    )
}
export default Register;



// {/* <form>
//         <h3>Register Here!!</h3>

//         <div className="form-group">
//             <label>Name</label>
//             <input type="text" className="form-control input-style name" placeholder="Enter full name" required="required" />
//         </div>
//         <div className="form-group">
//             <label>Email</label>
//             <input type="email" className="form-control input-style email" placeholder="Enter email" required="required"/>
//         </div>

//         <div className="form-group">
//             <label>Password</label>
//             <input type="password" className="form-control input-style password" placeholder="Enter password" required="required"/>
//         </div>
//         <div className="form-group">
//             <label>Mobile number</label>
//             <input type="phone" className="form-control input-style mob" placeholder="Enter mobile number" />
//         </div>
//         <div className="form-group">
//             <label>Branch/Institute</label>
//             <input type="text" className="form-control input-style inst" placeholder="Enter branch/institute" required="required"/>
//         </div>
//         <div className="form-group">
//             <label>Year</label>
//             <input type="number" className="form-control input-style year" placeholder="Enter year" required="required"/>
//         </div>
//         <div className="id-div">
//             <label className="id-label">Id Card photo</label>
//             <input type="file" class="id" accept="image/*" required="required"></input>
//         </div>

//          <Link to="/OTP" type="submit" className="btn btn-dark btn-lg btn-block">Get OTP</Link> 
//         <button type="submit" className="btn btn-dark btn-lg btn-block" to="/OTP">Register</button>

//         <p className="text-right">
//             Already registered? 
//             <Link to='/Login'>Login</Link>
//             <a href="#something">log in?</a>
//         </p>
//     </form> */}