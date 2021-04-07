import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().min(2).max(50).required(),
    lastName: yup.string().min(2).max(50).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    mobile: yup.string().required(),
    institute: yup.string().max(100).required(),
    year: yup.number().positive().integer().min(1).max(5).required(),
    // idCard: 
})
// const schema = yup.object().shape({
//     firstName: yup.string().min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/).required(),
//     lastName: yup.string().min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/).required(),
//     email: yup.string().email().required(),
//     password: yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
//     mobile: yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/).required(),
//     institute: yup.string().max(100).matches(/^[a-zA-Z]+$/).required(),
//     year: yup.number().positive().integer().min(1).max(5).required(),
//     // idCard: 
// })

function Form() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <h3>Register Here!!</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" ref={register} className="form-control input-style" placeholder="First Name..."/>
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" ref={register} className="form-control input-style" placeholder="last Name..."/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" ref={register} className="form-control input-style" placeholder="Email..."/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type={passwordShown ? "text" : "password"} name="password" ref={register} className="form-control input-style" placeholder="Password..."/>
                <span onClick={togglePasswordVisiblity}>Show Password</span>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type={confirmPasswordShown ? "text" : "password"} name="confirmPassword" ref={register} className="form-control input-style" placeholder="Confirm Password..."/>
                <span onClick={toggleConfirmPasswordVisiblity}>Show Password</span>
            </div>

            <div className="form-group">
                <label>Mobile number</label>
                <input type="text" name="mobile" ref={register} className="form-control input-style" placeholder="Mobile Number..." />
            </div>

            <div className="form-group">
                <label>Institute Name</label>
                <input type="text" name="institute" ref={register} className="form-control input-style" placeholder="Institute..."/>
            </div>

            <div className="form-group">
                <label>Year</label>
                <input type="text" name="year" ref={register} className="form-control input-style" placeholder="Year..."/>
            </div>

            <div className="id-div">
                <label className="id-label">Id Card photo</label>
                <input type="file" name="idCard" className="id" accept="image/*"/>
            </div>

            <Link to="/OTP" type="submit" className="btn btn-dark btn-lg btn-block">Get OTP</Link> 

            <p className="text-right">
                Already registered? 
                <Link to='/Login'>Login</Link>
            </p>
        </form>
    )
}

export default Form;