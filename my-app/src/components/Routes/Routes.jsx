import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Friends from "../Friends/Friends";
import Content from "../Content/Content";
import Dialogs from "../Dialogs/Dialogs";

export default function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/friends" element={<Friends />} />
      <Route
        path="/content"
        element={
          <Content
            addMessage={props.addMessage}
            userPost={props.usrpost}
            TextArea={props.TextArea}
            updateNewPostText={props.updateNewPostText}
          />
        }
      />
      <Route
        path="/dialogs/*"
        element={<Dialogs data={props.data} messages={props.DataMessages} />}
      />
      {/* <Route path="*" element={<Navigate to="/content" replace />} /> */}
    </Routes>
  );
}
