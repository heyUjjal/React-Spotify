import React from "react";
import { useEffect, useRef } from "react";
import { playPause, setActivesong } from "../redux/features/playerSlice";
import { Link } from "react-router-dom";
import { useGettopsongsQuery, useGetalbumsongsQuery } from "../redux/apiServices/shazamcore";
import PlayPause from "./PlayPause";

import { useDispatch, useSelector } from "react-redux";

  const TopSongCard = ({song,handlePlayClick,handlePauseClick, activeSong, isPlaying, index, i}) => {
  const { currentSongs, error } = useGetalbumsongsQuery(song?.album?.id);
  
  
  
 
  return (<div className="flex flex-row justify-between items-center    pr-4">
    
    
    <div className="flex fle-row items-center">
    <div className="text-white font-bold m-2">
      {i+1}.
    </div>
    <img src={song?.image[2].link} className="object-contain rounded-2xl w-[80px] h-[70px]" />
    <div className="w-[100px]">
     <Link to={`/songs/${song?.id}`}>
      <p className="text-white mt-4 text-left font-bold text-sm truncate">{song.name}</p>
     </Link>
      <Link to={`/artists/${song?.primaryArtistsId}`}>
      <p className="truncate text-white text-sm">{song.primaryArtists}</p>
      </Link>
    </div>
    </div>
    <PlayPause song={song?.name}
    handlePlay={() => handlePlayClick(song, currentSongs, index)}
    handlePause={() => handlePauseClick()}
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
  const dispatch = useDispatch();
  const{activeSong, isPlaying} = useSelector((state) => state.player);
  const handlePlayOclick = () => {
  
    dispatch(setActivesong({ data, currentSongs, index }));
    
    dispatch(playPause(true));


  }
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  

  return (
    <div ref={divRef} className="flex-1 flex flex-col  ml-0 xl:mb-0 mb-4  w-full pt-6 mr-3  ">
      <div className="flex flex-col w-full ">
        <div className="flex flex-row w-full p-0 m-0 items-center justify-between">
          <h2 className="text-white font-bold text-2xl text">Top Songs</h2>
          <Link to="/top-charts">
            <p className="text-white m-0 ">see more</p>
          </Link>

        </div>
        <div className="flex-col flex mt-4 gap-3">
          
          {topPlays?.map((song,i) =>
          

          (
            
            
            <TopSongCard key={song.id} song={song} handlePlay={handlePlayOclick} handlePause={handlePauseClick} activeSong={activeSong} isPlaying={isPlaying}  index ={0} i={i}/>
          )
          )}

        </div>

      </div>


    </div>
  )
};

export default TopPlay;
