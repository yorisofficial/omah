import Button from "@/app/component/ui/button/page";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import React from "react";

const FooterPage = () => {
  return (
    <div>
      <div className="w-full h-[448px] xl:pl-20">
        <div className="bg-primary py-6 px-4 xl:p-20 flex justify-center items-center flex-col">
          <h1 className="text-4xl xl:w-2/5 text-center text-white">
            Subscribe to get a discount of 30%
          </h1>
          <div className="w-full xl:w-1/2 mt-4 flex justify-center items-center flex-col relative">
            <input type="email" placeholder="Email" className="w-full px-6 py-6" />
            <Button variant="primary" className="absolute top-3 right-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center py-10 px-20">
        <div className="">
          <h1>Omah by @dzakimuzh</h1>
        </div>
        <div className="flex gap-3">
          <div className="p-3 hover:text-primary duration-500 text-black border rounded-xl">
            <IconBrandFacebookFilled />
          </div>
          <div className="p-3 hover:text-primary duration-500 text-black border rounded-xl">
            <IconBrandInstagram />
          </div>
          <div className="p-3 hover:text-primary duration-500 text-black border rounded-xl">
            <IconBrandTwitterFilled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
