import React from "react";
import Banner from "../Banner/Banner";
import HowIt from "../Other/HowIt/HowIt";
import OurService from "../Other/OurService/OurService";
import Brands from "../Other/Brands/Brands";
import Parcel from "../Other/Parcel/Parcel";

const Home = () => {
  return (
    <div className="mt-4 ">
      <Banner></Banner>
      <HowIt></HowIt>
      <OurService></OurService>
      <Brands></Brands>
      <Parcel></Parcel>
    </div>
  );
};

export default Home;
