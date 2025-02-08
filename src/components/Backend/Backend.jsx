import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "./LeftMenu";

function Backend() {
  return (
    <>
      <div className="flex">
        <LeftMenu />
        <Outlet />
      </div>
    </>
  );
}

export default Backend;
