import React from "react";
import {BsFillPauseFill, BsFillPlayFill,} from "react-icons/bs"
import {MdSkipPrevious, MdSkipNext} from "react-icons/md"
const Controls = ({currentSongs,handleNextSong, handlePrevSong, isPlaying, handlePlayPause}) => {
    return(
         <div className="flex justify-between align-center md:w-32 lg:w-52 ">
            
            {currentSongs?.length && <MdSkipPrevious size={30} color="FFF" className="cursor-pointer" onClick={handlePrevSong}/>}


            {isPlaying?<BsFillPauseFill size={40} color="#FFF" className="cursor-pointer" onClick={handlePlayPause} />:<BsFillPlayFill size={40} color="#FFF" className="cursor-pointer" onClick={handlePlayPause} />}

            
         </div>
    )
}
export default Controls;