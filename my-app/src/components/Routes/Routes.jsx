import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Friends from "../Friends/Friends-Wrapper";
import ProfileContainer from "../Profile/Profile-Container";
import Dialogs from "../Dialogs/Dialogs";
import Login from "../Login/Login"

export default function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/friends/" element={<Friends />} />
      <Route path="/profile?" element={<ProfileContainer />} />
      <Route path="/dialogs/*" element={<Dialogs />} />
      <Route path="/login/" element={<Login />} />
      {/* <Route path="*" element={<Navigate to="/content" replace />} /> */}
    </Routes>
  );
}
