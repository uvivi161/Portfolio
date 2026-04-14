import {
  mobile,
  backend,
  creator,
  web,
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  devNote,
  INNOVIZ,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  devnote,
  todo,
  recipe,
  cli,
  meyEden,
  game,
  // threejs,
} from "../assets";
// import codebeamer from "../assets/tech/codebeamer.png";
import claude from "../assets/tech/claude.png";
// import cantata from "../assets/tech/cantata.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "AI & LLM Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   // {
//   //   name: "Redux Toolkit",
//   //   icon: redux,
//   // },
//   // {
//   //   name: "Tailwind CSS",
//   //   icon: tailwind,
//   // },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   // {
//   //   name: "Three JS",
//   //   icon: threejs,
//   // },
//   {
//     name: "git",
//     icon: git,
//   },
//   // {
//   //   name: "genkins",
//   //   icon: genkins,
//   // },
//   // {
//   //   name: "figma",
//   //   icon: figma,
//   // },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];


const technologies = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },

  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },

  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  { name: "Appium",  icon: "https://cdn.simpleicons.org/appium",},

  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },

  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },

  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },

  { name: "Claude Code", icon: claude },

  { name: "Python",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  
];


const experiences = [
  {
    title: "FullStack Developer",
    // company_name: "Independent",
    icon: devNote,
    iconBg: "#12121a",
    date: "2025",
    points: [
      "Developed an end-to-end full-stack application with a .NET backend and a modern frontend using Angular 17 and React.",
      "Designed and implemented RESTful APIs to enable efficient and secure client–server communication.",
      "Deployed and operated the application in a cloud environment (Render) with an emphasis on stability and reliability.",
      "Utilized AWS services for storage and resource management, ensuring scalability and performance.",
      "Integrated AI features based on Large Language Models (LLMs) to enhance system capabilities and user experience."
    ],
  },
  {
    title: "Embedded Automation Engineer",
    company_name: "INNOVIZ",
    icon: INNOVIZ,
    iconBg: "#060222",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DevNote",
    description:
      "An intelligent full-stack team meeting management system, integrating AI for file handling and transcription.",
    tags: [
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "yellow-text-gradient",
      },
      {
        name: "SQLServer",
        color: "green-text-gradient",
      },
      {
        name: "AI-LLM",
        color: "purple-text-gradient",
      },
      {
        name: "AWS-S3",
        color: "red-text-gradient",
      }
    ],
    image: devnote,
    source_code_link: "https://github.com/uvivi161/Fullstack-Project",
    live_link:"https://fullstack-project-react.onrender.com/"
  },
  {
    name: "TO DO List",
    description:
      "Web application that enables users to create, view, and manage tasks in a simple and intuitive way.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "render",
        color: "yellow-text-gradient",
      }
    ],
    image: todo,
    source_code_link: "https://github.com/uvivi161/practicode-ToDoList-Client",
    live_link: "https://todolistclient-bxa6.onrender.com/"
  },
  {
    name: "Recipe website",
    description:
      "A professional recipe web application providing a curated collection of recipes with easy browsing and viewing.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/uvivi161/React/tree/main",
  },
  {
    name: "CLI command",
    description:
      "A CLI tool that scans submission directories and produces a clean, structured output containing only relevant content for efficient review.",
    tags: [
      {
        name: ".Net",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      }
    ],
    image: cli,
    source_code_link: "https://github.com/uvivi161/CLI-command/tree/main",
  },
  {
    name: "Corporate Website",
    description:
      "A responsive and visually engaging corporate website designed as an accurate and polished representation of the Mei Eden brand.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "yellow-text-gradient",
      },
      {
        name: "responsive design",
        color: "red-text-gradient",
      }
    ],
    image: meyEden,
    source_code_link: "https://github.com/uvivi161/Mey-Eden",
    live_link:"https://mey-eden.onrender.com"
  },
    {
    name: "Online Game",
    description:
      "An engaging online game where players control a character using arrow keys to catch falling candies while avoiding bombs, featuring progressive difficulty levels and persistent score tracking.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "yellow-text-gradient",
      },
      {
        name: "storage",
        color: "red-text-gradient",
      }
    ],
    image: game,
    source_code_link: "https://github.com/uvivi161/Catch-The-Candies",
    live_link:"https://catch-the-candies.onrender.com"
  },
];

export { services, technologies, experiences, testimonials, projects };
