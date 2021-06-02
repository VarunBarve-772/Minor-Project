import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './RegistrationForm';
import '../../css/registration.css'

function Register(props) {

    const [state, setState] = useState('');
    let history = useHistory();

    useEffect( () => {
        setState(<Form setState={ setState } setUserId={ props.setUserId } />)
    }, [])

    const checkUser = () => {
        if (sessionStorage.getItem('userId')) {
            history.push('/Home');
        }
    }
    checkUser();

    return(
        <div className="card">
            { state }
        </div>
    )
}
export default Register;
