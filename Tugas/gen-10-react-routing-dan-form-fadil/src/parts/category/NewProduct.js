import React from "react";
import { Outlet } from "react-router-dom";

export default function NewProduct() {
  return (
    <>
      <div>New Product</div>
      <Outlet />
    </>
  );
}
