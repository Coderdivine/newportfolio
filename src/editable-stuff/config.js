// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#000,grey,crimson, #4484ce,#fff,black,whitesmoke, #ff9b11,black,grey,black, #9b59b6, #ff7f7f,blue, #ecf0f1,grey,black",
  firstName: "Ezechukwu",
  middleName: "Divine",
  lastName: "Chimdindu",
  message: "'Make it work, make it right, make it fast.'- 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.' ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Coderdivine",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/dnxcy",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_chimdi.xo_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/div the creator/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/Chimdi.xo/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/myimg.jpg"),
  imageSize: 375,
  message:
    "My name is Ezechukwu Divine Chimdindu. I'm most passionate about make electronics accessible to the many, and my goal is to pursue this passion within the field of Computer science. In my free time I like working on projects.",
  resume: "https://heischimdi.xyz",
  look:"' When asked why I like Mathematics, I realised that it is all down to my personality. Being a composed, explicit person, I enjoy the challenge of questions with unequivocal answers. My character’s orderly side draws me enthusiastically towards neat solutions, my creativity gives rise to my acceptance of new ideas and my positive mind results in my wish to succeed...'"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Coderdivine", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["weiscan","weiscanforum","weibooks","boxang"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/myimg.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/myimg.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"460",
    height:"615"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 81.3 },
    { name: "Data Structures", value: 85.6 },
    { name: "C/C++", value: 79.9 },
    { name: "JavaScript", value: 94.1 },
    { name: "React", value: 95 },
    { name: "HTML/CSS", value: 81.7 },
    { name: "C#", value: 78.5 },
    {name:"Native app",value:89.9}
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 81.3 },
    { name: "Organization", value: 70.2 },
    { name: "Creativity", value: 97.1 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Computer Science, Machine Learning ,Mobile App Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "chimdi4332@@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Mobile App Developer',// Here Add Company Name
      companylogo: require('../assets/img/alpha02.png'),
      date: 'April 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/alpha02.png'),
      date: 'October 20218 – Present',
    },
    {
      role: 'SQL Manager',// Here Add Company Name
      companylogo: require('../assets/img/alpha02.png'),
      date: 'JAN 2018 – Present',
    },
    {
      role: 'Website Developer',
      companylogo: require('../assets/img/alpha02.png'),
      date: 'DEC 2016 – Present',
    },
  ]
}

// Blog SECTION
 //const blog = {
   //show: false,
 //};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
