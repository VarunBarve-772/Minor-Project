import React from 'react';
import '../css/Contactus.css';

function Contact() {
    return(
        <div className="contact_body">
        <div className="card container contact_wrap">
            <h3>Contact-us</h3>

            <form className="center contact_form">
                <div className="form-group">
                    <label>Your name</label> 
                        <input type="text" name="Name" className="form-control contact_input_style" required/>
                </div>

                <div className="form-group">
                    <label>Your email address</label>
                        <input type="email" id="Email" name="Email" className="form-control contact_input_style" required/>
                </div>

                <div className="form-group">
                    <label>Your message</label>
                        <textarea  className="form-control contact_input_style msg_input" rows="6" maxLength="3000" required></textarea>
                </div>

                <center className="btn_container">
                    <button type="submit" id="fcf-button" className="send_btn btn-center">Send Message</button>
                </center>
            </form>
        </div>
    </div>    
    );

}
export default Contact;
