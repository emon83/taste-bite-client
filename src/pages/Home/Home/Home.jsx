import React, { useEffect, useState } from "react";
import img from '../../../images/banner-cake.jpg'
import './Home.css'
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import NewsLatterSection from "../NewsLatterSection/NewsLatterSection";

const Home = () => {
  return (
    <div className="mx-4 sm:mx-20 lg:mx-40 my-4 sm:my-10 bg-gray-50">
      <div className="lg:flex items-center">
        <div className="hero-img">
            <img className="md:rounded-s-lg" src={img} alt="" />
        </div>
        <div className="banner-text p-4 sm:p-12 bg-sky-100 md:rounded-e-lg">
            <h1 className="banner-title text-3xl sm:text-6xl md:text-7xl font-semibold text-center sm:text-start">Might Super Cheesecake</h1>
            <h5 className="text-base sm:text-xl my-3 sm:my-6 text-center sm:text-start">
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
      <NewsLatterSection></NewsLatterSection>
    </div>
  );
};

export default Home;