import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().min(2).max(50).required(),

    lastName: yup.string().min(2).max(50).required(),

    email: yup.string().email().required(),

    password: yup.string().min(8).required(),

    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),

    mobile: yup.string().required(),

    institute: yup.string().max(100).required(),
    
    year: yup.number().positive().integer().min(1).max(5).required()
});
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
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
             <h3>Register Here!!</h3>

             <div className="varun-group">
                 <label>First Name</label>
                 <input type="text" name="firstName" ref={register('firstName', { required: true, maxLength: 50 })} className="varun-control input-style" placeholder="First Name..."/>
             </div>

             <div className="varun-group">
                 <label>Last Name</label>
                 <input type="text" name="lastName" ref={register('lastName', { required: true, maxLength: 50 })} className="varun-control input-style" placeholder="last Name..."/>
             </div>

             <div className="varun-group">
                 <label>Email</label>
                 <input type="email" name="email" ref={register('email')} className="varun-control input-style" placeholder="Email..."/>
             </div>

             <div className="varun-group">
                 <label>Password</label>
                 <input type={passwordShown ? "text" : "password"} name="password" ref={register('password')} className="varun-control input-style" placeholder="Password..."/>
                 <span onClick={togglePasswordVisiblity}>Show Password</span>
             </div>

             <div className="varun-group">
                 <label>Confirm Password</label>
                 <input type={confirmPasswordShown ? "text" : "password"} name="confirmPassword" ref={register('confirmPassword')} className="varun-control input-style" placeholder="Confirm Password..."/>
                 <span onClick={toggleConfirmPasswordVisiblity}>Show Password</span>
             </div>

             <div className="varun-group">
                 <label>Mobile number</label>
                 <input type="text" name="mobile" ref={register('mobile')} className="varun-control input-style" placeholder="Mobile Number..." />
             </div>

             <div className="varun-group">
                 <label>Institute Name</label>
                 <input type="text" name="institute" ref={register('institute')} className="varun-control input-style" placeholder="Institute..."/>
             </div>

             <div className="varun-group">
                 <label>Year</label>
                 <input type="number" name="year" ref={register('year')} className="varun-control input-style" placeholder="Year..."/>
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