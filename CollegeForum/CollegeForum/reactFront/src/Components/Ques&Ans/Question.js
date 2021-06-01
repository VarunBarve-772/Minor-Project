import React,{ useState, useEffect } from 'react';
import AnswerSubmit from './AnswerSubmit';
import Answers from './Answers';
import "../../css/question_page.css";

const Question = () => {
    const [questionContent, setQuestionContent] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [contentReload, setContentReload] = useState(0);
    const [satisfactoryAnswer, setSatisfactoryAnswer] = useState(null);

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
            setSatisfactoryAnswer(json.satisfactory);
            console.log(json);
        });

    }, [contentReload]) 

    
    return (
        <div className="question_body">  
            <div className="question_head">
                <div className="question_content">
                    <p className="question_content_p"> { questionContent.question } </p>
                    {
                        questionContent.code === 'None' || questionContent.code === ''
                        ?
                        <span></span>
                        :
                        <code className="code_style"> { questionContent.code } </code>
                    }
                </div>
        
                <div className="question_details">
                    <div className="questioner">
                        <p>Asked by: <b> { questionContent.questioner } </b></p>
                        <p></p>
                    </div>
                    <div className="date_time">
                        <p>Asked on: </p>
                        <div className="date_time_b">
                            <b> { questionContent.date } </b>
                            <b> { questionContent.time } </b>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="answer_section">
                <Answers answerList={ answerList } satisfactoryAnswer={ satisfactoryAnswer } setContentReload={ setContentReload } contentReload={ contentReload } />
            </div>

            <hr className="answer_section_hr"/>
            <div className="answer_input_section">
                <AnswerSubmit setContentReload={ setContentReload } contentReload={ contentReload } />
            </div>
        </div>
    )
}

export default Question;