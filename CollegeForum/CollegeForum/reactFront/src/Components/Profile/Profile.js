import React, { useState } from "react";
import ViewProfile from './ViewProfile';
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';

function Profile() {
    
    const [state, setState] = useState(<ViewProfile/>);

    return(

        <div className="profile-sec1">
            
            <div className="left-profile">
                <h4>My profile</h4>

                <div className="profile-a">
                    <p className="" onClick={() => setState(<ViewProfile/>)}>View Profile</p><br/>
                </div>

                <div className="profile-a">
                    <p className="" onClick={() => setState(<ChangePassword/>)}>Change Password</p><br/>
                </div>

                <div className="profile-a">
                    <p className="" onClick={() => setState(<UpdateProfile/>)}>Update Profile</p>
                </div>
            </div>

            { state }
                
        </div>
    );
}
export default Profile;