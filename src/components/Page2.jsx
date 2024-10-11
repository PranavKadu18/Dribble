import React, { useState } from "react";
import Card from "./Small/Card";
import { motion } from "framer-motion";

const Page2 = () => {
  const [data, setdata] = useState([
    {
      img: "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Jesse Showalter",
      role: "Design Educator",
      t1: "UI",
      t2: "Web",
      t3: "Mobile",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      vid: "",
      name: "Andrea Jelić",
      role: "Digital Designer",
      t1: "Brand",
      t2: "UI",
      t3: "Web",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Mercedes Bazan",
      role: "Illustrator",
      t1: "Graphic Design",
      t2: "Illustration",
      t3: "",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Vladimir Gruev",
      role: "Digital Designer",
      t1: "Brand",
      t2: "Design",
      t3: "",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Victa Wille",
      role: "Digital Designer",
      t1: "Mobile",
      t2: "UI",
      t3: "Web",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Lilla Bardenova",
      role: "Brand + Illustrator",
      t1: "Brand",
      t2: "Illustration",
      t3: "Web",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Aurélien Salomon",
      role: "Design Director",
      t1: "Mobile",
      t2: "Product",
      t3: "UX",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Chris Owens",
      role: "Creative Director",
      t1: "Illustration",
      t2: "Mobile",
      t3: "UI",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Daniele Buffa",
      role: "Principal Designer",
      t1: "Animation",
      t2: "UI",
      t3: "Visual",
    },
    {
      img: "https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      vid: "",
      name: "Elif Kameşoğlu",
      role: "Brand Designer",
      t1: "Brand",
      t2: "Illustration",
      t3: "Web",
    },
    {
      img: "https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=640x797&vertical=center",
      vid: "",
      name: "Helen Tran",
      role: "Design Director",
      t1: "Mobile",
      t2: "Product",
      t3: "UX",
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      vid: "",
      name: "Dan Mall",
      role: "Design Educator",
      t1: "Product",
      t2: "UI",
      t3: "",
    },
  ]);

  return (
    <div className="min-h-fit w-full bg-[#F8F7F4]">
      <div className="flex overflow-hidden">
        <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:40,repeat:Infinity,ease:"linear"}} className="pl-[2.5vw] flex gap-[2.5vw]">
          {data.map((elem, i) => (
            <Card key={i} dat={elem} />
          ))}
        </motion.div>
        <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:40,repeat:Infinity,ease:"linear"}} className="pl-[2.5vw] flex gap-[2.5vw]">
          {data.map((elem, i) => (
            <Card key={i} dat={elem} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
