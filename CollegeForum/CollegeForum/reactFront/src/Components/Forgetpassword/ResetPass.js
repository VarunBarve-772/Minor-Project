import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
    password: yup.string().required("This Field is Required").min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Please Enter a Valid Password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const ResetPass = () => {

    let history = useHistory();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    const togglePasswordVisiblity = function(value) {
        switch (value) {        
            case 'password':
                setPasswordVisibility(passwordVisibility ? false : true);
                break;
        
            case 'confirmPassword':
                setConfirmPasswordVisibility(confirmPasswordVisibility ? false : true);
                break;
        
            default:
                break;
        }
    };    

    const submitPassword = (data) => {
        console.log(data);
        fetch("http://127.0.0.1:8000/authentication/changePassword", {
    
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
            alert(json['response']);
        });
        history.push('/Login');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitPassword)}>
                <h4 className="profile-component">Change Password</h4>

                <div className="form-group">
                    <label>Password</label>
                    <input type={passwordVisibility ? "text" : "password"} name="password" {...register('password')} className="form-control input-style" placeholder="Password..."/>
                    <span className="show-password" onClick={() => togglePasswordVisiblity('password')}>Show Password</span>
                    <p>  { errors.password?.message }</p>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type={confirmPasswordVisibility ? "text" : "password"} name="confirmPassword" {...register('confirmPassword')} className="form-control input-style" placeholder="Confirm Password..."/>
                    <span className="show-password" onClick={() => togglePasswordVisiblity('confirmPassword')}>Show Password</span>
                    <p>  { errors.confirmPassword && "Passwords should match" }</p>
                </div>

                <button type="submit" className="btn btn-primary btn-lg profile-component" >Save</button>

                </form>
        </div>
    )

}

export default ResetPass;