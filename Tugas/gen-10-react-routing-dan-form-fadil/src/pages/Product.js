import React from "react";
import { Outlet } from "react-router-dom";

export default function Product() {
  return (
    <>
      <h1 className="text-5xl text-blue-900 font-semibold mb-4">Product</h1>

      <Outlet />
    </>
  );
}
