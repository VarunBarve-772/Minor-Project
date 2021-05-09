import React from "react";
import '..../css/Forgotpassword.css';
function Username() {
    return(
<div className="card">
    <h2>Forgot password!!</h2>
    <div className="form-group ">
      <input type="password" name="oldPassword" className="form-control input-style" placeholder="Enter Username..." />
      <button type="button" class="btn btn-primary btn-lg ">Get OTP</button>
    </div>
</div>
    );
}
export default Username;