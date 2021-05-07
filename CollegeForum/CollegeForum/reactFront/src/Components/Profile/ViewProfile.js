import React, { useState, useEffect } from "react";

const ViewProfile = () => {

    const [userProfile, setUserProfile] = useState({});

    useEffect( () => {
        fetch(`http://127.0.0.1:8000/authentication/viewProfile`)

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => {
            console.log(json);
            setUserProfile(json);
        })
    }, [])

    return (
        <div>
            <p> 
                <span> First Name: </span>
                <span> { userProfile.firstName } </span>
            </p>
            <p> 
                <span> Last Name: </span>
                <span> { userProfile.lastName } </span>
            </p>
            <p> 
                <span> Email: </span>
                <span> { userProfile.email } </span>
            </p>
            <p> 
                <span> Enrollment: </span>
                <span> { userProfile.enrollment } </span>
            </p>
            <p> 
                <span> Mobile: </span>
                <span> { userProfile.mobile } </span>
            </p>
            <p> 
                <span> Institute: </span>
                <span> { userProfile.institute } </span>
            </p>
            <p> 
                <span> Year: </span>
                <span> { userProfile.year } </span>
            </p>
        </div>
    )
}

export default ViewProfile;