import React from "react";
import Sections from "../components/Sections";
import { sections } from "../constans";
import ReactSwipe from "react-swipe";

const TagName = ({ name }) => {
   return <div>
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