import React from "react";
import { SongCard, Error, Loader } from '../components'
import { genres, genres } from '../assets/constants'
import { usegettopchartQuery } from "../redux/apiServices/shazamcore";
const Discover = () => {
    const {data, isFetching,error} = usegettopchartQuery();
    genreTitle = pop;
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


                </div>


            </div>

        </>
    );
};


export default Discover;
