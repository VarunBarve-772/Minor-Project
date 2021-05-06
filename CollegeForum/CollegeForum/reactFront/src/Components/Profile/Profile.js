import React, { useState, useEffect } from "react";
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';

function Profile() {
    
    const [state, setState] = useState(true);

    // getting user profile data from backend
    // const getProfile = 
    useEffect( () => {

        fetch(`http://127.0.0.1:8000/authentication/updateProfile`)

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => {
            sessionStorage.setItem('userProfileData', JSON.stringify(json));  
        })
    }, [])
    // getProfile();
      
    return(

        <div className="profile-sec1">
            
            <div className="left-profile">
                <h4>My profile</h4>

                <div className="profile-a">
                    <p className="" onClick={() => setState(true)}>Change Password</p><br/>
                </div>

                <div className="profile-a">
                    <p className="" onClick={() => setState(false)}>Edit Profile</p>
                </div>
            </div>

            {state
                ? 
                <ChangePassword/>
                : 
                <UpdateProfile/>
            }
                
        </div>
    );
}
export default Profile;