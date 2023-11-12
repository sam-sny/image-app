import React, { createContext, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./homepage.css";
import Pic from "./Pic";
import Jumbotron from "./jumbotron";
import useAxios from "../hooks/useAxios";
import { Container } from "react-bootstrap";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";



export const ImageContext = createContext();

const Homepage = () => {

  const history = useNavigate();

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

  const handleSignOut = () => signOut(auth).then(() => {
    setUser(null);
    history('/');
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    alert(errorCode);
  });


  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&query=cat&client_id=M_j6Z69MD1mDFeBLOxrvIuNeR_uqxca_nYMeINfQKyc`
  );

  console.log(response);

  // Use state to manage the image order
  const [images, setImages] = useState([]);

  // Update images state when response data changes
  useEffect(() => {
    if (response && response.length > 0) {
      setImages(response);
    }
  }, [response]);

 
  

  // Define a function to handle reordering of images
  const handleImageReorder = (draggedIndex, droppedIndex) => {
    const newImages = [...images];
    const [draggedImage] = newImages.splice(draggedIndex, 1);
    newImages.splice(droppedIndex, 0, draggedImage);
    setImages(newImages);
  };
  

  const value = {
    response:images, // Use the updated images state
    isLoading,
    error,
    fetchData,
  };

  
  return (
    <>
    <ImageContext.Provider value={value}>
      <Jumbotron />
      <DndProvider backend={HTML5Backend}>
        <Container fluid>
        <div className="App">
          {isLoading
                ? images.map((data, index) => (
                    <Skeleton key={data.id}
                    id={data.id}
                    index={index}
                    animation="wave"
                    variant="rectangular"
                    style={{ width: "200px", height: "200px", borderRadius: "10px" }}
                     />
                  ))
                :images.map((data, index) => (
            <Pic
              key={data.id}
              src={data.urls.small}
              alt={data.alt_description}
              id={data.id}
              index={index}
              onImageDrop={handleImageReorder} // Pass the reorder function
            />
          ))}
        </div>
        <>
        <div>
          <button className="float-left me-1" onClick={handleSignOut}></button>
        </div>
        </>
        </Container>
      </DndProvider>
    </ImageContext.Provider>
    
    </>
  );
};

export default Homepage;
