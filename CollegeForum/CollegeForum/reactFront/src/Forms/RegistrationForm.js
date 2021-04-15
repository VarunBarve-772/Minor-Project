import React,{ useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid First Name").required("This Field is Required"),
    lastName: yup.string().min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid LAst Name").required("This Field is Required"),
    enrollment: yup.string().min(12).max(20).required("This Field is Required"),
    email: yup.string().email("Please Enter a Valid Email").required("This Field is Required"),
    password: yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required("This Field is Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    mobile: yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/, "Please Enter a Valid Mobile Number").required("This Field is Required"),
    institute: yup.string().max(100).matches(/^[a-zA-Z]+$/, "Please Enter a Valid Institute").required("This Field is Required"),
    year: yup.number().positive().integer().min(1).max(5).required("This Field is Required"),
})

function Form() {

    let history = useHistory();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
        history.push("/OTP");
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <h3>Register Here!!</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" {...register('firstName')} className="form-control input-style" placeholder="First Name..."/>
                <span>{ errors.firstName?.message }</span>
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" {...register('lastName')} className="form-control input-style" placeholder="last Name..."/>
                <span>{ errors.lastName?.message }</span>
            </div>

            <div className="form-group">
                <label>Enrollment Number</label>
                <input type="text" name="enrollment" {...register('enrollment')} className="form-control input-style" placeholder="Enrollment Number..."/>
                <span>{ errors.enrollment?.message }</span>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" {...register('email')} className="form-control input-style" placeholder="Email..."/>
                <span>{ errors.email?.message }</span>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type={passwordShown ? "text" : "password"} name="password" {...register('password')} className="form-control input-style" placeholder="Password..."/>
                <span onClick={togglePasswordVisiblity}>Show Password</span>
                <span>{ errors.password?.message }</span>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type={confirmPasswordShown ? "text" : "password"} name="confirmPassword" {...register('confirmPassword')} className="form-control input-style" placeholder="Confirm Password..."/>
                <span onClick={toggleConfirmPasswordVisiblity}>Show Password</span>
                <span>{ errors.confirmPassword && "Passwords Should Match" }</span>
            </div>

            <div className="form-group">
                <label>Mobile number</label>
                <input type="text" name="mobile" {...register('mobile')} className="form-control input-style" placeholder="Mobile Number..." />
                <span>{ errors.mobile?.message }</span>
            </div>

            <div className="form-group">
                <label>Institute Name</label>
                <input type="text" name="institute" {...register('institute')} className="form-control input-style" placeholder="Institute..."/>
                <span>{ errors.institute?.message }</span>
            </div>

            <div className="form-group">
                <label>Year</label>
                <input type="text" name="year" {...register('year')} className="form-control input-style" placeholder="Year..."/>
                <span>{ errors.year?.message }</span>
            </div>

            <div className="id-div">
                <label className="id-label">Id Card photo</label>
                <input type="file" name="idCard" className="id" accept="image/*"/>
            </div>

            {/* <Link to="/OTP" type="submit" className="btn btn-dark btn-lg btn-block">Get OTP</Link>  */}
            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>


            <p className="text-right">
                Already registered? 
                <Link to='/Login'>Login</Link>
            </p>
        </form>
    )
}

export default Form;