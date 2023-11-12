import React from "react";
import Homepage from "./components/homepage";
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Login from "./components/login";
import "./App.css";



const App = () => {

  return (

    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/homepage" element={<Homepage />}></Route>  
            </Routes>
        </div>
        </BrowserRouter>
    
  );
};

export default App;
