import React,{ useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
// import 'CollegeForum/CollegeForum/reactFront/src/css/registration.css'
import '../../css/registration.css';

const schema = yup.object().shape({
    firstName: yup.string().required("This Field is Required").min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid First Name"),
    lastName: yup.string().required("This Field is Required").min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid Last Name"),
    enrollment: yup.string().required("This Field is Required").min(12).max(20),
    email: yup.string().email("Please Enter a Valid Email"),
    password: yup.string().required("This Field is Required").min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Please Enter a Valid Password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    mobile: yup.string().required("This Field is Required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/, "Please Enter a Valid Mobile Number"),
    institute: yup.string().required("This Field is Required").max(100).matches(/^[a-zA-Z]+$/, "Please Enter a Valid Institute"),
    year: yup.number().required("This Field is Required").positive().integer().min(1).max(5),
})

function Form(props) {

    const history = useHistory();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    const [idCardErrorMessage, setIdCardErrorMessage] = useState(false);

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
            .then(json => console.log(json));

            props.setTempUserId(data['enrollment']);
            history.push('/OTP');
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

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    
    return (
        <div className="register_bg">
            <div className="left_banner">
                this is college forum
            </div>

            <form className="register_form" onSubmit={handleSubmit(submitForm)}>
                <h3>Register</h3>

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
                    <span className="show-password" onClick={togglePasswordVisiblity}>Show Password</span>
                    <span>  { errors.password?.message }</span>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type={confirmPasswordShown ? "text" : "password"} name="confirmPassword" {...register('confirmPassword')} className="form-control input-style" placeholder="Confirm Password..."/>
                    <span className="show-password" onClick={toggleConfirmPasswordVisiblity}>Show Password</span>
                    <span>  { errors.confirmPassword && "Passwords should match" }</span>
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
                    <span>{ errors.year && "This must be a number" }</span>
                </div>

                <div className="id-div">
                    <label className="id-label">Id Card photo</label>
                    <input type="file" name="idCard" {...register('idCard')}/>
                    <span>{ idCardErrorMessage }</span>
                </div>

                <center>
                    <button type="submit" className="btn btn-center register-btn">Register</button>
                </center>

                <p className="text-right">
                    Already registered? 
                    <Link to='/Login'> Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Form;
