import React, { useState, useEffect } from "react";
import "../../css/Profile/ViewProfile.css";

const ViewProfile = () => {

    const [userProfile, setUserProfile] = useState({});

    useEffect( () => {
        fetch("http://127.0.0.1:8000/authentication/viewProfile", {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(''),
            
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
                setUserProfile(json);
            } else if (json.response === 'Wrong') {
                alert('Something Went Wrong, Please Try Again!!!');
            }
        })
    }, [])

    return (
        <div>

            <h4 className="profile_heading">View Profile</h4>

            <hr/>

            <p className="profile_row"> 
                <span className="label"> First Name </span>
                <span className="profile_info_one"> { userProfile.firstName } </span>
            </p>
            <p className="profile_row"> 
                <span className="label"> Last Name </span>
                <span className="profile_info_two"> { userProfile.lastName } </span>
            </p>
            <p className="profile_row"> 
                <span className="label"> Email </span>
                <span className="profile_info_three"> { userProfile.email } </span>
            </p>
            <p className="profile_row"> 
                <span className="label"> Enrollment </span>
                <span className="profile_info_four"> { userProfile.enrollment } </span>
            </p>
            <p className="profile_row"> 
                <span className="label"> Mobile </span>
                <span className="profile_info_five"> { userProfile.mobile } </span>
            </p>
            <p className="profile_row"> 
                <span className="label"> Institute </span>
                <span className="profile_info_six"> { userProfile.institute } </span>
            </p>
            <p className="profile_row"> 
                <span className="label"> Year </span>
                <span className="profile_info_seven"> { userProfile.year } </span>
            </p>
        </div>
    )
}

export default ViewProfile;