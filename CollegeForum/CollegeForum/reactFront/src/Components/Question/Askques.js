import React from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
// import poster from "./Images/ASKQ.png";
import ask1 from "../Images/ask1.png";
import '../../css/Askques.css';

function Aques() {

    const { register, handleSubmit } = useForm({});
    let history = useHistory();

    const questionSubmit = (data) => {
        console.log(data);
        fetch("http://127.0.0.1:8000/qna/AskQuestion", {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(data),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
  
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => {
            if(json['response'] === 'Question Added') {
                alert(json['response']);
                history.push('/Home')
            } else {
                alert('Something Went Wrong')
            }
        });
    }

    return(
        <div className="askcard">       
            <img className="img-ask" src={ask1} alt="Please type your question below."/>

            <form onSubmit={ handleSubmit(questionSubmit) }>
                <div className="form-group">
                    <textarea {...register('content')} name="content" className="form-control input-style" rows="6" maxLength="1000" required></textarea>
                </div>
            
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dropdown">
                            <select name="category" {...register('category')} defaultValue="General">
                                <option value="General">General</option>
                                <option value="SVIIT">SVIIT</option>
                                <option value="SVITS">SVITS</option>
                                <option value="SVIM">SVIM</option>
                                <option value="SVVV">SVVV</option>
                                <option value="SVIFA">SVIFA</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <button type="submit" className="btn ask_btn">Publish question</button>
                    </div>

                    
                </div>
            </form>
        </div>
    );
}

export default Aques;