//Social Media Imports
import { ReactComponent as Github } from "./assets/icons/social-media/Github.svg";
import { ReactComponent as LinkedIn } from "./assets/icons/social-media/linkedin.svg";
import { ReactComponent as Facebook } from "./assets/icons/social-media/facebook.svg";
import { ReactComponent as Instagram } from "./assets/icons/social-media/instagram.svg";

//Projects Imports
import Contacts from '../src/assets/image/projects/Contacts.png'
import Hobbies from '../src/assets/image/projects/Hobbies.png'
import Homepage from '../src/assets/image/projects/Homepage.png'
import Skills from '../src/assets/image/projects/Skills.png'

//Skills Imports
import { ReactComponent as HTML } from '../src/assets/icons/tech/html.svg'
import { ReactComponent as CSS } from '../src/assets/icons/tech/css.svg'
import { ReactComponent as Tailwind } from '../src/assets/icons/tech/tailwind.svg'
import { ReactComponent as JavaScript } from '../src/assets/icons/tech/javascript.svg'
import { ReactComponent as ReactJs } from '../src/assets/icons/tech/react.svg'

//sections imports
import darthvader from '../src/assets/image/darthvader.png'
import hacker from '../src/assets/image/hacker.png'

export const contacts = [
   {
      title: 'PHONE NUMBER',
      contact: '+6285258168756'
   },
   {
      title: 'EMAIL',
      contact: 'mimshadd@email.com'
   },
   {
      title: 'PHYSCHAL ADDRESS',
      contact: 'Yogyakarta'
   }
]

export const SocialIcon = [
   {
      name: 'Github',
      icon: <Github />,
      link: ''
   },
   {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      link: ''
   },
   {
      name: 'Facebook',
      icon: <Facebook/>,
      link: ''
   },
   {
      name: 'Instagram',
      icon: <Instagram />,
      link: ''
   }
]

export const project = [
   {
      id: 1,
      title: "Project 1",
      description: "nvjfdnnjdvjnnnvjdnjvnvjdn",
      image: Skills
   },
   {
      id: 2,
      title: "Project 2",
      description: "nvjfdnnjdvjnnnvjdnjvnvjdn",
      image: Contacts
   },
   {
      id: 3,
      title: "Project 3",
      description: "nvjfdnnjdvjnnnvjdnjvnvjdn",
      image: Homepage
   },
   {
      id: 4,
      title: "Project 4",
      description: "nvjfdnnjdvjnnnvjdnjvnvjdn",
      image: Hobbies
   }
]

export const skills = [
   {
      id: 1,
      title: 'HTML',
      icon: <HTML/>
   },
   {
      id: 2,
      title: 'CSS',
      icon: <CSS/>
   },
   {
      title: 'Tailwind',
      icon: <Tailwind/>
   },
   {
      title: 'Javascript',
      icon: <JavaScript/>
   },
   {
      title: 'ReactJs',
      icon: <ReactJs/>
   }
]


export const sections = [
   {
      Components: 'Home',
      title: {
         text1: 'LA ODE',
         text2: 'MIMSHAD'
      },
      description: "I'm a junior frontend developer who is passionate about creating websites.",
      button: {
         value: true,
         btnText: 'MORE ABOUT ME',
         path: '/about',
         action : ''
      },
      img: {
         src: darthvader,
         width: '500px'
      },
      flexItem : false
   },
   {
      Components: 'About',
      title: {
         text1: 'WHO AM I'
      },
      description: "Hi, I'm La Ode Mimshad! I'm a passionate junior frontend developer with a strong desire to learn and grow in web development. I have experience and education in frontend development, which has helped me develop an eye for design and creating clean, user-friendly interfaces. I'm skilled in HTML, CSS, JavaScript, as well as frameworks like React and Vue.js. My goal is to deliver high-quality code and solutions to every project I work on. I'm always eager to learn from my peers and mentors to improve my skills. Let's collaborate and create amazing web experiences together!",
      button: {
         value: true,
         btnText: 'DOWNLOADS CV',
         action: ''
      },
      img: {
         src: hacker,
         width: '500px'
      },
      flexItem : true
   },
   {
      Components: 'Skills',
      title: {
         text1: 'SKILLS'
      },
      description: "I'm proficient in HTML, CSS, and JavaScript. I'm familiar with various JavaScript frameworks such as React and Angular JS. I have experience working with Bootstrap and Materialize CSS for faster development and responsive web design. I'm constantly working on improving my coding skills and keeping up with the latest web technologies.",
      button: {
         value: false
      },
      flexItem: false
   },
   {
      Components: 'Hobbies',
      title: {
         text1: 'HOBBIES'
      },
      description: "When I'm not coding, I love spending time in the great outdoors! You can find me hiking or cycling with my friends, or perhaps trying out different cuisines at local restaurants."
   },
   {
      Components: 'Projects',
      title: {
         text1: 'RPOJECTS'
      },
      button: {
         value: false,
         next: function (){
            let reactSwipeEl
            return reactSwipeEl.next()
         },
         prev: function () {
            let reactSwipeEl
            return reactSwipeEl.prev()
         }
      },
      flexItem: false
   },
   {
      Components: 'Contacts',
      title: {
         text1: 'CONTACTS'
      },
      desc: "Interested in working together? Let's connect! You can reach out to me via email, phone, or by filling out the contact form below. I look forward to hearing from you!",
      button: {
         value: false
      },
      flexItem: false
   }
]