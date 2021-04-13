import React, { useState } from "react";
import {Link} from 'react-router-dom';


function OTP() {

    const [option, setOption] = useState("true");
    const [option1, setOption1] = useState("");
  function handleChange(event) {
    const number = event.target.value;
    const newValue = false;
    setOption(newValue);
    setOption1(number);
  }
    return(
        <div>
       {option?<div className="OTP-div">
 <h2>Account Verification!</h2>
<h4>Get OTP on </h4>
<button type="button" class="btn btn-primary otp-option" onClick={handleChange} value="Mobile phone">Mobile</button>
<button type="button" class="btn btn-primary otp-option" onClick={handleChange} value="Email">Email</button>

</div> :
 <div className="OTP-div">

<h2>Account Verification!</h2>
<h4> Enter the OTP we just send on your {option1}. </h4>

<input type="text" className="smsCode" autoFocus="" maxlength="4" size="1" min="0" max="9" pattern="[0-9]{1}"/><br/>

<Link to="/Home" className="btn btn-primary btn-lg otp-button">Verify</Link>
{/* <button type="button" class="btn btn-primary otp-button">Verify</button> */}


</div>} 
        </div>
       
       
    );
  
}
export default OTP;