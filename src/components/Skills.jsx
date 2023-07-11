import React from "react";
import { skills } from "../constans";

const Skills = () => {
   return (
      <div>
         {skills.map((items, index) => <div key={items.id}>
            <span>{items.icon}</span>
         </div>)}
      </div>
   )
}

export default Skills;