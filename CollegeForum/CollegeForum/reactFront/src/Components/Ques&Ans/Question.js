import React,{ useState, useEffect } from 'react';
import AnswerSubmit from './AnswerSubmit';

const Question = () => {
    const [questionContent, setQuestionContent] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [contentReload, setContentReload] = useState(0);
    let answerContent = answerList;

    useEffect(() => {
        let questionId = {
            "id": JSON.parse(sessionStorage.getItem('questionId'))
        } 
        fetch(`http://127.0.0.1:8000/qna/QuesPage`, {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(questionId),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => {            
            setQuestionContent(json);
            setAnswerList(json['answers']);
        });

    }, [contentReload]) 

    if ( answerContent.length === 0 ) {
        answerContent = <h2>No Answers</h2>
    } else {
        answerContent = answerContent.map(answer => {
            return (
                <div className="answers" key={ answer.answer_id }>
                    <div className="answer_header">
                        <p>
                            <b> { answer.name } </b>  
                            <b> { answer.date } </b>
                            <b> { answer.time } </b>
                        </p>
                    </div>
                    <div className="answer_body">
                        <p> { answer.answer } </p>
                    </div>
                </div>
            )
        });     
    }

    return (
        <div>
            <div className="question_head">
                <div className="question_content">
                    <h2> { questionContent.question } </h2>
                </div>
        
                <div className="question_details">
                    <div className="questioner">
                        <p>Asked by: <b> { questionContent.questioner } </b></p>
                        <p></p>
                    </div>
                    <div className="date_time">
                        <p>Asked on: 
                            <b> { questionContent.date } </b>
                            <b> { questionContent.time } </b>
                        </p>
                    </div>
                    <hr/>
                </div>
            </div>

            <div className="answer_section">
                { answerContent }
            </div>

            <hr/>
            <div className="answer_input_section">
                <AnswerSubmit setContentReload={ setContentReload } contentReload={ contentReload } />
            </div>
        </div>
    )
}

export default Question;