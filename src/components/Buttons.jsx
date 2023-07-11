import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({link, onClick, onSubmit, text}) => {
   return (
      <button onClick={onClick} onSubmit={onSubmit}>
         <Link to={link}>{ text }</Link>
      </button>
      )
}

export default Buttons;