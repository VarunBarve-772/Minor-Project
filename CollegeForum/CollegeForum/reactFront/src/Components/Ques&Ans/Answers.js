import React from 'react';

const Answers = (props) => {
    let answerContent = props.answerList;

    const submitSatisfactoryAnswer = (answer_id) => {
        const data = {
            ans_id: answer_id,
            que_id: JSON.parse(sessionStorage.getItem('questionId'))
        }
        fetch("http://127.0.0.1:8000/qna/SubmitSatisfactoryAnswer", {
      
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

    if ( answerContent.length === 0 ) {
        answerContent = <h2>No Answers</h2>
    } else {
        answerContent = answerContent.map(answer => {
            return (
                <div className="answers" key={ answer.answer_id }>
                    <div className="answer_header">
                            <b> { answer.name } </b>
                            <div className="ans_date_time">
                                <p>{ answer.date }</p>
                                <p>{ answer.time }</p>
                            </div>
                    </div>
                    <div className="answer_body">
                        <p> { answer.answer } </p>
                        {
                        answer.code === 'None' || answer.code === ''
                        ?
                        <span></span>
                        :
                        <code> { answer.code } </code>
                    }
                    <button onClick={() => { submitSatisfactoryAnswer(answer.answer_id) } }>
                        {
                            Number(props.satisfactoryAnswer) === Number(answer.answer_id)
                            ?
                            "Marked Satisfactory"
                            :
                            "Mark as Satisfactory"
                        }
                    </button>
                    </div>
                    <hr className="inbetween_hr"/>
                </div>
            )
        });     
    }

    return (
        <div>
            { answerContent }
        </div>
    )
}

export default Answers;