import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Error,
  ProfilePage,
  SignUp,
  Login,
  ProtectedRoute,
} from "./pages";
import { Landingpage, Error, ProfilePage, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
