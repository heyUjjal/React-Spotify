import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGettopsongsQuery } from "../redux/apiServices/shazamcore";
import PlayPause from "./PlayPause";
export const TopSongCard = ({song,handlePlayClick,handlePauseClick, activeSong, isPlaying}) => {
 
 
  return (<div className="flex flex-row justify-between items-center ml-3 ">
    
    <img src={song?.song?.image?.[2].link} className="object-contain w-[80px] h-[80px]" />
    <PlayPause song={song?.name}
    handlePlay={handlePlayClick}
    handlePause={handlePauseClick}
    activeSong={activeSong}
    isPlaying={isPlaying} />


  </div>)
};

const TopPlay = () => {
  const divRef = useRef(null);
  const trendingSongsId = "110858205";
  const { data } = useGettopsongsQuery(trendingSongsId);
  const topPlays = data?.data?.songs.slice(0, 5);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavour: 'smooth' });
  })
  

  return (
    <div ref={divRef} className="flex-1 flex flex-col  ml-0 xl:mb-0 mb-4  w-full pt-6 mr-3  ">
      <div className="flex flex-col w-full ">
        <div className="flex flex-row w-full p-0 m-0 items-center justify-between">
          <h2 className="text-white font-bold text-2xl text">Top Songs</h2>
          <Link to="/top-charts">
            <p className="text-white m-0 ">see more</p>
          </Link>

        </div>
        <div className="flex-col flex mt-4 gap-4">
          
          {topPlays?.map((song) =>

          (
            <TopSongCard key={song.id} song={song} />
          )
          )}

        </div>

      </div>


    </div>
  )
};

export default TopPlay;
