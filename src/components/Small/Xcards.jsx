import { div } from "framer-motion/client";
import React from "react";
import "remixicon/fonts/remixicon.css";

const Xcards = ({ data }) => {
  return (
    <div className="px-7 py-4">
      <div className="w-[26vw] h-[20vw] bg-red-400 rounded-lg overflow-hidden">
        <img className="w-[100%] h-[100%] object-cover" src={data.img} alt="" />
      </div>
      <div className="flex justify-between items-center w-[26vw] mt-2">
        <div className="flex gap-3 items-center">
          <div className="w-[25px] h-[25px] overflow-hidden rounded-full">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={data.logo}
              alt=""
            />
          </div>
          <h1>{data.name}</h1>
        </div>
        <div className="flex items-center p-1 text-xs gap-2">
          <i className="ri-heart-3-fill mt-1 text-slate-500"></i>
          <h1>{data.likes}</h1>
          <i className="ri-eye-line mt-1 text-slate-500"></i>
          <h1>{data.views}k</h1>
        </div>
      </div>
    </div>
  );
};

export default Xcards;
