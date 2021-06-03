import React,{ useState, useEffect } from 'react';
import AnswerSubmit from './AnswerSubmit';
import Answers from './Answers';
import Navbar from '../CommonFiles/Navbar';
import Modal from 'react-modal';
import '../../css/Modal.css';
import "../../css/question_page.css";

const Question = (props) => {
    const [questionContent, setQuestionContent] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [contentReload, setContentReload] = useState(0);
    const [satisfactoryAnswer, setSatisfactoryAnswer] = useState(null);
    const [tempQuestionId, setTempQuestionId] = useState('');
    const [reportCategoryValue, setReportCategoryValue] = useState('');
    const [modalisOpen, setModalIsOpen] = useState(false);

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
            if (json.response === "Valid") {
                setQuestionContent(json);
                setAnswerList(json['answers']);
                setSatisfactoryAnswer(json.satisfactory);
            } else if (json.response === "Wrong") {
                alert("Something Went Wrong, Please try again Later!!!");
            }
        });

    }, [contentReload]) 

    const onModelClick = (answerId) => {
        setTempQuestionId(answerId);
        setModalIsOpen(true);
    }

    const reportSubmit = () => {
        const report = {
            'category': reportCategoryValue,
            "id": tempQuestionId,
            "type": "Q"
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
            if (json.response === 'Valid') {
                alert('Question Reported!!!');
            } else if (json.response === 'Wrong') {
                alert('Something Went Wrong, Please try again!!!');
            }
        });
        setModalIsOpen(false);
    }

    const setReportCategory = (event) => {
        setReportCategoryValue(event.target.value);
    }
    
    return (
        <div>
            <Navbar setUserId={ props.setUserId }/>

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
                        <div className="question_detail_left">
                            <div className="questioner">
                                <p>Asked by: <b> { questionContent.questioner } </b></p>
                            </div>
                            <div className="date_time">
                                <p>Asked on: &nbsp;
                                    <b> 
                                        { questionContent.date }<span>  </span>
                                        { questionContent.time } 
                                    </b>
                                </p>
                            </div>
                        </div>

                        <div className="question_detail_right">
                            <div className="report_btn_div">
                                    <button onClick={() => onModelClick(JSON.parse(sessionStorage.getItem('questionId')))} className="btn btn-danger report_btn">
                                    <span className="report_icon">❕</span>
                                    </button>
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
                        <button type="button" onClick={ reportSubmit } className="btn btn-danger report_post_btn">Report</button>
                    </div>

                </Modal>
            </div>
        </div>
    )
}

export default Question;