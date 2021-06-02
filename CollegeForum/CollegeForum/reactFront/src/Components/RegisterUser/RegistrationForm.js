import React,{ useState } from 'react';
import {Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import '../../css/registration.css';
import otp_send from '../../Images/otp_send.gif';
import Particles from 'react-particles-js';
import RegisterOTP from './RegisterOTP';


const schema = yup.object().shape({
    firstName: yup.string().required("This Field is Required").min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid First Name"),
    lastName: yup.string().required("This Field is Required").min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid Last Name"),
    enrollment: yup.string().required("This Field is Required").min(12).max(20),
    email: yup.string().required("This Field is Required").email("Please Enter a Valid Email"),
    password: yup.string().required("This Field is Required").min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Please Enter a Valid Password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    mobile: yup.string().required("This Field is Required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/, "Please Enter a Valid Mobile Number"),
    institute: yup.string().required("This Field is Required").max(100).matches(/^[a-zA-Z]+$/, "Please Enter a Valid Institute"),
    year: yup.number().required("This Field is Required").positive().integer().min(1).max(5),
})

function Form(props) {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    const [idCardErrorMessage, setIdCardErrorMessage] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    let userAuthentication = '';
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const checkFileFormat = function(fileList) {
        let file = fileList[0];
        if(file) {
            if(file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "application/pdf") {
                setIdCardErrorMessage(' ')
                return true;
            } else {
                setIdCardErrorMessage('Please Select Valid File Type Only!')
                return false;
            }
        } else {
            setIdCardErrorMessage('Please Select a File')
            return false;
        }
        
    }

    const submitForm = async (data) => {
        if(checkFileFormat(data.idCard)) {
            let file = data.idCard[0];
            const base64File = await convertBase64(file);

            data.idCard = base64File;

            fetch("http://127.0.0.1:8000/authentication/registerUser", {
      
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
                console.log(json)
                userAuthentication = json['response'];
            });
            document.getElementById('otp_gif').style.display = 'block';
            setTimeout(() => {
                if (userAuthentication === "Valid"){
                    props.setState(<RegisterOTP setState={props.setState}/>)
                } else{
                    setUsernameError("This Enrollment is not Correct, Please insert correct Enrollment!!!")
                    document.getElementById('otp_gif').style.display = 'none';
                }
            }, 4000);
        }
        
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

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
    
    return (
    <div>
        <Particles className="particles_bg" params={particlesOptions} />
        <div className="register_bg"></div>
        <form className="register_form" onSubmit={handleSubmit(submitForm)}>
            <h3 className="register_heading">Register</h3>

            <div className="row">
                <div className="form-group col">
                    <label>First Name</label>
                    <input type="text" name="firstName" {...register('firstName')} className="form-control register_input_style" placeholder="First Name..."/>
                    <span>{ errors.firstName?.message }</span>
                </div>

                <div className="form-group col">
                    <label>Last Name</label>
                    <input type="text" name="lastName" {...register('lastName')} className="form-control register_input_style" placeholder="last Name..."/>
                    <span>{ errors.lastName?.message }</span>
                </div>
            </div>

            <div className="row">
                <div className="form-group col">
                    <label>Enrollment Number</label>
                    <input type="text" name="enrollment" {...register('enrollment')} className="form-control register_input_style" placeholder="Enrollment Number..."/>
                    <span>{ errors.enrollment?.message }</span>
                </div>

                <div className="form-group col">
                    <label>Email</label>
                    <input type="text" name="email" {...register('email')} className="form-control register_input_style" placeholder="Email..."/>
                    <span>{ errors.email?.message }</span>
                </div>
            </div>

            <div className="row">
                <div className="form-group col">
                    <label>Password</label>
                    <input type={passwordShown ? "text" : "password"} name="password" {...register('password')} className="form-control register_input_style" placeholder="Password..."/>
                    <span className="show-password" onClick={togglePasswordVisiblity}>Show Password</span>
                    <span>  { errors.password?.message }</span>
                </div>

                <div className="form-group col">
                    <label>Confirm Password</label>
                    <input type={confirmPasswordShown ? "text" : "password"} name="confirmPassword" {...register('confirmPassword')} className="form-control register_input_style" placeholder="Confirm Password..."/>
                    <span className="show-password" onClick={toggleConfirmPasswordVisiblity}>Show Password</span>
                    <span>  { errors.confirmPassword && "Passwords should match" }</span>
                </div>
            </div>

            <div className="row">
                <div className="form-group col">
                    <label>Mobile number</label>
                    <input type="text" name="mobile" {...register('mobile')} className="form-control register_input_style" placeholder="Mobile Number..." />
                    <span>{ errors.mobile?.message }</span>
                </div>

                <div className="form-group col">
                    <label>Institute Name</label>
                    <input type="text" name="institute" {...register('institute')} className="form-control register_input_style" placeholder="Institute..."/>
                    <span>{ errors.institute?.message }</span>
                </div>
            </div>

            <div className="row">
                <div className="form-group col">
                    <label>Year</label>
                    <input type="text" name="year" {...register('year')} className="form-control register_input_style" placeholder="Year..."/>
                    <span>{ errors.year && "This must be a number" }</span>
                </div>

                <div className="id-div col">
                    <label className="id-label">Id Card photo</label><br/><br/>
                    <input type="file" name="idCard" {...register('idCard')}/>
                    <span>{ idCardErrorMessage }</span>
                </div>
            </div>

            <span> { usernameError } </span>

            <center>
                <button type="submit" className="btn btn-center register-btn">Get OTP</button>
            </center>

            <p className="text-right">
                Already registered? 
                <Link to='/Login'> Login</Link>
            </p>
        </form>

        <div className="gif_container" id="otp_gif">
            <img src={otp_send} alt="loading" className="gif_style"/>
        </div>
    </div>
    )
}

export default Form;
