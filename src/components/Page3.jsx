import React, { useState } from "react";
import Xcards from "./Small/Xcards";

const Page3 = () => {
  const [data] = useState([
    {
      img: "https://cdn.dribbble.com/userupload/16838758/file/original-0c0ee06a0f1d08ff01856ec233e87430.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=640x797&vertical=center",
      name: "Ron",
      likes: "23",
      views: "123",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16840424/file/original-1c22e3b72b0cc4b78bbecb7550ee8cb3.jpg?crop=0x0-1600x1200&resize=700x525&vertical=center",
      logo: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Alice",
      likes: "58",
      views: "301",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16831711/file/still-d3e6c2d438ddffaf92bffee885b636d7.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=640x797&vertical=center",
      name: "Tom",
      likes: "34",
      views: "653",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16833420/file/still-a5e25e88ad00f1f95e4f2ad0360fe038.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=640x797&vertical=center",
      name: "Jessica",
      likes: "87",
      views: "219",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16843473/file/original-a6f80f3f562e4d367949a9d29ffc2717.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=640x797&vertical=center",
      name: "Michael",
      likes: "112",
      views: "412",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16842028/file/original-0844fa776b399e5134a8f31472f438b9.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=640x797&vertical=center",
      name: "David",
      likes: "45",
      views: "189",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16840733/file/still-cf1df23ef3a8f515387cbe0dfccf07f7.png?resize=700x525&vertical=center",
      logo: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Anna",
      likes: "78",
      views: "341",
    },
    {
      img: "https://cdn.dribbble.com/userupload/14735580/file/original-e4ed49188a46495e4bf22beeed9d6cb4.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=640x797&vertical=center",
      name: "Emily",
      likes: "96",
      views: "258",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16832352/file/still-a52be30975b734a0585673cc6f232634.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=640x797&vertical=center",
      name: "John",
      likes: "52",
      views: "390",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16838973/file/original-48ef5a5e32df62eae43215d59e8340ac.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=640x797&vertical=center",
      name: "Sophia",
      likes: "67",
      views: "410",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16837034/file/original-f2422e73495c30ef5a116d5b1fd9233b.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=640x797&vertical=center",
      name: "Chris",
      likes: "21",
      views: "132",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16835916/file/original-b39beb6569b2728763f4c8f5eab5660e.png?resize=700x525&vertical=center",
      logo: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Olivia",
      likes: "83",
      views: "276",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16838780/file/original-3a1fc88eb5095ccf1cf8ae08686f31bb.jpg?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=640x797&vertical=center",
      name: "Henry",
      likes: "91",
      views: "502",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16839587/file/original-4f30ff158f856f7ae500b1394761d30d.png?resize=700x525&vertical=center",
      logo: "https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      name: "Lucas",
      likes: "42",
      views: "167",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16834544/file/original-bd0b0cf364e14b18d51578da8695c00e.png?resize=700x525&vertical=center",
      logo: "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=640x797&vertical=center",
      name: "Lily",
      likes: "76",
      views: "291",
    },
    {
      img: "https://cdn.dribbble.com/userupload/16652131/file/original-433aa20b7b8fee11799d02fd93c2e3d5.jpg?resize=840x630&vertical=center",
      logo: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Zoe",
      likes: "64",
      views: "389",
    },
  ]);

  return (
    <div className="w-full min-h-screen bg-white pt-[10vw]">
      <h1 className="w-full h-fit text-center font-light text-black text-5xl font-[p]">
        Explore inspiring designs
      </h1>
      <div className="w-full h-fit p-8 flex flex-wrap items-center justify-center">
        {data.map((elem, i) => (
          <Xcards key={i} data={elem} />
        ))}
      </div>

      <div className="w-full h-fit flex justify-center">
        <div className="px-6 py-4 w-fit text-center bg-transparent border-[1px] border-black rounded-full cursor-pointer">
          <h1 className="text-sm font-medium text-black ">
            Brows more inspiration
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page3;
