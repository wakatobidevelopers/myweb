import React from "react"
import darthvader from '../../assets/image/darthvader.png'
import Sections from "../../components/Sections";

const Home = (props) => {
   return (
      <div>
         <Sections
            name='HOME'
            title='LA ODE MIMSHAD'
            btnText='MORE ABOUT ME'
            desc="I'm a junior frontend developer who is passionate about creating websites."
            imgSrc={darthvader}
            flexItem={true}
            imgWidth='500'
         />
      </div>

      //    <div style={{display: "flex"}}>
      //    <div className="left">
      //       <Paragraph text='Hello there, Nice to meet you , I AM'/>
      //       <div className="title">
      //          <Title text='LA ODE' text2='MIMSHAD'/>
      //       </div>
      //       <Paragraph text="I'm a junior frontend developer who is passionate about creating websites."/>
      //       <Buttons text="MORE ABOUT ME" link='/about'/>
      //    </div>
      //    <div className="right">
      //       <img src={darthvader} alt="" width="600"/>
      //    </div>
      // </div>
    
   )
}

export default Home;