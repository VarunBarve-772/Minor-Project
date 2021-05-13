import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    answerContent: yup.string().required("This Field is Required"),
})

const AnswerSubmit = (props) => {

    const [codeState, setCodeState] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitAnswer = (data) => {
        console.log(data);
        if(data.codeContent === "") {
            data.codeContent = 'None';
        }
        data.que_id = JSON.parse(sessionStorage.getItem('questionId'));
        console.log(data);
        fetch("http://127.0.0.1:8000/qna/AnswerSubmit", {
      
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
            alert(json.response);
            props.setContentReload(props.contentReload + 1);
        });
    }

    return (
        <form onSubmit={ handleSubmit(submitAnswer) }>
            <h3>Add your answer</h3>
            
            <p onClick={ () => codeState?setCodeState(false):setCodeState(true)}><b>[ ]</b></p>
            <button><b>B</b></button>
            <button><i>I</i></button>
            <br/>

            <textarea {...register('answerContent')} placeholder='Enter Your Answer'></textarea><br/>
            <span>{ errors.answerContent?.message }</span>

            {
                codeState
                ?
                <div>
                    <textarea name="codeContent" {...register('codeContent')} placeholder='Enter Your Code Here'></textarea><br/>
                </div>
                :
                <div>
                    <input type='hidden' name="codeContent" {...register('codeContent')} ></input><br/>
                </div>
            }
            
            <button type='submit'>Publish</button>
        </form>
    )
}

export default AnswerSubmit;