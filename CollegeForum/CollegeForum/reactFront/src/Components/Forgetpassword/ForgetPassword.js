import React, { useState, useEffect } from "react";
import Username from './Username';

function ForgetPassword() {

    const [state, setState] = useState('');

    useEffect( () => {
        setState(<Username setState={ setState }/>)
    }, [])
    
return(
    <div>
      { state } 
    </div>       
  );
}
export default ForgetPassword;