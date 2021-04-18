import React, { useState } from "react";
function Myprofile() {
    
    const [option, setOption] = useState(false);
    const [option1, setOption1] = useState(false);
    
  function Click() {
    const val=false;
    setOption1(val);
      const newValue=true;
    setOption(newValue);
    
  }
  function Click1() {
      const val1=false;
      setOption(val1);
    const newValue1=true;
  setOption1(newValue1);
  
}
  
    return( 
      
     
        <div className="profile-sec1">
        <div className="left-profile">
<h4>My profile</h4>
<div className="profile-a">
<a className="" href="#" onClick={Click}>Edit Profile</a><br/>
</div>
<div className="profile-a">
<a className="" href="#" onClick={Click1}>Change Password</a>

</div>


</div>

{option? <div className="right-profile">
         <form>
               <h4 className="profile-component">Edit Profile</h4>

               <div className="form-group">
                   <label className="profile-component">Email</label>
                   <input type="email" className="form-control input-style-profile" placeholder="varunsharma13699@gmail.com" />
               </div>
               <div className="form-group">
               <label className="profile-component">Mobile number</label>
                   <input type="tel" className="form-control input-style-profile" placeholder="9617172689" />
               </div>
               <div className="form-group">
               <label className="profile-component">Institute</label>
                   <input type="text" className="form-control input-style-profile" placeholder="SVIIT" />
               </div>
               <div className="form-group">
               <label className="profile-component">Year</label>
                   <input type="text" className="form-control input-style-profile" placeholder="3" />
               </div>
               <button type="button" class="btn btn-primary btn-lg profile-component" value="save">Save</button>
             
              
               </form>
</div> : null
}
{option1? <div className="right-profile">
         <form>
               <h4 className="profile-component">Edit Profile</h4>

               <div className="form-group">
                   <label className="profile-component">Email</label>
                   <input type="email" className="form-control input-style-profile" placeholder="varunsharma13699@gmail.com" />
               </div>
               <div className="form-group">
               <label className="profile-component">Mobile number</label>
                   <input type="tel" className="form-control input-style-profile" placeholder="9617172689" />
               </div>
               <div className="form-group">
               <label className="profile-component">Institute</label>
                   <input type="text" className="form-control input-style-profile" placeholder="SVIIT" />
               </div>
              
              
               </form>
</div> : null
}
</div>




      

    );
}
export default Myprofile;