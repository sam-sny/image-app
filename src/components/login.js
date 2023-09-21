import React from "react";

const Login = () =>{
    return (
        <div className="container w-50 ">
       <div className="login mb-3">
         Kindly Log-In to use this gallery
       </div>
       <h3>Sign In</h3>
       <div className="mb-3">
         <label>Email address</label>
         <input
           type={"email"}
           className="form-control"
           placeholder="Enter email"
           onClick={(e) => setEmail(e.target.value)}
         />
       </div>
       <div className="mb-3">
         <label>Password</label>
         <input
           type={"password"}
           className="form-control"
           placeholder="Enter password"
           onClick={(e) => setPassword(e.target.value)}
         />
       </div>
       <div className="mb-3">
       { /*  <div className="custom-control custom-checkbox">
          <input
             type="checkbox"
             className="custom-control-input"
             id="customCheck1"
           />
          <label className="custom-control-label" htmlFor="customCheck1">
             Remember me
 </label> 
         </div> */}
       </div>
       <div className="d-grid">
         <button type="submit" onClick={signUp}  className="btn btn-primary mb-2 w-50 m-auto">
           Create Account
         </button>
         <button type="submit" onClick={signIn} className="btn btn-primary  mb-2 w-50 m-auto">
           Sign-in
         </button>
       </div>
     {/*}  <p className="forgot-password text-right">
         Forgot <a href="#">password?</a>
       </p> */}
      </div>

    );
}

export default Login;