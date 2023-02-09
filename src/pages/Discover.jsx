import {genres} from '../assets/constants'
const Discover = () => {
    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between flex-col items-center sm:flex-row">
                <h2 className="font-bold text-left text-white text-3xl">Discover</h2>
                <select className="bg-black p-3 text-gray-300 rounded-lg outline-none sm:mt-0 mt-5">
                 {genres.map((genre)=>{
            
                      <option key={genre.value}>{genre.title}</option>
                 })}   

                </select>

            </div>

        </div>
    )
};

export default Discover;
