import React from "react";
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Login from "./login";
import Homepage from "./homepage";

const BrowserRoutes = () => {

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

}

export default BrowserRoutes;
