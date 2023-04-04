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
<<<<<<< HEAD
  Password,
=======
  ActiveCrypto
>>>>>>> 84d1279 (feature: created components for view active crypto page)
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "./component";

const App = () => {
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
<<<<<<< HEAD

=======
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/active-crypto" element={<ActiveCrypto />} />
>>>>>>> 84d1279 (feature: created components for view active crypto page)
        <Route path="*" element={<Error />} />
        
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
