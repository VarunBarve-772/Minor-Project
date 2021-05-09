import React from "react";
import '..../css/Forgotpassword.css';
function Reset() {
    return(
<div className="card">
    <h2>Forgot password!!</h2>
    <div className="form-group ">
      <input type="password" name="oldPassword" className="form-control input-style" placeholder="New password..." />
      <input type="password" name="oldPassword" className="form-control input-style" placeholder="Confirm password..." />
      <button type="button" class="btn btn-primary btn-lg ">Reset</button>
    </div>
</div>
    );
}
export default Reset;