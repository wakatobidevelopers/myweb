import React from "react";
import { useState } from "react";
import { ReactComponent as TopArrow } from "../assets/icons/topArrow.svg";

const MobileMenu = (btnClick) => {
   return <>
      <div className="menu absolute flex-col flex w-full justify-center bottom-0 bg-blue-80 items-center gap-4">
         <div className="arrow flex flex-col h-20">
            <TopArrow/>
            <TopArrow/>
            <TopArrow/>
         </div>
         <button className="bg-white w-40 h-12" onClick={() => btnClick}>MENU</button>
      </div>
   </>
}
export default MobileMenu;