import React from "react";
import { contacts, SocialIcon } from "../constans";

const Contacts = () => {
   return <div>
      {contacts.map((items) => <div>
         <h4>{items.title}</h4>
         <span>{items.contact}</span>
      </div>)}
      <hr />
      {SocialIcon.map((items) => <div>
         {items.icon}
      </div>)}
   </div>
}

export default Contacts;