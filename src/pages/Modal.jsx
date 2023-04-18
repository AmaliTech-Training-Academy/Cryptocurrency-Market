import React from "react";
import { useLocation } from "react-router";

const Modal = () => {
  const search = new URLSearchParams(useLocation().search);
  const id = search.get("id");
  console.log(id);

  return <div className=""></div>;
};

export default Modal;
