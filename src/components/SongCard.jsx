import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { setActivesong, playPause } from "../redux/features/playerSlice";
import { useGetalbumsongsQuery } from "../redux/apiServices/shazamcore";
import { Link } from "react-router-dom";


const SongCard = ({ song, data, activeSong, isPlaying, index }) => {
  const dispatch = useDispatch();
  const { currentSongs, error } = useGetalbumsongsQuery(data?.album?.id);

 const handlePlayOnclick = () => {
  
    dispatch(setActivesong({ data, currentSongs, index }));
    
    dispatch(playPause(false));


  }
const handlePauseOnclick = () => { 
    dispatch(PlayPause(true));



  }
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 rounded-lg backdrop-blur-sm animate-slideup  cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center h-56 w-full  opacity-55 group-hover:flex  ${activeSong?.name === song ? 'flex item-center  bg-black opacity-60 ' : 'hidden'} `}>
          <PlayPause song={song} handlePlay={handlePlayOnclick}
            handlePause={handlePauseOnclick}
            activeSong={activeSong}
            isPlaying={isPlaying} />
        </div>
        <img src={data?.image[2].link} alt={song} />
      </div>
      <div className="flex flex-col ">
        <p className="text-white mt-4  text-left font-bold text-sm truncate">
         <Link to={`/songs/${data?.id}`}>
         {song}
         </Link >

        </p>
        <p className="text-white mt-4 text-left font-bold text-sm truncate">
          <Link to={`/artists/${data?.primaryArtistsId}`}>
          {data.primaryArtists}
          </Link>
          

        </p>


      </div>




    </div>
  )
}

export default SongCard;
