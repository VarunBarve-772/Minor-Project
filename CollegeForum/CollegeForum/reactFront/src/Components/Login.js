import React,{ useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    enrollment: yup.string().required("This Field is Required"),
    password: yup.string().required("This Field is Required"),
})

 function Login() {
       
    let history = useHistory();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
        history.push("/Home");
    }

    return(

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
                <span onClick={togglePasswordVisiblity}>Show Password   </span>
                <span>{ errors.password?.message }</span>
            </div>

            {/* <Link className="btn btn-dark btn-lg btn-block" to="/Home">Login</Link> */}
            <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
            
            <p className="text-right">
                <Link to="/Signin">Create Account</Link>
                {/* <a href="">Create Account?</a> */}
            </p>
            </form>
    </div>

     );
 }

 export default Login;