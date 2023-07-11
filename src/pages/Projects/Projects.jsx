import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { project } from "../../constans";
import ReactSwipe from 'react-swipe'
import ProjectSlider from "../../components/ProjectsSlider";
import Sections from "../../components/Sections";


const Projects = () => {
   return <div>
      <Sections
         name='PROJECTS'
         flexItem={false}
         btn={false}
      />
      {/* <Title text='PROJECTS' />
      <Paragraph text="I was responsible for the front end of the website, and I'm proud to say that it was well received by the client and effective in increasing sales. You can check out my portfolio for other projects that I've worked on." />
      <ProjectSlider/> */}
   </div>
}

export default Projects;