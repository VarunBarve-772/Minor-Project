import React from "react";
import ForgetOTP from './ForgetOTP';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import Particles from 'react-particles-js';
import * as yup from 'yup';
import '../../css/Forgotpassword.css';

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

    const particlesOptions = {
        particles: {
            number: {
                value: 40,
                desity: {
                    enable: true,
                    value_area: 900
                }
            },
            
            color: {
                value: "#17242A"
            },

            size: {
                value: 4
            },

            events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
            }
        }
    }

    return(
        <div>
            <Particles className="change_pass_particles_bg" params={particlesOptions} />
            <div className="change_pass_bg"></div>
            <div className="main_wrapper">
                <div className="enrol_bg">
                    <div className="forget_card">
                        <div className="form-group">
                            <h3 className="enroll_heading">Enter Your Enrollment</h3>

                            <form onSubmit={handleSubmit(submitForm)}>
                                <div className="form-group">
                                    <input type="text" name="enrollment" {...register('enrollment')} className="form-control enrol_input_style" placeholder="Enter Enrollment..." />
                                    <span>{ errors.enrollment?.message }</span>
                                </div>
                                <center>
                                    <button type="submit" className="btn btn-primary btn-lg get_otp_btn">Get OTP</button>
                                </center>
                            </form>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Username;