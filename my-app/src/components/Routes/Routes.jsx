import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Friends from "../Friends/Friends";
import Content from "../Content/Content";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/friends" element={<Friends />} />
      <Route path="/content" element={<Content />} />
      <Route path="*" element={<Navigate to="/content" replace />} />
    </Routes>
  );
}
