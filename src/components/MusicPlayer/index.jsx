import Track from "./Track";
import Seekbar from "./Seekbar";
import Controls from "./Controls";
import Player from "./Player";
import VolumeBar from "./VolumeBar";
import {useDispatch, useSelector} from "react-redux";
import React,{useState} from "react";
import { playPause } from "../../redux/features/playerSlice";
const {activeSong, currentSongs, isPlaying, currentIndex} = useSelector((state) => state.player );
const handlePlayPause = () => {
  if(!isActive) return;

  if(isPlaying){
    dispatch(playPause(false));
  }
  else{
    dispatch(playPause(true));
  }
}

const handleNextSong = () => {
  if(!shuffle){

  }
  else{
    
  }
  
}
const handlePrevSong = () => {
  if(!shuffle){

  }
  else if(currentIndex === 0)
  {

  }
  else{

  }
}
const MusicPlayer = () => {
  return(
    <div className="flex flex-row items-center justify-between    ">
      <Track isPlaying={isPlaying} activeSong={activeSong} isActive={isActive}/>
      <div className="flex flex-col flex-1">
        <Controls currentSongs={currentSongs} handleNextSong={handleNextSong} handlePrevSong={handlePrevSong} isPlaying={isPlaying} handlePlayPause={handlePlayPause}/>
        <Seekbar/>
        <Player/>

      </div>

    </div>
  )
}
export default MusicPlayer