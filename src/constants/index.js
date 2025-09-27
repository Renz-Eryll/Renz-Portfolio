const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Months of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 7, suffix: "+", label: "Completed Projects" },
  { value: 2, suffix: "+", label: "Teams Worked With" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/React.svg",
  },
  {
    imgPath: "/images/logos/nextjs.svg",
  },
  {
    imgPath: "/images/logos/Tailwind.svg",
  },

  {
    imgPath: "/images/logos/Node.js.svg",
  },
  {
    imgPath: "/images/logos/Express.png",
  },
  {
    imgPath: "/images/logos/TypeScript.svg",
  },
  {
    imgPath: "/images/logos/HTML5.svg",
  },
  {
    imgPath: "/images/logos/JavaScript.svg",
  },
  {
    imgPath: "/images/logos/Bootstrap.svg",
  },
  {
    imgPath: "/images/logos/MongoDB.svg",
  },
  {
    imgPath: "/images/logos/PostgresSQL.png",
  },
  {
    imgPath: "/images/logos/Appwrite.svg",
  },
];

const projects = [
  {
    id: 1,
    title: "SubTrack",
    description: " Subscription management system for users and transactions.",
    image: "/images/SubTrack.svg",
    github: "https://github.com/Renz-Eryll/SubTrack.git",
    demo: "",
    tech: ["Express.js", "Node.js", "MongoDB", "JWT"],
  },
  {
    id: 2,
    title: "Postagram",
    description:
      " Social media web application with user authentication, post creation, and real-time updates.",
    image: "/images/postagram-thumbnail.svg",
    github: "https://github.com/Renz-Eryll/Postagram.git",
    demo: "https://postagram-app.vercel.app",
    tech: ["Next.js", "Neon PostgreSQL", "Prisma", "Clerk", "Shadcn UI"],
  },
  {
    id: 3,
    title: "CourseBoard",
    description:
      "A frontend admin dashboard for managing courses and subscriptions.",
    image: "/images/courseboard.svg",
    github: "https://github.com/Renz-Eryll/CourseBoard.git",
    demo: "https://courseboard.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 4,
    title: "Resumind",
    description:
      "An AI-powered resume analyzer for job listings and resume matching.",
    image: "/images/resumind-thumbnail.svg",
    github: "https://github.com/Renz-Eryll/Resumind.git",
    demo: "https://resumind-app.vercel.app",
    tech: ["React Router", "Puter.js", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Sync It",
    description:
      "A storage and file sharing app built with Next.js 15 and Appwrite for seamless file management.",
    image: "/images/syncit.svg",
    github: "https://github.com/Renz-Eryll/SyncIt.git",
    demo: "https://sync-it-project.vercel.app",
    tech: ["Next.js", "Appwrite", "Tailwind CSS", "Shadcn UI"],
  },

  {
    id: 6,
    title: "FilmFindr",
    description:
      "A movie discovery app with an intuitive user interface with TMDB API.",
    image: "/images/filmfindr.svg",
    github: "https://github.com/Renz-Eryll/MovieBrowsingApp.git",
    demo: null,
    tech: ["React.js", "TMDB API", "Tailwind CSS", "Appwrite"],
  },
];

const abilities = [
  {
    imgPath: "/images/clock-solid.svg",
    title: "Time Management",
    desc: "Effectively prioritizing tasks and meeting deadlines while maintaining high standards of quality.",
  },
  {
    imgPath: "/images/users-solid.svg",
    title: "Teamwork",
    desc: "Collaborates effectively to achieve team objectives with clear communication.",
  },
  {
    imgPath: "/images/book-solid.svg",
    title: "Continuous Learning",
    desc: "Committed to expanding skills and staying current with evolving technologies.",
  },
];

const experience = [
  {
    desc: "A full-stack ticketing system developed during On-the-Job Training at Qtech Business Solution Inc.",
    link: "https://github.com/Renz-Eryll/Ticketing-System.git",
    imgPath: "/images/ticketing.svg",
    logoPath: "/images/logos/React.svg",
    title: "Frontend Developer, UI/UX Designer & Quality Assurance",
    date: "March - June 2025",
    shortDesc:
      "A full-stack ticketing platform for customer support processes. The system enables customers to submit support tickets via a web interface, which are then managed by administrators and assigned to agents for resolution.",
    responsibilities: [
      "Performed QA testing to ensure functionality, fix issues, and maintain compatibility.",
      "Designed and developed user-friendly, responsive interfaces for the customer, agent, and admin portals",
      "Collaborated with the back-end team to integrate ticket management and status updates using React.js and Laravel",
    ],
  },
  {
    desc: "This project serves as our capstone project / thesis, featuring an IoT-enabled web-based system designed to enhance stingless bee honey production",
    link: "https://github.com/CJcode6754/BeeMo.git",
    imgPath: "/images/beemo-thumbnail.svg",
    logoPath: "/images/logos/HTML5.svg",
    title: "Frontend Developer, Arduino Programmer",
    date: "May 2024 - November 2024",
    shortDesc:
      "An IoT-based system for real-time monitoring and automated regulation of stingless bee hives, featuring web and SMS notifications, harvest tracking, historical data analytics, multi-hive management, and offline parameter control during network downtime.",
    responsibilities: [
      "Developed the front-end interfaces for real-time hive monitoring, harvest tracking, and notifications using HTML, CSS and Bootstrap",
      "Programmed and integrated Arduino-based sensors and IoT modules for automated temperature, humidity, and hive weight monitoring, with data transmission to the web system.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  experience,
  expLogos,
  socialImgs,
  navLinks,
};
