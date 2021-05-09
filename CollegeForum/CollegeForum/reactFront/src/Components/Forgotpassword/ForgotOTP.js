import React from "react";

function ForgotOTP() {

    const [state, setState] = useState(true);
  const [stateValue, setStateValue] = useState("");

    function handleChange(event) {
        const newStateValue = event.target.value;
        getOTP(newStateValue);
        const newState = false;
        setState(newState);
        setStateValue(newStateValue);
      }

return(
    <div>
      {state
        ?
        <div className="OTP-div">
          <h2>Account Verification!</h2>
          
          <button type="button" className="otp-option" onClick={handleChange} value="Mobile phone">Mobile</button>
          <button type="button" className="otp-option" onClick={handleChange} value="Email">Email</button>

        </div> 
        :
        <div className="OTP-div">

          <h2>Account Verification!</h2>
          <h6> Enter the OTP we just send on your {stateValue}. </h6>
          
          <form onSubmit={handleSubmit(onSubmitOTP)}>
            <input type="text" name="otpValue" {...register('otpValue')} className="smsCode" autoFocus="" maxLength="4" size="1" min="0" max="9" pattern="[0-9]{4}"/><br/>

            {/* <Link to="/Home" className="btn btn-primary btn-lg otp-button">Verify</Link> */}
            <button type="submit" className="otp_submit_button">Verify</button><br/>
            
          </form> 
        </div>} 
    </div>       
  );
}
export default ForgotOTP;