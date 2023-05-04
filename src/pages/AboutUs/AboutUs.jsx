import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleAboutUs from "../SingleAboutUs/SingleAboutUs";
import "./AboutUs.css";
import NewsLatterSection from "../Home/NewsLatterSection/NewsLatterSection";

const AboutUs = () => {
  const aboutData = useLoaderData();
  //console.log(aboutData);
  return (
    <>
      <div className="mx-4 sm:mx-20 lg:mx-36">
        <h4 className=" about-description text-3xl font-bold text-blue-900 mt-8  text-center sm:text-start">EXECUTIVE TEAM</h4>
        <div>
          {aboutData.map((singleData) => (
            <SingleAboutUs
              key={singleData._id}
              singleData={singleData}
            ></SingleAboutUs>
          ))}
        </div>
      </div>
      <NewsLatterSection className="mx-4 sm:mx-20 lg:mx-36 -mt-16"/>
    </>
  );
};

export default AboutUs;
