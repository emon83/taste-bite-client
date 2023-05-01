import React from "react";
import Header from "../../pages/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
