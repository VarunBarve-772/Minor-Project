import React,{ useState, useEffect } from 'react';

const ShowQuestions = (props) => {

    const [questions, setQuestions] = useState([]);
    let questionsList = questions;

    useEffect(() =>{
        
        fetch(`http://127.0.0.1:8000/qna/${props.fetchUrl}`, {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(props.questionCategory),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => {            
            setQuestions(json.questions);
        });

    }, [props.questionCategory]) 

    questionsList = questionsList.map(question => {
        // questionsList.push(
            return (
                <div key={question.id} className="sec-3_div">
                    <p> 
                        <span> { question.time } </span>                         
                        <span> { question.date } </span>                         
                    </p>
                    <h6> { question.question } </h6>
                    <h6> { question.name } </h6>
                </div>
            )
        // )            
    });

    return (
        <div className="sec-3">
            <div className="sec-3-div">
                <div>
                    { questionsList }
                </div>
            </div>
        </div>
    )
}

export default ShowQuestions;