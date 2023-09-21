import React, { useContext } from "react";
import "./jumbotron.css";
import { useState } from "react";
import { ImageContext } from "./homepage";

const Jumbotron = () => {

  const [searchValue, setSearchValue] = useState("");

  const { fetchData } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(`/search/photos?page=1&query=${searchValue}&client_id=M_j6Z69MD1mDFeBLOxrvIuNeR_uqxca_nYMeINfQKyc`)
    setSearchValue("");
  }

 
    return (
        <div className="text-center bg-secondary">
          <div className="text-center-text">SAM_SNY Gallery</div>
          <div className="input-group mt-3 mb-3 w-50 m-auto">
             <input
               type="text"
               className="form-control"
               placeholder="Search..."
               aria-label="Search"
               aria-describedby="search-button"
               value={searchValue}
               onChange={handleInputChange}
              />
               <div className="input-group-append">
                <button onClick={handleButtonSearch} className="btn btn-primary" 
                type="button" id="search-button">
                 Search
                </button>
               </div>
             </div>
        </div>
    );
}

export default Jumbotron; 