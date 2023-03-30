import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Homepage, Error, ProfilePage, SignUp,Login,ProtectedRoute } from "./pages";
=======
import { Landingpage, Error, ProfilePage, Login } from "./pages";
>>>>>>> 08e95f0 (feature: created crypt feature component)
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<ProtectedRoute>     
        <Homepage />
        </ProtectedRoute>}
         >
        </Route>
        <Route path="/landing" element={<Homepage />} />
        <Route path="/signUp" element={<SignUp />} />
=======
        <Route path="/" element={<Landingpage />} />
>>>>>>> 08e95f0 (feature: created crypt feature component)
        <Route path="/login" element={<Login />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
