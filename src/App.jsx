import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
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
import PrivateRoutes from "./utils/PrivateRoute";
import { useDispatch } from "react-redux";
import { getData } from "./features/crypto/cryptoSlice";



const App = () => {
  
const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getData())
  },[dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        >
          {/* <Route index element={<ProfilePage />} /> */}
        <Route path="profile-page" element={<ProfilePage />} />
        </Route>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/signUp" element={<SignUp />} />
       <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
        
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
