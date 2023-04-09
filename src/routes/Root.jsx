import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      {/* <main className="main">
        <aside>
          <p>sidebar</p>
          <Outlet />
        </aside>
      </main> */}
    </>
  );
};

export default Root;
