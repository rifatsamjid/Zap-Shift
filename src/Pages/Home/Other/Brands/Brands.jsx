import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../../assets/brands/amazon.png";
import amazon_vector from "../../../../assets/brands/amazon_vector.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import randstad from "../../../../assets/brands/randstad.png";
import star from "../../../../assets/brands/star.png";
import start from "../../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogo = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start,
];

const Brands = () => {
  return (
    <div className="m-26">
      <h1 className="font-extrabold text-2xl text-center mb-4">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {brandLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
