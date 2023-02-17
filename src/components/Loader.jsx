import {loader} from '../assets';
const Loader = ({title}) => (
 
    <>
    <div className='flex justify-center item-cnter flex-col'>
      <img src={loader} alt="loader" className='w-32 h-32 object-contain' />
      <h2 className='text-white font-bold mt-2 text-2xl'>{title || "Loading..."}</h2>
    </div>

    </>
  
);

export default Loader;
