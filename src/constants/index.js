import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  next,
  materialUI,
  quizzical,
  threejs,
  yTClone,
  siktionary,
  sumz,
  slog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    icon: creator,
  },
  {
    title: "JavaScript Debugger",
    icon: mobile,
  },
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
    name: "Tailwindcss",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Material UI",
    icon: materialUI,
  },
  {
    name: "Next JS",
    icon: next,
  },
];

// The array below is subject to change as time goes on

const experiences = [
  {
    title: "Frontend Engineer Volunteer",
    company_name: "United States of Africa (USA, Remote)",
    icon: typescript,
    iconBg: "white",
    date: "June, 2023 - Present",
    points: [
      "Built UI components using JSX, tailwind CSS, and HTML tables to enable user track recorded videos and information related to them.",
      "Collaborated in an Agile manner with a team of diverse members. Participated in in 100% of daily scrums.",
      "Collaborated in an Agile manner with cross-functional team sprints and participated with 100% of scrums held 3 times a week.",
      "Created efficient, readble and maintainable functions with JavaScript for ordering tabled items by date created, alphabetically, size, etc.",
      "Contributed to the project hosted on GitHub using git and ensuring a clean and ordered commit history for other developers to follow along.",
      "Used tools such as Trello, and WhatsApp to stay up to date on tasks and to also have seamless communication with scrum masters, team leads, and members",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company_name: "Evvent As (Norway, Remote)",
    icon: next,
    iconBg: "white",
    date: "June, 2023 - August, 2023",
    points: [
      "Built UI components and pages using React, TypeScript and NextJS which greatly improved dynamic routing, improved the SEO metrics of the application.",
      "Implemented efficient state management solutions using React-Redux, Redux-toolkit, and Redux-Persist.",
      "Collaborated in an Agile manner with cross-functional team sprints and participated with 100% of scrums held 3 times a week.",
      "Created a Schema for service listings and bookings alongside a team of software developers, business developers, customer success staff and UX designers to ensure efficient and streamlined data collection.",
      "Contributed to the project hosted on GitHub using git, managed pull requests, and participated in code reviews.",
      "Used tools such as Slack, Asana, Meet, and GitHub Projects to stay up to date on tasks and to also have seamless communication with team leads and members",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Self-Employed",
    icon: reactjs,
    iconBg: "#383E56",
    date: "February, 2023 - June, 2023",
    points: [
      "Contributed to a variety of open-source projects by streamlining and testing code, fixing bugs and adding features.",
      "Leveraged mastery of React, Material UI, DOM manipulation, Logic iplementation with JavaScript, CSS, tailwindcss, Three.js, SCSS, Framer Motion and version control with Git and GitHub, to build top-quality code for over 10 personal and open-source projects.",
      "Implemented fetching and usage of data from an array of APIs in Rapid API's Hub, dictionaryapi.dev API, and opentdb.com API",
      "Debugged websites to identify and resolve potential problems.",
      "Created complex yet readable and maintainable code for react components and algorithms that convert raw data received from the APIs into dynamic and presentable information to give users the best experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

// The module below is still subject to change as more and more projects get completed

const projects = [
  {
    name: "The Slog",
    description:
      "My own blog where I post weekly original content about frontend tools, frameworks and best practices. If you love web development as much as I do and want to send in a post, I would love for us to have a chat.",
    tags: [
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "SASS",
        color: "blue-text-gradient",
      },
    ],
    image: slog,
    source_code_link: "https://github.com/sika-007/slog",
    live_site_link: "https://slog-kappa.vercel.app/",
  },
  {
    name: "Sumz",
    description:
      "A web application that takes advantage of text mining artificial intelligence to give a summary of text in any website.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/sika-007/ai-summarizer",
    live_site_link: "https://sumz-by-sika.netlify.app/",
  },
  {
    name: "YouTube Clone",
    description:
      "A Web-based platform that allows users to watch, search and interact with YouTube Videos and Channels.",
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
      },
    ],
    image: yTClone,
    source_code_link: "https://github.com/sika-007/youtube-clone",
    live_site_link: "https://yt-clone-by-sika.netlify.app",
  },
  {
    name: "Siktionary",
    description:
      "A Web application that enables users to search words, their meanings, pronunciations - both audio and written, usage examples, synonyms, antonyms and so much more while providing a very attractive and intuitive user experience.",
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
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: siktionary,
    source_code_link: "https://github.com/sika-007/siktionary",
    live_site_link: "https://siktionary.netlify.app",
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
    live_site_link: "https://quizzical-application.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
