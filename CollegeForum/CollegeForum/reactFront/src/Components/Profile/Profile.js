import React, { useState } from "react";
import ViewProfile from './ViewProfile';
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';
import ShowQuestions from '../CommonFiles/ShowQuestions';
import '../../css/Profile/Profile.css'

const Profile = (props) => {
    
    const [state, setState] = useState(<ViewProfile/>);
    const questionState = <ShowQuestions questionCategory={ '' } fetchUrl={ 'MyQuestions' } />

    return(

        <div className="wrapper">

            <div className="nav_bar">
                <h4 className="heading">My profile</h4>

                <div className="right_nav">

                    <div className="profile-a">
                        <p className="nav_ele" onClick={() => setState(<ViewProfile/>)}>View Profile</p><br/>
                    </div>

                    <div className="profile-a">
                        <p className="nav_ele" onClick={() => setState(<ChangePassword/>)}>Change Password</p><br/>
                    </div>

                    <div className="profile-a">
                        <p className="nav_ele" onClick={() => setState(<UpdateProfile/>)}>Update Profile</p>
                    </div>
    
                    <div className="profile-a">
                        <p className="nav_ele" onClick={() => setState(questionState)}>My Questions</p>
                    </div>

                </div>

            </div>

            <div className="state">
                { state }
            </div>
                
        </div>
    );
}
export default Profile;