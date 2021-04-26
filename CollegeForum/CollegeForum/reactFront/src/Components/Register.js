import React from 'react';
import Form from '../Forms/RegistrationForm';
import '../css/registration.css';

function Register(props) {
    return(
    <div className="container">
        <div className="card">
            <Form setTempUserId={props.setTempUserId} />
        </div>
    </div>
    )
}
export default Register;
