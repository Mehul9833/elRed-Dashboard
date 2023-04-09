import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Root = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <section className="main-content">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Root;
