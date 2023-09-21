import React, { createContext, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./homepage.css";
import Pic from "./Pic";
import Jumbotron from "./jumbotron";
import useAxios from "../hooks/useAxios";
import { Container } from "react-bootstrap";


export const ImageContext = createContext();

const Homepage = () => {
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
    <ImageContext.Provider value={value}>
      <Jumbotron />
      <DndProvider backend={HTML5Backend}>
        <Container fluid>
        <div className="App">
          {images.map((data, index) => (
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
        </Container>
      </DndProvider>
    </ImageContext.Provider>
  );
};

export default Homepage;
