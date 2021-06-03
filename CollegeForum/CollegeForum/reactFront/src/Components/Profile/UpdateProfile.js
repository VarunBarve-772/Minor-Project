import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import "../../css/Profile/ChangePassword.css"

const schema = yup.object().shape({
    email: yup.string().required("This Field is Required").email("Please Enter a Valid Email"),
    mobile: yup.string().required("This Field is Required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/, "Please Enter a Valid Mobile Number"),
    year: yup.string().required("This Field is Required"),
})

function UpdateProfile() {

    const [userProfileData, setUserProfileData] = useState({})

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect( () => {
        fetch(`http://127.0.0.1:8000/authentication/updateProfile`)

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => {
            if (json.response === 'Valid') {
                setUserProfileData(json);
            } else if (json.response === 'Wrong') {
                alert('Something Went Wrong, Please Try Again!!!');
            }
        })
    }, [])
    
    const submitProfile = (data, e) => {
        fetch("http://127.0.0.1:8000/authentication/updateProfile", {
      
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
            if (json.response === 'Valid') {
                // sessionStorage.setItem('userProfileData', JSON.stringify(json));
                setUserProfileData(JSON.stringify(json));
                e.target.reset();
                alert('Profile Updated');    
            } else if (json.response === 'Wrong') {
                alert('Something Went Wrong, Please Try Again!!!');
            }
        });
    }

    return(
        <div className="right-profile">
            <form onSubmit={handleSubmit(submitProfile)}>
                <h4 className="profile_heading">Update Profile</h4>

                <hr/>

                <div className="form-group">
                    <label className="profile-component">Email</label>
                    <input type="text" {...register('email')} name="email" className="form-control input-style" placeholder={userProfileData.email} />
                    <span>{ errors.email?.message }</span>
                </div>

                <div className="form-group">
                    <label className="profile-component">Mobile number</label>
                    <input type="tel" {...register('mobile')} name="mobile" className="form-control input-style" placeholder={userProfileData.mobile} />
                    <span>{ errors.mobile?.message }</span>
                </div>

                <div className="form-group">
                    <label className="profile-component">Year</label>
                    <input type="number" {...register('year')} name="year" className="form-control input-style" min='1' max='6' step='1' placeholder={userProfileData.year} />
                    <span>{ errors.year?.message }</span>
                </div>

                <button type="submit" className="btn btn-primary save_btn" >Save</button>
                                        
            </form>
        </div>
    );
}

export default UpdateProfile;
