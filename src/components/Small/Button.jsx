import React from "react";

const Button = ({title}) => {
  return (
    <div className="px-6 py-4 bg-black rounded-full cursor-pointer">
      <h1 className="text-sm font-medium text-white">{title}</h1>
    </div>
  );
};

export default Button;
