import React, { Suspense, lazy } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Login from "../Login/Login";
import trollface from "../../assets/trollface.gif"

const Friends = lazy(() => import("../Friends/Friends-Wrapper"));
const ProfileContainer = lazy(() => import("../Profile/Profile-Container"));

export default function MainRoutes(props) {
  return (
    // Используем Suspense для оборачивания Routes
    <Suspense fallback={<div> <img src={trollface} alt="" /> </div>}>
      <Routes>
        <Route path="/friends/" element={<Friends />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/dialogs/*" element={<Dialogs />} />
        <Route path="/login/" element={<Login />} />
        {/* <Route path="*" element={<Navigate to="/content" replace />} /> */}
      </Routes>
    </Suspense>
  );
}
