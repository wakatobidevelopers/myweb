import React from "react";
import Sections from "../components/Sections";
import { sections } from "../constans";
import video from "../assets/video.mp4"
import ReactSwipe from "react-swipe";

const TagName = ({ name }) => {
   return <div className="main">
      <video className="absolute w-full h-full object-cover z-[-999]" src={video} autoPlay loop muted/>
      {sections.filter((items) => items.Components === name)
         .map((items, index) => <Sections key={index}
         name={items.Components}
            text1={items.title.text1}
            text2={items.title?.text2}
         btnText={items.button?.btnText}
         btn={items.button?.value}
         desc={items.description}
         imgSrc={items.img?.src}
         flexItem={items.flexItem}
         imgWidth={items.img?.width}
      />)}
   </div>
} 
export default TagName;