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
  yTClone,
  siktionary,
  sumz,
  slog,
  dkg,
  evvent,
  migro,
  python,
  fastapi,
  cando,
  nextAdmin,
  migro_portfolio,
  kindocean,
  mertra,
  aimgreen,
  liquid,
} from "../assets";
import { muhammad, sifon, zakaria } from "../assets/people";

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
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "E-Commerce Developer",
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
    name: "Liquid",
    icon: liquid,
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
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: next,
  },
];

// The array below is subject to change as time goes on

const experiences = [
  {
    title: "Lead Fullstack/Frontend Developer",
    company_name: "Migro",
    icon: migro,
    iconBg: "white",
    date: "February, 2024 - May, 2024",
    points: [
      "Built about 100+ frontend components using React, TailwindCSS and a number of other libraries and tools.",
      "Developed resilient state management solutions using React-Redux, Redux Toolkit, and Redux-Persist to improve performance and ease of maintenance.",
      "Optimized storage of vital user data while adhering to best practices, causing a 20% improvement in data access speed and maintaining a 98% data integrity rate.",
      "As the sole developer under the CEO's direction, I embraced Agile practices, contributing to 15+ scrums, accounting for over 90% of all sessions.",
      "Played a key role in defining the software architecture on both the client-side and server-side, implementing robust design patterns that contributed to scalability and maintainability of the application architecture.",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company_name: "Evvent As (Norway, Remote)",
    icon: evvent,
    iconBg: "white",
    date: "June, 2023 - December, 2023",
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
    title: "Frontend Engineer Contractor",
    company_name: "Deep Knowledge Group (UK, Remote)",
    icon: dkg,
    iconBg: "white",
    date: "September, 2023 - October, 2023",
    points: [
      "Developed Dynamic and interconnected geo-map components, bar Charts, and pie-charts using react-simple maps resulting in the creation of over 100 digital map regions for seamless data visualization.",
      "implemented and modified open-source Topojson and Geojson map data for rendering of dynamic maps on the UI.",
      "Collaborated in an Agile manner with a team of cross-functional and diverse members.",
      "Implemented the use of version control tools like git and Microsoft’s Azure DevOps on an advanced level for efficient collaboration with over 30 developers on a single repository.",
      "Collated and implemented project and feature requirements from users (in-house data analysts).",
    ],
  },
  {
    title: "Frontend Engineer Volunteer",
    company_name: "United States of Africa (USA, Remote)",
    icon: typescript,
    iconBg: "white",
    date: "June, 2023 - September, 2023",
    points: [
      "Built UI components using JSX, tailwind CSS, and HTML tables to enable user track recorded videos and information related to them.",
      "Collaborated in an Agile manner with a team of diverse members. Participated in in 100% of daily scrums.",
      "Collaborated in an Agile manner with cross-functional team sprints and participated with 100% of scrums held 3 times a week.",
      "Created efficient, readable and maintainable functions with JavaScript for ordering tabled items by date created, alphabetically, size, etc.",
      "Contributed to the project hosted on GitHub using git and ensuring a clean and ordered commit history for other developers to follow along.",
      "Used tools such as Trello, and WhatsApp to stay up to date on tasks and to also have seamless communication with scrum masters, team leads, and members",
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
      "Leveraged mastery of React, Material UI, DOM manipulation, Logic implementation with JavaScript, CSS, tailwindcss, Three.js, SCSS, Framer Motion and version control with Git and GitHub, to build top-quality code for over 10 personal and open-source projects.",
      "Implemented fetching and usage of data from an array of APIs in Rapid API's Hub, dictionaryapi.dev API, and opentdb.com API",
      "Debugged websites to identify and resolve potential problems.",
      "Created complex yet readable and maintainable code for react components and algorithms that convert raw data received from the APIs into dynamic and presentable information to give users the best experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "...One of Nsikak's standout qualities is his creativity and resilience in completing tasks. He would always find a way to tackle problems no matter how difficult they seemed to be. This was very essential to us as a startup.",
    name: "Zakaria B.",
    designation: "CTO",
    company: "Evvent AS",
    image: zakaria,
  },
  {
    testimonial:
      "Nsikak viewed my design from a fresh angle. In addition to his skill as a front-end developer, Nsikak's disposition boosts the spirit of teamwork. Not to mention that Nsikak is a trustworthy man who gives his all to the tasks he does.",
    name: "Mohammad N.",
    designation: "UI/UX Designer",
    company: "Evvent AS",
    image: muhammad,
  },
  {
    testimonial:
      "Nsikak was instrumental in enhancing my online reach by helping me build a portfolio website. He exceeded my expectations. I highly recommend him as a Web developer for your project!",
    name: "Sifon T.",
    designation: "Top Rated Freelancer",
    company: "Upwork",
    image: sifon,
  },
];

// The module below is still subject to change as more and more projects get completed

const projects = [
  {
    name: "Kind Ocean E-commerce Website",
    description:
      "Custom shopify e-commerce website built with liquid, HTML, CSS and custom JavaScript. Over 50+ store 5 star reviews and counting",
    tags: [
      {
        name: "Shopify",
        color: "pink-text-gradient",
      },
      {
        name: "Liquid",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: kindocean,
    live_site_link: "https://www.kindocean.com.au",
  },
  {
    name: "Aimgreen E-commerce Website",
    description:
      "Custom shopify e-commerce website built with liquid, HTML, CSS and custom JavaScript.",
    tags: [
      {
        name: "Shopify",
        color: "pink-text-gradient",
      },
      {
        name: "Liquid",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: aimgreen,
    live_site_link: "https://www.aimgreenbbs.com/",
  },
  {
    name: "Mertra Mertra E-commerce Website",
    description:
      "Custom shopify e-commerce website built with liquid, HTML, CSS and custom JavaScript.",
    tags: [
      {
        name: "Shopify",
        color: "pink-text-gradient",
      },
      {
        name: "Liquid",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: mertra,
    live_site_link: "https://www.mertra.com/",
  },
  {
    name: "NextAdmin Dashboard",
    description:
      "Full Stack project built for data visualization complete tables and charts. Complete with pagination, authentication and more!",
    tags: [
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Drizzle ORM",
        color: "blue-text-gradient",
      },
    ],
    image: nextAdmin,
    source_code_link: "https://github.com/sika-007/next-15-admin-dashboard",
    live_site_link: "https://next-15-admin-dashboard-seven.vercel.app/",
  },
  {
    name: "Migro",
    description:
      "Fullstack travel application built with React and Python to facilitate the ease of migration of people in Spanish-speaking countries to Spain.",
    tags: [
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: migro_portfolio,
    source_code_link: "#",
    live_site_link: "https://www.migro.es",
  },
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
    name: "Cando",
    description:
      "Easy-to-use and functional todo application that works with localStorage for creating, editing, deleting, and sorting to-dos, Or Can-dos as I like to call them, with a cool drag and drop feature",
    tags: [
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Toastify",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: cando,
    source_code_link: "https://github.com/sika-007/can-do",
    live_site_link: "https://can-do-app.netlify.app",
  },
  /* {
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
  }, */
  /* {
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
  }, */
  /* {
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
      }, */
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
];

export { services, technologies, experiences, testimonials, projects };
