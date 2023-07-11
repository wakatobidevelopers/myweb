import React from "react";

const Title = ({text, text2, style}) => {
   return <div>
      <h1 className=" text-blue-600">{text}
         <br /><span>{text2}</span>
      </h1>
   </div>
}

export default Title;