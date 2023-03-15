import { useParams } from "react-router-dom";
import { DetailsHeader } from "../components"
import { useGetsongQuery, useGetsonglyricsQuery } from "../redux/apiServices/shazamcore";
const SongDetails = () => {
    const { songid } = useParams();
    const { data: songdata, } = useGetsongQuery(songid);
    const {data:songLyrics, } = useGetsonglyricsQuery("mPTrDSun");
    // console.log(songdata?.data);
    return (
        <div className="flex flex-col ">
            <DetailsHeader songdata={songdata}  />
            <div className="mt-4 mb-10">
                <div>

                </div>
                <h2 className=" text-white font-bold text-3xl  m-3">Artist :  {songdata?.data[0].primaryArtists}</h2>
                <h2 className=" text-white font-bold text-3xl m-3">Released-Year :  {songdata?.data[0].year}</h2>
                <h2 className=" text-white font-bold text-3xl m-3">Lyrics:</h2>
                <div>
                {songdata?.data[0].hasLyrics?<p className="text-white font-sans text-xl w-[calc(100%-20px)]">{songLyrics?.data?.lyrics}</p>:<p className="text-white font-bold text-3xl ">sorry no lyrics</p>}
                
                </div>
            </div>

        </div>
    )
};

export default SongDetails;
