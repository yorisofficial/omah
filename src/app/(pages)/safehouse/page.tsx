"use client";
import Button from "@/app/component/ui/button/page";
import dataHouse from "@/app/api/house.json";
import Image from "next/image";
import React, { useState } from "react";

const HousePage = () => {
  const [activeTab, setActiveTabe] = useState("forSale");
  const handleTabChange = (tab: string) => {
    setActiveTabe(tab);
  };
  return (
    <div className="w-full h-full p-4 md:px-20 border-2">
      <div className="navigation flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:w-full gap-4 md:gap-8 items-center">
          <h1 className="text-4xl font-semibold">The latest</h1>
          <div className="flex items-center gap-4 md:gap-8 xl:gap-12">
            <Button
              variant="link"
              className={`no-underline ${activeTab === "forSale" ? "text-primary" : ""}`}
              onClick={() => handleTabChange("forSale")}
            >
              For sale
            </Button>
            <Button
              variant="link"
              className={`no-underline ${activeTab === "forRent" ? "text-primary" : ""}`}
              onClick={() => handleTabChange("forRent")}
            >
              To rent
            </Button>
          </div>
        </div>
        <Button variant="link">View all</Button>
      </div>
      <div className="card-items">
        <div className="w-full h-full flex mt-8">
          {activeTab === "forSale" && (
            <div className="w-full h-full">
              <div className="w-full my-6">
                <h1 className="text-2xl font-semibold text-primary">House for Sale</h1>
              </div>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-start items-start">
                {dataHouse.forSale.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="card-component border h-full bg-white drop-shadow-lg border-[#f4f4f4] p-4"
                  >
                    <div className="header">
                      <Image
                        className="w-full object-contain"
                        src={item.img}
                        alt={item.name}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="body mt-4 w-full flex flex-col justify-between">
                      <div className="flex flex-col h-full">
                        <h1 className="text-xl text-black font-semibold">{item.name}</h1>
                        <p className="text-sm w-3/4 font-light">
                          Alamat : {item.alamat.jalan} {item.alamat.kecamatan} {item.alamat.kota}
                        </p>
                      </div>
                      <p className="text-xl mt-4 text-primary font-semibold">
                        ${item.price.toLocaleString("en-US")}{" "}
                        <span className="text-black">USD</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "forRent" && (
            <div className="w-full h-full">
              <div className="w-full my-6">
                <h1 className="text-2xl font-semibold text-primary">House to Rent</h1>
              </div>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-start items-start">
                {dataHouse.forRent.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="card-component border h-full bg-white drop-shadow-lg border-[#f4f4f4] p-4"
                  >
                    <div className="header">
                      <Image
                        className="w-full object-contain"
                        src={item.img}
                        alt={item.name}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="body mt-4 w-full flex flex-col justify-between">
                      <div className="flex flex-col h-full">
                        <h1 className="text-xl text-black font-semibold">{item.name}</h1>
                        <p className="text-sm w-3/4 font-light">
                          Alamat : {item.alamat.jalan} {item.alamat.kecamatan} {item.alamat.kota}
                        </p>
                      </div>
                      <p className="text-xl mt-4 text-primary font-semibold">
                        ${item.price.toLocaleString("en-US")}{" "}
                        <span className="text-black">USD</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HousePage;
