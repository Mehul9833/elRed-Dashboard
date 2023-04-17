import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("here i am");

    navigate("/about");
  }, [navigate]);

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
