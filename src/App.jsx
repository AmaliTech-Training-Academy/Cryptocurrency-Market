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
  Modal,
  WatchList,
  ViewStatistics,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NaviBar, Select } from "./component";
import { useDispatch } from "react-redux";
import PrivateRoutes from "./utils/PrivateRoute"
import { getData } from "./features/crypto/cryptoSlice";

const App = () => {
  
const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getData())
  },[dispatch])

  return (
    <BrowserRouter>
       <Routes>

      <Route element={<PrivateRoutes />}>
        
        <Route element={<ProfilePage />} path="/" exact />
        <Route element={<Password />} path="/password" exact />
        <Route element={<Dashboard />} path="/dashboard" exact />
        <Route element={<ActiveCrypto />} path="/active-crypto" exact />
        <Route element={<Viewcrypto />} path="/view-crypto" exact />
        <Route element={<WatchList />} path="/watchlist" exact />
        <Route element={<ViewStatistics />} path="/view-stats/:id" exact />
      </Route>
      <Route element={<Landingpage />} path="/landing" />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <ToastContainer position="top-center" />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
