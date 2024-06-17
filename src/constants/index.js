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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  unity,
  jupyter,
  python,
  griffith,
  uopeople,
  sololearn,
  google,
  deeplearning,
  mylogo,
  sql,
  xray,
  workout,
  diabetes,
  flappycat,
  carchase,
  mnist,
  aws,
  linkedin,
  mylogo1,
  restart,
  website,
  hospital,
  room,
  card,
  beatsaber,
  groovelab,
  inventory,
  swift,
  docker1,
  xcode,
  xrbootcamp,
  bookshelf,
  tabletennis,
  coffeebrew,
  crime,
} 

from "../assets";

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
    title: "Unity Developer",
    icon: mobile,
  },
  {
    title: "Learning Swift",
    icon: web,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Bachelor of Biomedical Science",
    company_name: "Griffith University",
    icon: griffith,
    iconBg: "#FFFFFF",
    date: "Aug 2018 - Jun 2022",
    points: [
      "Developed proficiency in professional English.",
      "Collaborated in high-pressure team environments.",
      "Fostered lifelong learning aptitude.",
    ],
  },
  {
    title: "Unity VR Development Certificate",
    company_name: "Unity",
    icon: unity,
    iconBg: "#FFFFFF",
    date: "Oct - Nov 2023",
    points: [
      "Worked on custom VR development, interaction, ergonomics and optimization.",
    ],
  },
  {
    title: "XR Foundations & Prototyping Bootcamp (High Honors)",
    //role: "Community Mentor"
    company_name: "XR Bootcamp",
    icon: xrbootcamp,
    iconBg: "#FFFFFF",
    date: "Feb - Jun 2024",
    points: [
      "Community Mentor.",
      "Received full scholarship.",
      "Worked with C#, Unity, Git, team projects, prototypes, MVPs, Meta Hackathon, and more.",
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

const projects = [
  {
    name: "VerseTales",
    description:
    "Created for the Meta Presence Hackathon, VerseTales lets users dive into favorite books via AR or VR, with environments adapting to the narrative in VR mode.",
    tags: [
      {
        name: "metasdk",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: bookshelf,
    source_code_link: "https://github.com/GabrielM33/VerseTales",
  },
  {
    name: "Real Table Tennis",
    description:
      "Disclaimer: Repository cannot be made public due to copyright issues. This project is a XR table tennis game developed with a team of students from XR Bootcamp.",
    tags: [
      {
        name: "metasdk",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: tabletennis,
    source_code_link: "https://youtu.be/xYIOw1CK1-M?si=it9BKuz7qFONeZyV",
  },
  {
    name: "XRTrueCrime",
    description:
      "An investigative game where players immerse themselves in a murder crime scene to find and analyze clues, piecing together the evidence to solve the case.",
    tags: [
      {
        name: "metasdk",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: crime,
    source_code_link: "https://github.com/lauramurinova/XRTrueCrime",
  },
];

const projects2 = [
  {
    name: "Inventory Prototype",
      description:
      "This project integrates iOS and VisionOS to create an inventory of items scanned with Object Capture. This inventory is then used to move real-life objects into spatial computing.",
      tags: [
        {
          name: "visionos",
          color: "blue-text-gradient",
        },
        {
          name: "ios",
          color: "green-text-gradient",
        },
        {
          name: "swift",
          color: "pink-text-gradient",
        },
      ],
      image: inventory,
      source_code_link: "https://github.com/GabrielM33/Inventory-iOSVisionOS",
  },
  {
    name: "GrooveLab",
    description:
      "Unleash your inner drummer in GrooveLab, the Mixed Reality app that lets you rock out to drumless tracks on a simulated kit, in your living room or a virtual wonderland.",
    tags: [
      {
        name: "metasdk",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: groovelab,
    source_code_link: "https://github.com/GabrielM33/GrooveLab-MetaSDK",
  },
    {
      name: "Coffee Brewing",
      description:
        "A linear regression model designed to accurately calculate calorie expenditure during workouts, levaraging various metrics including time of workout, intensity and others. Its simplicity makes it a viable product for deployment.",
      tags: [
        {
          name: "metasdk",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "csharp",
          color: "pink-text-gradient",
        },
      ],
      image: coffeebrew,
      source_code_link: "https://github.com/GabrielM33/Coffee-Brewing",
    },
    {
      name: "Beat Saber Clone",
      description:
        "An innovative deep learning algorithm designed to identify anomalies in X-Rays to assist doctors in the early detection of potential cardiorespiratory diseases.",
      tags: [
        {
          name: "xrinteractiontoolkit",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "csharp",
          color: "pink-text-gradient",
        },
      ],
      image: beatsaber,
      source_code_link: "https://github.com/GabrielM33/Beat-Saber-Clone",
    },
    {
      name: "VR Room",
      description:
        "This online portfolio is an immersive 3D experience. It's not just a portfolio; it's a virtual journey through my creative work, designed to captivate and engage visitors.",
      tags: [
        {
          name: "xrinteractiontoolkit",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "csharp",
          color: "pink-text-gradient",
        },
      ],
      image: room,
      source_code_link: "https://github.com/GabrielM33/VRRoom-XRInteractionToolkit",
    },
  ];

    const projects3 = [
      {
        name: "Restart iOS App",
        description:
          "'Restart' is an elegantly crafted iOS app, developed using Swift, that showcases stunning animations and intuitive user interface design.",
        tags: [
          {
            name: "animated",
            color: "blue-text-gradient",
          },
          {
            name: "appdevelopment",
            color: "green-text-gradient",
          },
          {
            name: "swift",
            color: "pink-text-gradient",
          },
        ],
        image: restart,
        source_code_link: "https://github.com/GabrielM33/Restart-App",
      },
  ];
const projects4 = [
  {
    name: "Restart iOS App",
    description:
      "'Restart' is an elegantly crafted iOS app, developed using Swift, that showcases stunning animations and intuitive user interface design.",
    tags: [
      {
        name: "animated",
        color: "blue-text-gradient",
      },
      {
        name: "appdevelopment",
        color: "green-text-gradient",
      },
      {
        name: "swift",
        color: "pink-text-gradient",
      },
    ],
    image: restart,
    source_code_link: "https://github.com/GabrielM33/Restart-App",
  },
  /*
  {
    name: "Portfolio Website",
    description:
      "This online portfolio is an immersive 3D experience. It's not just a portfolio; it's a virtual journey through my creative work, designed to captivate and engage visitors.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/GabrielM33/My-Portfolio",
  },
  {
    name: "SQL Hospital Database",
    description:
    "This project provides a hands-on opportunity to practice essential SQL skills in the context of a hospital environment designed to mimic real-world scenarios.",
    tags: [
      {
        name: "ddl",
        color: "blue-text-gradient",
      },
      {
        name: "dml",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/GabrielM33/HospitalDB-SQL",
  },
  */
];
const projects5 = [
  {
    name: "Restart iOS App",
    description:
      "'Restart' is an elegantly crafted iOS app, developed using Swift, that showcases stunning animations and intuitive user interface design.",
    tags: [
      {
        name: "animated",
        color: "blue-text-gradient",
      },
      {
        name: "appdevelopment",
        color: "green-text-gradient",
      },
      {
        name: "swift",
        color: "pink-text-gradient",
      },
    ],
    image: restart,
    source_code_link: "https://github.com/GabrielM33/Restart-App",
  },
  {
    name: "Portfolio Website",
    description:
      "This online portfolio is an immersive 3D experience. It's not just a portfolio; it's a virtual journey through my creative work, designed to captivate and engage visitors.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/GabrielM33/My-Portfolio",
  },
  {
    name: "SQL Hospital Database",
    description:
    "This project provides a hands-on opportunity to practice essential SQL skills in the context of a hospital environment designed to mimic real-world scenarios.",
    tags: [
      {
        name: "ddl",
        color: "blue-text-gradient",
      },
      {
        name: "dml",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/GabrielM33/HospitalDB-SQL",
  },
];

export { services, technologies, experiences, testimonials, projects, projects2, projects3, projects4, projects5 };
