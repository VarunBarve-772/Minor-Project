import React from "react";
import ForgetOTP from './ForgetOTP';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
// import '../../css/Forgotpassword.css';

const schema = yup.object().shape({
    enrollment: yup.string().required("This Field is Required"),
})

const Username = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
        fetch(`http://127.0.0.1:8000/authentication/forgetPasswordUsername?userId=${data.enrollment}`)
        props.setState(<ForgetOTP setState={props.setState}/>)
    }

    return(
        <div className="card">
            <div className="form-group ">
                <h2>Enter Your Enrollment</h2>

                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="form-group">
                        <input type="text" name="enrollment" {...register('enrollment')} className="form-control input-style" placeholder="Enter Enrollment..." />
                        <span>{ errors.enrollment?.message }</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg ">Get OTP</button>
                </form>            
            </div>

        </div>
    );
}
export default Username;