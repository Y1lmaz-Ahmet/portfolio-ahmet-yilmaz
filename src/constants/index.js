import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meetmatch,
  deckofcards,
  jobit,
  tripguide,
  threejs,
  bitbucket,
  pictureFetcher,
  vercel,
  todo,
  slider,
  tictac,
  movies,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "bitbucket",
    icon: bitbucket,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Native Developer - trainee",
    company_name: "MeetMatch",
    icon: meetmatch,
    iconBg: "#383E56",
    date: "feb 2022 - jun 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, backend developers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer - student worker",
    company_name: "MeetMatch",
    icon: meetmatch,
    iconBg: "#E6DEDD",
    date: "jun 2022 - aug 2022",
    points: [
      "Developing and maintaining web applications using React-Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, backend developers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Deck Of Cards Game",
    description:
      "Traditional card games are played with a deck or pack of playing cards which are identical in size and shape. Each card has two sides, the face and the back.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "red-text-gradient",
      },
    ],
    image: deckofcards,
    vercel: "https://csb-23kls0.vercel.app/",
    image_vercel: vercel,
    source_code_link: "https://github.com/Y1lmaz-Ahmet/Deck-Of-Cards-Game",
  },
  {
    name: "Picture of the Day",
    description:
      "One of the most popular websites at NASA is the Astronomy Picture of the Day. This endpoint structures the APOD imagery and associated metadata.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "red-text-gradient",
      },
    ],
    image: pictureFetcher,
    vercel: "https://csb-ddwyum.vercel.app/",
    image_vercel: vercel,
    source_code_link: "https://github.com/Y1lmaz-Ahmet/NASA-Picture-Fetcher",
  },
  {
    name: "todo app",
    description:
      "Break tasks down into simple steps and set reminders for your daily checklist to keep you on track.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    vercel: "https://client-iota-eight.vercel.app/",
    image_vercel: vercel,
    source_code_link: "https://github.com/Y1lmaz-Ahmet/client",
  },

  {
    name: "slider-app",
    description: "A way to make a slideshow of images",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "orange-text-gradient",
      },
    ],
    image: slider,
    vercel: "https://slider-app-six.vercel.app/",
    image_vercel: vercel,
    source_code_link: "https://github.com/Y1lmaz-Ahmet/slider-app",
  },
  {
    name: "TIC-TAC-TOE",
    description:
      "a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    vercel: "https://tic-tac-toe-seven-tau.vercel.app/",
    image_vercel: vercel,
    source_code_link: "https://github.com/Y1lmaz-Ahmet/TIC-TAC-TOE",
  },
  {
    name: "Movies website",
    description:
      "a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next-13",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    vercel: "https://next13-experiment-khaki.vercel.app/",
    image_vercel: vercel,
    source_code_link: "https://github.com/Y1lmaz-Ahmet/next13-experiment",
  },
];

export { services, technologies, experiences, projects };
