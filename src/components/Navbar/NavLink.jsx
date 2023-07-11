import React from "react";
import { NavLink } from "react-router-dom";
import { routers } from "../router";

const NavLinks = ({Show=true}) => {
   return (
      <>
         <ul className={`absolute h-full bg-black w-full text-white text-center ${!Show ? 'hidden' : 'flex'} flex-col items-center justify-center text-[1.3rem] gap-16`}>
         {routers.filter((items, index) => items.name !== 'Skills' && items.name !== 'Hobbies').map((items, index) => 
            <li key={index}><NavLink activeClassName='active' to={items.path}>{items.name}</NavLink></li>
         )}
      </ul>
      </>
   )
}

export default NavLinks