import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Error, ProfilePage, Login, Password, DropdownMenu } from "./pages";
import { ToastContainer } from "react-toastify";
import { NaviBar } from "./component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/password" element={<Password />} />
       <Route path="/dropdown-menu" element={<DropdownMenu />} />

        <Route path="*" element={<Error />} />
        
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
