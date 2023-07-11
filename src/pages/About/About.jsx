import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import hacker from '../../assets/image/hacker.png'
import Paragraph from "../../components/Paragraph";
import Sections from "../../components/Sections";

const About = () => {
   return <div>
      <Sections
         name='ABOUT'
         title='WHO AM I ?'
         btnText='DOWNLOADS CV'
         desc="Hi, I'm La Ode Mimshad! I'm a passionate junior frontend developer with a strong desire to learn and grow in web development. I have experience and education in frontend development, which has helped me develop an eye for design and creating clean, user-friendly interfaces. I'm skilled in HTML, CSS, JavaScript, as well as frameworks like React and Vue.js. My goal is to deliver high-quality code and solutions to every project I work on. I'm always eager to learn from my peers and mentors to improve my skills. Let's collaborate and create amazing web experiences together!"
         imgSrc={hacker}
         flexItem={true}
         imgWidth='500'
      />
      {/* <div style={{ display:"flex"}}>
      <div className="left">
         <Title text='WHO AM I ?' />
         <Paragraph text="Hi, I'm La Ode Mimshad! I'm a passionate junior frontend developer with a strong desire to learn and grow in web development. I have experience and education in frontend development, which has helped me develop an eye for design and creating clean, user-friendly interfaces. I'm skilled in HTML, CSS, JavaScript, as well as frameworks like React and Vue.js. My goal is to deliver high-quality code and solutions to every project I work on. I'm always eager to learn from my peers and mentors to improve my skills. Let's collaborate and create amazing web experiences together!"/>
         <Buttons text='DOWNLOAD CV'/>
         </div>
         <div className="right">
            <img src={hacker} alt="" width="600"/>
         </div>
      </div> */}
      <div className="link">
         <Link to='/about/skills'>Skills</Link>
         <Link to='/about/hobbies'>Hobbies</Link>
         <Outlet />
      </div>
   </div>
}

export default About;