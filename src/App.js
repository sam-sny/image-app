import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Homepage from "./components/homepage";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import app from "./firebase";



const App = () => {

const auth = getAuth(app);

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [user, setUser] = useState(null);


useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    setUser(user);
  } else {
    // User is signed out
    setUser(null);
  }
});

// Cleanup the subscription when the component unmounts
return () => unsubscribe();
}, [auth]);

const signUp = () => {
  
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
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
    alert("Signed-In");
  })
  .catch((error) => {
    const errorCode = error.code;
   /* const errorMessage = error.message; */
   alert(errorCode);
  });

};



  signOut(auth).then(() => {
    setUser(null);
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    alert(errorCode);
  });



  return (

    <DndProvider backend={HTML5Backend}>
      <>
      <Homepage />
      <button onClick={signOut}>Sign Out</button>
      </>

    </DndProvider>
  );
};

export default App;
