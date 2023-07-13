import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as BtnFrame} from '../assets/icons/btnFrame.svg'

const Buttons = ({link, onClick, onSubmit, text}) => {
   return <div className="text-center flex items-center justify-center my-14">
      <BtnFrame className='absolute '/>
      <button className="btn bg-white border-0 p-3" onClick={onClick} onSubmit={onSubmit}>
         <Link to={link}>{ text }</Link>
      </button>
   </div>
}

export default Buttons;