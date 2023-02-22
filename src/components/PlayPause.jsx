import {FaPlayCircle, FaPauseCircle} from "react-icons/fa"
const PlayPause = ({song, handlePlay, handlePause, activeSong, isPlaying}) => (
   isPlaying&&song==activeSong.title?
   <FaPauseCircle size={25} className="text-gray-300"
   onClick={handlePause}
   />:
   <FaPlayCircle
   size={25} className="text-gray-300"
   onClick={handlePlay}/>

  
);

export default PlayPause;
