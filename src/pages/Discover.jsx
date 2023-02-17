import React from "react";
import { SongCard, Error, Loader } from '../components'
import { genres } from '../assets/constants'
import { useGettopsongsQuery } from "../redux/apiServices/shazamcore";
import { useState } from "react";
const Discover = () => {
    const [playlistId, setPlaylistId] = useState(genres[0].value);
    const { data, isFetching, error } = useGettopsongsQuery(playlistId);
    const [genreTitle, setgenreTitle] = useState('Trending Today');
    console.log(data?.data?.songs)
    if(isFetching) return <Loader title={genreTitle}/>
    if(error) return <Error/>

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <h2 className="text-left font-bold text-white text-3xl capitalize">
                        discover{genreTitle}

                    </h2>
                    <select className="bg-black text-gray-300 text-sm rounded-lg outline-none">
                        {genres.map((genre) => <option key={genre.value
                        }>{genre.title}</option>)}

                    </select>


                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                    
                    {data?.data?.songs.map((ele) => {
                        
                    return(<SongCard key={ele.id}
                        song={ele.name}
                        id={ele.id} />)    
                    })}

                </div>


            </div>

        </>
    );
};


export default Discover;
