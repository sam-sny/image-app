import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const Login = () =>{

    const history = useNavigate();

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    
    console.log(auth?.currentUser?.email);
        
        const signUp = async() => {
          
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
            history('/homepage');
            alert("Successfully created an Account");
          })
          .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            // ..
            alert(errorCode);
          });  
           
        };
        
        
        const signIn = () =>{
          
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
            history('/homepage');
            alert("Signed-In");
          })
          .catch((error) => {
            const errorCode = error.code;
           /* const errorMessage = error.message; */
           alert(errorCode);
          });
        
        };
        

    return (
      <div className="container w-50 bg-secondary p-5 mt-4 rounded-5">
        <h3 className="mb-3 text-white">Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
              <input
               className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="mb-3">
            <label>Password</label>
              <input
                 type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="mb-3">
       
       </div>
       <div className="d-grid">
         <button type="submit" onClick={signUp}  className="btn btn-primary mb-2 w-50 m-auto">
           Create Account
         </button>
         <button type="submit" onClick={signIn} className="btn btn-primary  mb-2 w-50 m-auto">
           Sign-in
         </button>
       </div>
     
      </div>

    );
}

export default Login;