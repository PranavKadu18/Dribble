import React from "react";
import Buttmini from "./Buttmini";

const Card = ({dat}) => {
  return (
    <div style={{backgroundImage : `url(${dat.img})`}} className={`relative text-white font-[p] p-3 w-[21vw] h-[27vw] bg-cover rounded-3xl`}>
      <div className="pt-[100%]">
        <p className="text-sm">{dat.name}</p>
        <p className="text-sm">{dat.role}</p>
        <div className="flex gap-3 mt-2">
          {dat.t1 != "" && <Buttmini title={dat.t1} />}
          {dat.t2 != "" && <Buttmini title={dat.t2} />}
          {dat.t3 != "" && <Buttmini title={dat.t3} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
