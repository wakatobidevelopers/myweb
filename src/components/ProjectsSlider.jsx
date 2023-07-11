import React from "react";
import ReactSwipe from "react-swipe";
import { project } from "../constans";
import Buttons from "../components/Buttons"

const ProjectSlider = () => {
   let reactSwipeEl
   return <div>
      <ReactSwipe
         className="carousel"
         swipeOptions={{ continuous: true }}
         ref={el => (reactSwipeEl = el)}
      >
         {project.map((items, index) => <div key={index}>
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <img src={items.image} alt="" width='450' />
         </div>)}
      </ReactSwipe>
      <Buttons text='PREVIOUS' onClick={()=> reactSwipeEl.prev()}/>
      <Buttons text='NEXT' onClick={()=> reactSwipeEl.next()}/>
   </div>
}

export default ProjectSlider;