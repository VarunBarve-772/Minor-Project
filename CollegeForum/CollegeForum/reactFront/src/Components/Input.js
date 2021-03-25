import React from 'react';
function Input() {
return(
  <div>
   <div class="card">
<form>
                <h3>Register Here!!</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control input-style" placeholder="Enter full name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control input-style" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control input-style" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="phone" className="form-control input-style" placeholder="Enter mobile number" />
                </div>
                <div className="form-group">
                    <label>Branch/Institute</label>
                    <input type="text" className="form-control input-style" placeholder="Enter branch/institute" />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="number" className="form-control input-style" placeholder="Enter year" />
                </div>
                <div className="id-div">
                    <label className="id-label">Id Card photo</label>
                    <input type="file" accept="image/*"></input>

                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
      
</div>
  </div>
 
  



);
}
export default Input;
