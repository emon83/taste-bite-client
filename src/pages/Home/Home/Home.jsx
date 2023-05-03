import React, { useEffect, useState } from "react";
import img from '../../../images/banner-cake.jpg'
import './Home.css'
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";

const Home = () => {
  return (
    <div className="mx-20 lg:mx-40 my-10">
      <div className="lg:flex items-center">
        <div className="hero-img">
            <img src={img} alt="" />
        </div>
        <div className="banner-text p-12 bg-sky-100">
            <h1 className="banner-title text-7xl font-semibold">Might Super Cheesecake</h1>
            <h5 className="text-xl my-6">
                Look no further for a creamy and<br />
            ultra smooth classic cheesecake <br />
            recipe! no one can deny  its simple <br />
            decadence 
            </h5>
        </div>
      </div>
      <Category></Category>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
};

export default Home;