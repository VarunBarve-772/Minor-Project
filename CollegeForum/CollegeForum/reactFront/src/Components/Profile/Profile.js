import React, { useState } from "react";
import ViewProfile from './ViewProfile';
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';
import ShowQuestions from '../CommonFiles/ShowQuestions';

function Profile() {
    
    const [state, setState] = useState(<ViewProfile/>);
    const questionState = <ShowQuestions questionCategory={ '' } fetchUrl={ 'MyQuestions' } />

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
 
                <div className="profile-a">
                    <p className="" onClick={() => setState(questionState)}>My Questions</p>
                </div>
            </div>

            { state }
                
        </div>
    );
}
export default Profile;