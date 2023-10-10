import React from "react";
import styled from "./Layout.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-900">
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
