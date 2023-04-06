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
  ActiveCrypto,
  Dashboard,
  Viewcrypto,
  Modal
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "./component";

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
              <Select />
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
