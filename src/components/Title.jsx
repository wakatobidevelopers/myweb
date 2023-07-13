import React from "react";

const Title = ({text, text2, style}) => {
   return <div className=" pt-12">
      <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#EA8E53] from-20% via-blue-700 to-[#2F3FD1] to-90%  text-[2.8rem] text-center">{text}
      </h1>
      <h1 className="text-[2.8rem] text-transparent bg-clip-text bg-gradient-to-r from-white text-center from-20% via-blue-700 to-[#2F3FD1] to-90%">{text2}</h1>
   </div>
}

export default Title;