import React from "react";
import Button from "./Small/Button";

function Page4() {
  return (
    <div className="w-full h-screen bg-[#FFDA79] mt-40 py-24 flex flex-col gap-10 items-center">
      <h1 className="text-[5vw] font-[hero] leading-none">
        Find your next <br /> designer today
      </h1>
      <p className="w-[40vw] text-center text-[1.6vw]">
        The world’s leading brands use Dribbble to hire creative talent. Browse
        millions of top-rated portfolios to find your perfect creative match.
      </p>
      <div className="flex gap-2">
        <Button title={"Get started now"} />
        <div className="px-6 py-4 bg-white rounded-full cursor-pointer">
          <h1 className="text-sm font-medium text-black">Learn about hiring</h1>
        </div>
        
      </div>
      <p className="text-[1.6vw]">
        Are you a designer?{" "}
        <a className="border-b-2 border-black" href="">
          Join Dribbble
        </a>
      </p>
    </div>
  );
}

export default Page4;
