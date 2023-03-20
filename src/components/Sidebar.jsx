import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { logo } from "../assets/index";
import { RiCloseLine } from "react-icons/ri"
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";


const Sidebar = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      <div className="md:flex flex-col hidden w-[240px] bg-gradient-to-tl from-black to-[#201a09]">
        <img src={logo} alt="logo" className="object-contain w-full h-14 " />
        <div className="m-2">

          {links.map((item) => {

            return (
              <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row m-3 justify-start text-lg font-medium text-gray-400
        hover:text-cyan-400">
                <item.icon className="w-6 h-6 mr-2" />
                {item.name}



              </NavLink>
            )
          })}
        </div>



      </div>
      {/* for 3dot to open or close the sidebar in the mobile-view */}
      <div className="md:hidden block h-screen absolute top-6 right-3">
        {MobileMenuOpen ? <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => {  console.log(MobileMenuOpen)
          setMobileMenuOpen(false)
          console.log(MobileMenuOpen)
        }} /> : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() =>
         { console.log(MobileMenuOpen)
          setMobileMenuOpen(true)
          console.log(MobileMenuOpen)}} />}

      </div>
      {/* side-bar transition implementation on mobile device   */}
      <div className={`absolute md:hidden ${MobileMenuOpen ? 'left-0' : '-left-full'} top-0 h-screen w-2/3 smooth-transition backdrop-blur-lg bg-gradient-to-tl from-white/10 to-[#937e44] z-10 p-3`}>
        <img src={logo} alt="logo" className="object-contain w-full h-14 " />
        <div>

          {links.map((item) => {

            return (
              <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start text-sm font-medium text-white
      " onClick={()=>(setMobileMenuOpen(false))}>
                <item.icon className="w-6 h-6 mr-2" />
                {item.name }



              </NavLink>
            )
          })}
        </div>

      </div>
    </>
  );
}
  ;

export default Sidebar;
