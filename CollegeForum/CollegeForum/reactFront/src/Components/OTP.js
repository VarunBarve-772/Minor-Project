import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../css/OTP.css';

function OTP(props) {

  const [state, setState] = useState(true);
  const [stateValue, setStateValue] = useState("");
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [otpError, setOtpError] = useState('');
  
  function handleChange(event) {
    const newStateValue = event.target.value;
    getOTP(newStateValue);
    const newState = false;
    setState(newState);
    setStateValue(newStateValue);
  }

  const getOTP = function(whereToOTP) {
    fetch(`http://127.0.0.1:8000/authentication/OTP?otpDes=${whereToOTP}`)
  
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => console.log(json));

  }

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
            props.setUserId(props.tempUserId);
            sessionStorage.setItem('userId', JSON.stringify(props.tempUserId));
            history.push('/Home');
          }else {
            setOtpError('Invalid OTP');
          }
        });

  }

    return(
      <div>
        {state
          ?
          <div className="OTP-div">
            <h2>Account Verification!</h2>
            <h4>Get OTP on </h4>
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
              <span className="error_msg">*{ otpError }</span>
            </form> 
          </div>} 
      </div>       
    );
}
export default OTP;