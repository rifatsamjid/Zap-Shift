import React from "react";
import Banner from "../Banner/Banner";
import HowIt from "../Other/HowIt/HowIt";
import OurService from "../Other/OurService/OurService";

const Home = () => {
  return (
    <div className="mt-4 ">
      <Banner></Banner>
      <HowIt></HowIt>
      <OurService></OurService>
    </div>
  );
};

export default Home;
