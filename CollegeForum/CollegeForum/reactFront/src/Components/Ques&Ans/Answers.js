import React ,{useState} from 'react';
import Modal from 'react-modal';
import '../../css/Modal.css';
// var Modal = require('react-bootstrap-modal');

const Answers = (props) => {

    const [modalisOpen, setModalIsOpen] = useState(false);
    const customStyles = {
        content : {
          top                   : '40%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          height                :'300px',
          width                 :'600px',
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
                            <code className="code_style"> { answer.code } </code>
                            }
                        </div>
                                                
                    <button onClick={()=>setModalIsOpen(true)} class="btn btn-danger">Report</button>

                    </div>
                    {/* <hr className="inbetween_hr"/> */}
                </div>
                
            )
        });     
    }

    return (
        <div>
            { answerContent }
            
        <Modal  style={customStyles} isOpen={modalisOpen} >
        
        <div className="row">
        <div  className="col-lg-8"><h1 className="modal-heading">Report content under</h1></div>
        <div  className="col-lg-4 cross-btn">   <button onClick={() => setModalIsOpen(false)}>❌</button></div>
        </div>
                    <div className="">
                            <select name="category" defaultValue="General">
                                <option value="Abusive">Abusive Content</option>
                                <option value="Hate">Hate Speech</option>
                                <option value="Violence">Violence</option>
                                <option value="Illegal">Illegal Activities</option>
                                <option value="Inappropriate">Inappropriate info</option>
                                <option value="Terrorist">Terrorist content</option>
                            </select>
                    </div>
                    <div className="">
                    <button type="button" onClick={() => setModalIsOpen(false)} class="btn btn-danger btn-lg">Report</button>
                    </div>
                  
      </Modal>
        </div>
    )
}

export default Answers;