import React from "react";
import Homepage from "./homepage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const BrowserRoutes = () => {

      return (
        <DndProvider backend={HTML5Backend}>
      <>
      <Homepage />
      <button onClick={signOut}>Sign Out</button>
      </>

    </DndProvider>
      );

}

export default BrowserRoutes;
