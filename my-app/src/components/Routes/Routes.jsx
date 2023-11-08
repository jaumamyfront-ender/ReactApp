import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Friends from "../Friends/Friends";
import Content from "../Content/Content";
import Dialogs from "../Dialogs/Dialogs";

// let somecomponent = () => {
//   <Friends />;
// };
// render = {somecomponent}
// render ={()=> <Friends/> }
export default function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/friends" element={<Friends />} />
      <Route path="/content" element={<Content />} />
      <Route
        path="/dialogs/*"
        element={<Dialogs data={props.data} messages={props.DataMessages} />}
      />
      {/* <Route path="*" element={<Navigate to="/content" replace />} /> */}
    </Routes>
  );
}
