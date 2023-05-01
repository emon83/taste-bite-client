import React from "react";
import Header from "../../pages/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
