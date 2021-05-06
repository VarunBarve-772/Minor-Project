import React from 'react';
function Update() {
    return(

<div class="card">
    <form>
        <h3>Update Your Profile</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control input-style" placeholder="Enter Username" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control input-style" placeholder="Enter Password" />
        </div>

        <div className="form-group">
            <label>New Password</label>
            <input type="password" className="form-control input-style" placeholder="Enter New Password" />
        </div>

        <div className="form-group">
            <label> New Mobile number</label>
            <input type="phone" className="form-control input-style" placeholder="Enter Mobile Number" />
        </div>

        <div className="form-group">
            <label>New Email</label>
            <input type="email" className="form-control input-style" placeholder="Enter Email" />
        </div>
        
        <button className="btn btn-dark btn-lg btn-block" to="/Home">Update Profile</button>
        
    </form>
</div>
);
}

export default Update;