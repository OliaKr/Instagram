import { Profile } from "./cmps/profie.jsx";
import { HomePage } from "./pages/home-page";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { Sidebar } from "./cmps/sidebar.jsx";

import { loadUsers } from "./store/user.action";
import { BottomTabNavigation } from "./cmps/bottom-navigator.jsx";
import SearchDrawer from "./cmps/search-drawer.jsx";

export function App() {
  const navigate = useNavigate();
  useEffect(() => {
    loadUsers();
    navigate("/instagram");
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route exact path="/instagram/" element={<HomePage />} />
        <Route exact path="/instagram/create" element={<HomePage />} />
        <Route exact path="/instagram/search" element={<HomePage />} />
        <Route exact path="/instagram/notifications" element={<HomePage />} />
        <Route path="/instagram/:username" element={<Profile />} />
      </Routes>
      <BottomTabNavigation />
    </div>
  );
}
