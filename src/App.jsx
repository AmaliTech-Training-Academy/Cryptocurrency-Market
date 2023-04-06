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
  Dashboard,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "./component";
import Viewcrypto from "./pages/Viewcrypto";
import {Viewarea} from "./component";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route index element={<ProfilePage />} /> */}
      
        <Route path="profile-page" element={<ProfilePage />} />
        </Route>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/signUp" element={<SignUp />} />
       <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/password" element={<Password />} />
        <Route path="/viewcrypto/:id" element={<Viewcrypto />} />
        <Route path="/viewarea" element={<Viewarea />} />
        <Route path="password" element={<Password />} />
          <Route path="viewcrypto" element={<Viewcrypto />} />
        <Route path="*" element={<Error />} />
        
        
      </Routes>
    <ToastContainer position="top-center" />
    </BrowserRouter>
    </>
  );
};

export default App;
