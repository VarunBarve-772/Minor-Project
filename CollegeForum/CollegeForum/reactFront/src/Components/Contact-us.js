import React from 'react';
function Contact() {
    return(
        <div>
        <div className="card">

 
    <h3>Contact-us</h3>

    <form>
        
        <div class="form-group">
            <label>Your name</label> 
                <input type="text" name="Name" className="form-control input-style" required/>
        </div>

        <div class="form-group">
            <label>Your email address</label>
                <input type="email" id="Email" name="Email" className="form-control input-style" required/>
        </div>

        <div class="form-group">
            <label>Your message</label>
                <textarea  className="form-control input-style" rows="6" maxlength="3000" required></textarea>
        </div>

        
            <button type="submit" id="fcf-button" class="btn btn-primary btn-lg btn-block">Send Message</button>

    </form>
    </div>

</div>

    );

}
export default Contact;