import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import ResetPass from './ResetPass';

const ForgetOTP = (props) => {

  const { register, handleSubmit } = useForm();
  const [otpError, setOtpError] = useState('');


  const onSubmitOTP = function(data) {

    fetch("http://127.0.0.1:8000/authentication/OTP", {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(data),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
  
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => {
          if(json['result'] === 'valid') {
            props.setState(<ResetPass/>);
          }else {
            setOtpError('Invalid OTP');
          }
        });
      } 

return(
    <div>
      <div className="OTP-div">

      <h2>Account Verification!</h2>
      <h6> Enter the OTP we just send on your Email. </h6>

      <form onSubmit={handleSubmit(onSubmitOTP)}>
        <input type="text" name="otpValue" {...register('otpValue')} className="smsCode" autoFocus="" maxLength="4" size="1" min="0" max="9" pattern="[0-9]{4}"/><br/>

        <button type="submit" className="otp_submit_button">Verify</button><br/>
        <span className="error_msg">{ otpError }</span>
      </form> 
      </div>
    </div>       
  );
}

export default ForgetOTP;