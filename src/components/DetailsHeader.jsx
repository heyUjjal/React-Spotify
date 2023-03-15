import React from "react";
const DetailsHeader = ({songdata}) => {
  console.log(songdata)

  return(
    <div className="w-full backdrop-blur-sm bg-white/5 rounded-3xl bg-opacity-80 sm:h-48 h-28 flex items-center justify-center">
      <img src={songdata?.data[0].image[2].link} className=" border-white  h-full rounded-[50%] "/>


    </div>
  )
};

export default DetailsHeader;
