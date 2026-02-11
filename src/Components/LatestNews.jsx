import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 w-full p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60} className="flex gap-2">
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur.</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
