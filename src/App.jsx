import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Error,
  ProfilePage,
  SignUp,
  Login,
  Landingpage,
  ProtectedRoute,
  Password,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/signUp" element={<SignUp />} />
       <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/password" element={<Password />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
