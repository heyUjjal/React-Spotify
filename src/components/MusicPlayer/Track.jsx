import React from "react";
const Track = ({isPlaying, activeSong, isActive}) => {
    
    return(
        <div className="flex flex-1 flex-row justify-start">
            <div>
                <img src={`${isPlaying ? 'animate-[spin_3s_linear-infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}/>
            </div>
            <div className="w-[50%]">
                <p className="truncate text-white font-bold text-lg">
                    {activeSong.name}

                </p>
                <p className="truncate text-white
                text-sm">
                    {activeSong.primaryArtists}

                </p>

            </div>

        </div>
    )
}
export default Track;