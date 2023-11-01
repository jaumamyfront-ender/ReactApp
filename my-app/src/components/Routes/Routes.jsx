import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Messages from "../Messages/Messages";
import Content from "../Content/Content";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/messages" element={<Messages />} />
      <Route path="/content" element={<Content />} />
      <Route path="*" element={<Navigate to="/content" replace />} />
    </Routes>
  );
}
