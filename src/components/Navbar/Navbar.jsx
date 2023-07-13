import React from "react";
import NavLinks from "./NavLink";
import { useReducer } from "react";
import reducer from "../../reducers";
import { ReactComponent as TopArrow } from "../../assets/icons/topArrow.svg";

const Navbar = (props) => {
   const [menu, dispatch] = useReducer(reducer, false);
   const topArrow = [];

   for (let i = 1; i <= 3; i++){
      topArrow.push(<TopArrow key = {i}/>)
   }

   return <>
      <NavLinks Show={menu} liOnClick={() => dispatch({type: 'CLOSE_MENU'})}/>
      <div className="menu absolute flex-col flex w-full justify-center bottom-0 bg-blue-80 items-center gap-4">
         <div className={`arrow ${menu ? 'hidden' : 'flex'} flex-col h-20`}>
            {topArrow}
         </div>
         <button className="bg-white w-40 h-12" onClick={() => dispatch({ type: 'CLOSE_MENU' })}>{menu ? <span>Close</span> : <span>Menu</span>}</button>
      </div>
   </>
}

export default Navbar;