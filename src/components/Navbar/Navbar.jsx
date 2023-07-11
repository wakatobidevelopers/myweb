import React from "react";
import NavLinks from "./NavLink";
import { useState } from "react";
import MobileMenu from "../Mobilemenu";
import { ReactComponent as TopArrow } from "../../assets/icons/topArrow.svg";

const Navbar = () => {
   const [show, setShow] = useState(false);

   const Toggle = () => {
      setShow(!show);
   }
   return <>
      <NavLinks Show={show} />
      <div className="menu absolute flex-col flex w-full justify-center bottom-0 bg-blue-80 items-center gap-4">
         <div className={`arrow ${show ? 'hidden' : 'flex'} flex-col h-20`}>
            <TopArrow/>
            <TopArrow/>
            <TopArrow/>
         </div>
         {show ? <button className="bg-white w-40 h-12" onClick={() => Toggle()}>CLOSE</button> :  <button className="bg-white w-40 h-12" onClick={() => Toggle()}>MENU</button>}
        
      </div>
   </>
}

export default Navbar;