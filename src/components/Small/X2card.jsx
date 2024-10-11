import React from "react";

const X2card = ({ data }) => {
  return (
    <div className="shrink-0 ">
      <div className="relative w-[15vw] h-[12vw] group">
        <img
          className="w-[15vw] border-[1px] border-white h-[12vw] rounded-lg object-cover absolute top-0 left-0 z-30"
          src={data.img}
          alt=""
        />
        <div className="w-[15vw] h-[12vw] border-[1px] border-white bg-[#EDDDFB] absolute z-20 rounded-lg top-[-2%] left-[2%] group-hover:top-[-4%] group-hover:left-[4%]"></div>
        <div className="w-[15vw] h-[12vw] border-[1px] border-white bg-[#F4F7FE] absolute z-10 rounded-lg top-[-4%] left-[4%] group-hover:top-[-7%] group-hover:left-[7%]"></div>
      </div>
      <h1 className="text-md text-[#39384A] font-[p] mt-4 capitalize">
        {data.name}
      </h1>
    </div>
  );
};

export default X2card;


