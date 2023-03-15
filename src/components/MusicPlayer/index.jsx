import Track from "./Track"
import Seekbar from "./Seekbar"
import Controls from "./Controls"
import Player from "./Player"
import VolumeBar from "./VolumeBar"
const MusicPlayer =() => {
  return(
    <div className="flex flex-row items-center justify-between    ">
      <Track isPlaying={isPlaying} activeSong={activeSong} isActive={isActive}/>
      <div className="flex flex-col flex-1">
        <Controls/>
        <Seekbar/>
        <Player/>

      </div>

    </div>
  )
}
export default MusicPlayer