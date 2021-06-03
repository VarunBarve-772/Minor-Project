import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Navbar from '../CommonFiles/Navbar';
import '../../css/Askques.css';

function Aques(props) {

    const [codeState, setCodeState] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    let history = useHistory();

    const questionSubmit = (data) => {
        console.log(data);
        if(data.codeContent === "") {
            data.codeContent = 'None';
        }
        fetch("http://127.0.0.1:8000/qna/AddQuestion", {
      
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
            if(json['response'] === 'Valid') {
                history.push('/Home')
            } else if (json['response'] === 'Wrong') {
                alert('Something Went Wrong, Please try again!!!')
            }
        });
    }

    return(
        <div>
            <Navbar setUserId={ props.setUserId }/>


            <div className="askcard">       
                <form className="form" onSubmit={ handleSubmit(questionSubmit) }>
                    <h2 className="add_ans_heading">Ask Your Question</h2><br/><br/><br/>
                    
                    <div className="ans_btns">
                        <p className="ans_btn" onClick={ () => codeState?setCodeState(false):setCodeState(true)}><b>{ "{ }" }</b></p>
                        <p className="ans_btn"><b>B</b></p>
                        <p className="ans_btn"><i>I</i></p>
                    </div>

                    <textarea {...register('queContent', { required: true })} placeholder='Enter Your Question' className="ask_ques_textarea"></textarea>
                    <span>{ errors.queContent?.type === 'required' && "Question Field is required" }</span>
                    <br/>

                    {
                        codeState
                        ?
                        <div>
                            <textarea name="codeContent" {...register('codeContent')} placeholder='Enter Your Code Here'></textarea><br/>
                        </div>
                        :
                        <div>
                            <input className="code_input" type='hidden' name="codeContent" {...register('codeContent')} ></input><br/>
                        </div>
                    }
                    
                    <div className="row">
                        <div className="col-lg-6">
                                <select name="category" {...register('category')} defaultValue="General">
                                    <option value="General">General</option>
                                    <option value="SVIIT">SVIIT</option>
                                    <option value="SVITS">SVITS</option>
                                    <option value="SVIM">SVIM</option>
                                    <option value="SVVV">SVVV</option>
                                    <option value="SVIFA">SVIFA</option>
                                </select>
                        </div>

                        <div className="col-lg-6">
                            <button type="submit" className="btn ask_btn">Publish question</button>
                        </div>

                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Aques;