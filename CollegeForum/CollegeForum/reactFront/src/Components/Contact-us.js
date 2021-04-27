import React from 'react';
import '../css/Contactus.css';

function Contact() {
    return(
        <div className="card container">
            <h3>Contact-us</h3>

            <form className="center">
                <div className="form-group">
                    <label>Your name</label> 
                        <input type="text" name="Name" className="form-control input-style" required/>
                </div>

                <div className="form-group">
                    <label>Your email address</label>
                        <input type="email" id="Email" name="Email" className="form-control input-style" required/>
                </div>

                <div className="form-group">
                    <label>Your message</label>
                        <textarea  className="form-control input-style" rows="6" maxLength="3000" required></textarea>
                </div>

                <center>
                    <button type="submit" id="fcf-button" className="send_btn btn-center">Send Message</button>
                </center>
            </form>
        </div>
    );

}
export default Contact;
