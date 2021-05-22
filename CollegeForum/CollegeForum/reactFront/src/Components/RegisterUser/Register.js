import React from 'react';
import Form from './RegistrationForm';
// import 'src/css/registration.css';
import '../../css/registration.css'
// import 'CollegeForum/CollegeForum/reactFront/src/css/registration.css'

function Register(props) {
    return(
    // <div className="container">
        <div className="card">
            <Form setTempUserId={props.setTempUserId} />
        </div>
    // </div>
    )
}
export default Register;
