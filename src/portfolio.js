/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1250 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Christopher L. Biddle, Jr.",
  title: "Hi, I'm Chris",
  subTitle: emoji(
    "I'm a Software Developer specializing in front-end development, UX, and data analysis. Proficient in Python, NodeJS, and React, I create seamless, high-performance web apps. My projects range from building e-commerce platforms to novel GPT use cases. I thrive in collaborative environments and am eager to join a team where I can expand my full-stack skills and contribute to impactful projects."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chris01b",
  linkedin: "https://www.linkedin.com/in/chris01b",
  gmail: "cbid@sas.upenn.edu",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO THRIVES ON BUILDING AND ENHANCING WEB APPLICATIONS",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square" // TODO: Replace
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-arrow-circle-right" // TODO: Replace
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft" // TODO: Replace
    },
    {
      skillName: "ASP.NET MVC",
      fontAwesomeClassname: "fas fa-network-wired" // TODO: Replace
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire" // TODO: Replace
    },
    {
      skillName: "Cloud Firestore",
      fontAwesomeClassname: "fas fa-cloud" // TODO: Replace
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fas fa-credit-card" // TODO: Replace
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "Greasemonkey",
      fontAwesomeClassname: "fab fa-js-square" // TODO: Replace
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "RabbitMQ",
      fontAwesomeClassname: "fas fa-stream" // TODO: Replace
    },
    {
      skillName: "Ethical Hacking",
      fontAwesomeClassname: "fab fa-black-tie"
    },
    {
      skillName: "Reverse Engineering",
      fontAwesomeClassname: "fas fa-angle-double-left"
    }
  ],

  skills: [
    emoji("⚡ Develop interactive front end / user interfaces for web applications"),
    emoji("⚡ Implement robust back-end architectures using NodeJS or Python"),
    emoji("⚡ Comfortable applying advanced mathematical concepts")
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Pennsylvania",
      logo: require("./assets/images/pennLogo.webp"),
      subHeader: "Bachelor of Arts in Mathematical Economics",
      duration: "September 2019 - May 2023",
      desc: "Relevant Coursework:",
      descBullets: [
        "Programming Languages and Techniques I/II, Big Data Analytics",
        "Mathematical Foundations of Computer Science, Computational Linear Algebra, Advanced Calculus I/II",
        "Econometric Data Science/Methods & Models/Machine Learning",
        "Product Design"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "0%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "0%"
    },
    {
      Stack: "Programming",
      progressPercentage: "0%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Grapevine Technologies",
      companylogo: require("./assets/images/grapevineLogo.jpg"),
      date: "Jun 2022 – Aug 2022",
      desc: "Led the development of complex front-end functionalities for an e-commerce platform, focusing on enhancing UX and load times, successfully reducing response times by up to 20%."
    },
    {
      role: "Software Engineering Intern",
      company: "Nobias",
      companylogo: require("./assets/images/nobiasLogo.png"),
      date: "Jun 2021 – Apr 2022",
      desc: "Developed and optimized front-end features for a data-driven financial platform, significantly improving the data handling and user interaction."
    },
    {
      role: "Software Engineering Intern",
      company: "Aegis Software",
      companylogo: require("./assets/images/aegisLogo.jpg"),
      date: "Jun 2019 – Aug 2019",
      desc: "Enhanced machine-to-machine communication standards and compliance testing processes, significantly cutting down operational timelines."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Licenses 🏆 "),
  subtitle:
    "Some nerdy stuff that I have done for fun!",

  achievementsCards: [
    {
      title: "Microsoft Technical Associate (3)",
      subtitle:
        "Certified in Networking Fundementals, Security Fundementals, and Windows Server Administration Fundementals",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/mta-retirement-faqs"
        }
      ]
    },
    {
      title: "Amateur Radio Operator License",
      subtitle:
        "Completed the Technician class license exam covering basic regulations, operating practices and electronics theory, with a focus on VHF and UHF applications",
      image: require("./assets/images/fccLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "License",
          url: "http://www.arrl.org/getting-your-technician-license"
        }
      ]
    },
    {
      title: "Microsoft Certified Professional",
      subtitle:
        "Microsoft Certified Professional was a certification program from Microsoft",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://en.wikipedia.org/wiki/Microsoft_Certified_Professional"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Connect with me on LinkedIn.",
};

// Twitter Section

const twitterDetails = {
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
