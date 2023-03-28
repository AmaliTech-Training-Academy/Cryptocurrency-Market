import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landingpage, Error, ProfilePage, Login } from "./pages";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
