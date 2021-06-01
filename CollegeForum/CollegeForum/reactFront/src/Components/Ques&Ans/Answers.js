import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../css/Modal.css';

const Answers = (props) => {

    const [modalisOpen, setModalIsOpen] = useState(false);
    const [tempAnswerId, setTempAnswerId] = useState('');
    const [reportCategoryValue, setReportCategoryValue] = useState('');

    const customStyles = {
        content : {
          top                   : '40%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          height                : '400px',
          width                 : '600px',
        }
    };

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

    const onModelClick = (answerId) => {
        setTempAnswerId(answerId);
        setModalIsOpen(true);
    }

    const reportSubmit = () => {
        const report = {
            'category': reportCategoryValue,
            "id": tempAnswerId,
            "type": "A"
        }

        fetch("http://127.0.0.1:8000/qna/ReportContent", {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(report),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
  
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => {
            console.log(json);
        });
        setModalIsOpen(false);
    }

    const setReportCategory = (event) => {
        setReportCategoryValue(event.target.value);
    }

    if ( answerContent.length === 0 ) {
        answerContent = <h2>No Answers</h2>
    } else {
        answerContent = answerContent.map(answer => {
            return (
                <div className="answers" key={ answer.answer_id }>
                    <div className="ans_left">
                        <button className="sat_ans_btn" onClick={() => { submitSatisfactoryAnswer(answer.answer_id) } }>
                            {
                                Number(props.satisfactoryAnswer) === Number(answer.answer_id)
                                ?
                                <span>
                                    <i class="fa fa-check fa-2x"></i>
                                </span>
                                :
                                <span>
                                    <i class="fa fa-star fa-2x"></i>
                                </span>
                            }
                        </button>
                    </div>

                    <div className="ans_right">
                        <div className="answer_header">
                            <b> { answer.name } </b>
                            <div className="answer_header_right">
                                <div className="ans_date_time">
                                    <p>{ answer.date }</p>
                                    <p>{ answer.time }</p>
                                </div><br/>
                                <div className="report_btn_div">
                                    <button onClick={() => onModelClick(answer.answer_id)} className="btn btn-danger report_btn">
                                    <span className="report_icon">❕</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="answer_body">
                            <p> { answer.answer } </p>
                            {
                            answer.code === 'None' || answer.code === ''
                            ?
                            <span></span>
                            :
                            <code className="code_style"> { answer.code } </code>
                            }
                        </div>
                                                
                    </div>
                </div>
                
            )
        });     
    }

    return (
        <div>
            { answerContent }
            
            <Modal style={customStyles} isOpen={modalisOpen}>
            
                <div className="row">
                    
                    <div  className="col-lg-8">
                        <h2 className="modal-heading">Report content under</h2>
                    </div>
                    
                    <div  className="col-lg-4 cross-btn">   
                        <button className="close_btn" onClick={() => setModalIsOpen(false)}>✖</button>
                    </div>

                    <br/><br/>
                    
                </div>

                <div onChange={ setReportCategory }>
                    
                <input type="radio" value="Abusive Content" name="category" /> Abusive Content
                <br/>
                <input type="radio" value="Hate Speech" name="category" /> Hate Speech
                <br/>
                <input type="radio" value="Violence" name="category" /> Violence
                <br/>
                <input type="radio" value="Illegal Activities" name="category" /> Illegal Activities
                <br/>
                <input type="radio" value="Inappropriate info" name="category" /> Inappropriate info
                <br/>
                <input type="radio" value="Terrorist content" name="category" /> Terrorist content
                <br/>
                <input type="radio" value="Other" name="category" /> Other
                <br/>

                </div>

                <div>
                    <button type="button" onClick={ reportSubmit } class="btn btn-danger report_post_btn">Report</button>
                </div>

            </Modal>
        </div>
    )
}

export default Answers;