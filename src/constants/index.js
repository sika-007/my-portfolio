import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, quizzical, docker, meta, starbucks, tesla, shopify, jobit, tripguide, threejs, materialUI, yTClone, siktionary } from "../assets";
  
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Freelance Web Developer",
      icon: web,
    },
    {
      title: "Code Debugger",
      icon: backend
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];


  
  // The array below is subject to change as time goes on

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Self-Employed",
      icon: reactjs,   //Rwview thi later
      iconBg: "#383E56",
      date: "February, 2023 - March, 2023",
      points: [
        "Leveraged mastery of the material UI framework, react, CSS, and version control with Git and GitHub, to build top-quality code for diverse projects.",
        "Used the YouTube V3 API from RapidAPI's hub and dictionaryAPI from dictionaryapi.dev to fetch needed data.",
        "Debugged websites to identify and resolve potential problems.",
        "Created complex yet readable and maintainable code for react components and algorithms that convert raw data received from the APIs into dynamic and presentable information to give users the best experience.",
      ],
    },
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

  // The module below is still subject to change as more and more projects get completed
  
  const projects = [
    {
      name: "YouTube Clone",
      description:
        "Web-based platform that allows users to watch, search and interact with YouTube Videos and Channels.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapid API",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        }
      ],
      image: yTClone,
      source_code_link: "https://github.com/sika-007/youtube-clone",
      live_site_link: "https://yt-clone-by-sika.netlify.app"
    },
    {
      name: "Siktionary",
      description:
        "Web application that enables users to search words, their meanings, pronunciations - both audio and written, usage examples, synonyms, antonyms and so much more while providing a very attractive and intuitive user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "dictionaryapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: siktionary,
      source_code_link: "https://github.com/sika-007/siktionary",
      live_site_link: "https://siktionary.netlify.app"
    },
    {
      name: "Quizzical",
      description:
        "A light-weight and simple web application that renders an interactive and customizable quiz.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "opentdb API",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: quizzical,
      source_code_link: "https://github.com/sika-007/quizzical-app",
      live_site_link: "https://quizzical-application.netlify.app/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };