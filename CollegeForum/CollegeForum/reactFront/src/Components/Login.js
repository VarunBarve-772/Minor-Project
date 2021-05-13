import React,{ useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import '../css/registration.css';

const schema = yup.object().shape({
    enrollment: yup.string().required("This Field is Required"),
    password: yup.string().required("This Field is Required"),
})

function Login(props) {
       
    let history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);
    const [errorMessage, setErrorMessage]  = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    const submitForm = (data) => {
        fetch("http://127.0.0.1:8000/authentication/loginUser", {
      
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
            if(json['response'] === 'valid') {
                props.setUserId(data['enrollment']);
                sessionStorage.setItem('userId', JSON.stringify(data['enrollment']));
                sessionStorage.setItem('pass', JSON.stringify(btoa(data['password'])));
                history.push("/Home");
            } else {
                setErrorMessage("Invalid Credentials")
            }
        });
        
    }

    return(
    
    <div className="container">
        <div className="card">
            <form onSubmit={handleSubmit(submitForm)}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Enrollment Number</label>
                    <input type="text" className="form-control input-style" name="enrollment" {...register('enrollment')} placeholder="Enter Enrollment Number" />
                    <span>{ errors.enrollment?.message }</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type={passwordShown ? "text" : "password"} name="password" {...register('password')} className="form-control input-style" placeholder="Password..."/>
                    <span className="show-password" onClick={togglePasswordVisiblity}>Show Password</span>
                    <span>{ errors.password?.message }</span>
                </div>
                <span>{ errorMessage }</span>

                <center>
                    <button type="submit" className="register-btn">Login</button>
                </center>

                <p className="text-right">
                    <span>Don't have an account? </span>
                    <Link to="/Signin">Create Account</Link>
                </p>

                <p className="text-right">
                    <Link to="/ForgetPassword">Forget Password</Link>
                </p>
                </form>
        </div>
    </div>

     );
 }

 export default Login;