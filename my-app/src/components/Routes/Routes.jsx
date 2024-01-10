import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Friends from "../Friends/Friends-Wrapper";
import ProfileContainer from "../Profile/Profile-Container";
import Dialogs from "../Dialogs/Dialogs";

export default function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/friends/" element={<Friends />} />
      <Route path="/profile?" element={<ProfileContainer />} />
      <Route path="/dialogs/*" element={<Dialogs />} />
      {/* <Route path="*" element={<Navigate to="/content" replace />} /> */}
    </Routes>
  );
}
