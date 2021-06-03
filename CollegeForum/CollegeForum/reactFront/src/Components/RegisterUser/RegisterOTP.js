import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../css/OTP.css';

const RegisterOTP = (props) => {

  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [otpError, setOtpError] = useState('');

  const onSubmitOTP = function(data) {
    data.location = 'register';
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
      if(json.response === 'Valid') {
        props.setUserId(json['userId']);
        sessionStorage.setItem('userId', JSON.stringify(json['userId']));
        sessionStorage.setItem('pass', JSON.stringify(btoa(json['pass'])));
        history.push('/Home');
      }else if(json.response === 'Invalid') {
        setOtpError('Invalid OTP');
      } else if (json.response === 'Wrong') {
        alert('Something Went Wrong, Please Try Again!!!');
      }
    });

  }

    return(
      <div>
          <div className="OTP-div">

            <h2>Account Verification!</h2>
            <h6> Enter the OTP we sent on Your Email. </h6>
            
            <form onSubmit={handleSubmit(onSubmitOTP)}>
              <input type="text" name="otpValue" {...register('otpValue')} className="smsCode" autoFocus="" maxLength="4" size="1" min="0" max="9" pattern="[0-9]{4}"/><br/>

              <button type="submit" className="otp_submit_button">Verify</button><br/>
              <span className="error_msg">{ otpError }</span>
            </form> 
          </div>
      </div>       
    );
}
export default RegisterOTP;