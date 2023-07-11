import React from "react";
import Buttons from "./Buttons";
import Title from "./Title";
import Paragraph from "./Paragraph";
import ProjectSlider from "./ProjectsSlider";
import Contacts from "./Contacts";
import Skills from "./Skills";



const Sections = ({ name, title, desc, flexItem = true, btn = true, btnText, btnLink, btnCLick, btnSubmit, socialMedia, projects, contacts, imgSrc, imgWidth }) => {
   return <div className="">
      <div style={ flexItem ? {display:"flex"} : {} }>
         <div className="flexCol">
            <Title text={title}/>
            <Paragraph text={desc} />
            {!btn ? '' : <Buttons text={btnText} link={btnLink} onClick={btnCLick} onSubmit={btnSubmit} />}
            {socialMedia}
            {projects}
            {contacts}
            {name === 'Projects' && <ProjectSlider/>}
            {name === 'Contacts' && <Contacts/>}
            {name === 'Skills' && <Skills/>}
         </div>
         <img src={imgSrc} alt='' width={imgWidth}/>
      </div>
      <h1>{name}</h1>
   </div>
}

export default Sections;