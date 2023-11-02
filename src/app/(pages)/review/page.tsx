"use client";
import React from "react";
import dataReview from "@/app/api/review.json";
import Image from "next/image";

const ReviewPage = () => {
  return (
    <div className="mt-28 py-8 px-20 flex gap-8">
      {dataReview.map((review) => (
        <div key={review.id} className="card-item border-2 border-[#f4f4f4] rounded-xl">
          <div className="header relative">
            <Image src={review.img} alt={review.name} width={600} height={400} />
            <div className="absolute bottom-0 left-0 bg-white px-4 py-2">
              <h1 className="text-primary">{review.name}</h1>
            </div>
          </div>
          <div className="body py-6">
            <p className="font-semibold">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
