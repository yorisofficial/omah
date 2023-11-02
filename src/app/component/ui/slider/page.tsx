"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dataReview from "@/app/api/review.json";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full h-full">
      <>
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper h-full w-full"
        >
          {dataReview.map((review) => (
            <SwiperSlide key={review.id} className="w-full my-20 bg-white">
              <div className="header">
                <div className="header relative">
                  <Image
                    src={review.img}
                    alt={review.name}
                    width={600}
                    height={400}
                    className="object-fill w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-white px-4 py-2">
                    <p className="text-primary">{review.name}</p>
                  </div>
                </div>
                <div className="body py-6 w-full">
                  <h1 className="text-xl font-semibold">{review.review}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
