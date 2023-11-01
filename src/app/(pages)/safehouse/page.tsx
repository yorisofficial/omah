"use client";
import React, { use, useEffect, useRef, useState } from "react";
import Button from "@/app/component/ui/button/page";
import dataHouse from "@/app/api/house.json";
import Image from "next/image";
import { IconFilter, IconFilterFilled } from "@tabler/icons-react";

const HousePage = () => {
  const [activeTab, setActiveTabe] = useState("forSale");
  const [isOpenMenu, setOpenMenu] = useState(false);
  const openMenu = useRef(null);
  const handleTabChange = (tab: string) => {
    setActiveTabe(tab);
    console.log(activeTab);
  };
  const handleClick = () => {
    setOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleMenuClickOutside = (e: MouseEvent) => {
      if (openMenu.current && !(openMenu.current as any).contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleMenuClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleMenuClickOutside);
    };
  });

  return (
    <div className="w-full h-screen flex justify-end">
      <div className="side-bar w-full z-40 fixed">
        <div className="desktop-filter fixed hidden xl:block w-1/5 h-screen z-40 top-0 left-0 bg-white drop-shadow-xl">
          <div className="flex flex-col w-full h-full justify-center items-start px-8 gap-4">
            <h1 className="text-3xl font-semibold">Filter</h1>
            <div className="w-full flex flex-col gap-4">
              <Button
                variant={activeTab === "forSale" ? "primary" : "border"}
                onClick={() => handleTabChange("forSale")}
                className="w-full"
              >
                For Sale
              </Button>
              <Button
                variant={activeTab === "forRent" ? "primary" : "border"}
                onClick={() => handleTabChange("forRent")}
                className="w-full"
              >
                For Rent
              </Button>
            </div>
          </div>
        </div>
        <div className="mobile-filter-toggle w-full z-50 mt-24 xl:hidden bg-white drop-shadow-xl p-4 flex justify-between items-center">
          <h1>Filter</h1>
          <div className="flex">
            <button onClick={handleClick}>
              {isOpenMenu ? <IconFilterFilled /> : <IconFilter />}
            </button>
          </div>
        </div>
        <div
          ref={openMenu}
          className={`mobile-filter absolute xl:hidden -z-10 right-0 bg-white p-4 w-1/2 h-screen transition-all duration-500 drop-shadow-xl ${
            isOpenMenu ? "translate-x-2 opacity-100" : "translate-x-40 opacity-0"
          }`}
        >
          <div className="flex gap-4 flex-col mt-8">
            <Button
              variant="link"
              onClick={() => {
                isOpenMenu ? setOpenMenu(false) : setOpenMenu(true);
                handleTabChange("forSale");
              }}
              className={`p-4 w-full border flex justify-center  ${
                activeTab === "forSale" ? "items-center text-primary" : ""
              }`}
            >
              For Rent
            </Button>
            <Button
              variant="link"
              onClick={() => {
                isOpenMenu ? setOpenMenu(false) : setOpenMenu(true);
                handleTabChange("forRent");
              }}
              className={`p-4 w-full border flex justify-center  ${
                activeTab === "forRent" ? "items-center text-primary" : ""
              }`}
            >
              For Rent
            </Button>
          </div>
        </div>
      </div>
      <div className="xl:w-3/4 h-fit px-8 mt-32">
        {activeTab === "forSale" && (
          <div className="w-full h-full py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-start items-start">
              {dataHouse.forSale.map((item) => (
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
                      ${item.price.toLocaleString("en-US")} <span className="text-black">USD</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "forRent" && (
          <div className="w-full h-full py-8">
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-start items-start">
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
                      ${item.price.toLocaleString("en-US")} <span className="text-black">USD</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HousePage;
