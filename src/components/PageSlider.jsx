import React from "react";
import ReactSwipe from "react-swipe";
import { routers } from "./router";
import Buttons from "./Buttons";
import TagName from "../pages/Pages";

const PageSlider = () => {
   let reactSwipeEl
   return (
      <>
         <ReactSwipe
         className="carousel"
         swipeOptions={{ continuous: true }}
         ref={el => (reactSwipeEl = el)}
      >
         {routers.map((items, index) => <TagName name={items.name}/>)}
      </ReactSwipe>
      <Buttons text='PREVIOUS' onClick={()=> reactSwipeEl.prev()}/>
      <Buttons text='NEXT' onClick={()=> reactSwipeEl.next()}/>
      </>
   )
}

export default PageSlider