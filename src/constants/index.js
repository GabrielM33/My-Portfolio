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
  //docker,
  docker1,
  xcode,
  xrbootcamp,
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
  /* 
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Xcode",
    icon: xcode,
  },
  */
  {
    name: "Python",
    icon: python,
  },
  /*
  {
    name: "sql",
    icon: sql,
  },
  */
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
  /*{
    title: "Master of Business Administration",
    company_name: "University of the People",
    icon: uopeople,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Current",
    points: [
      "Developed expertise in financial strategy and resource management.",
      "Attained an entrepeneurial mindset.",
      "In the process of acquiring strategic thinking abilities.",
    ],
  }, */
  /* {
    title: "Introduction to SQL Certificate",
    company_name: "Sololearn",
    icon: sololearn,
    iconBg: "#FFFFFF",
    date: "Apr 2023",
    points: [
      "Acquired proficiency in SQL syntax through hands-on small-scale projects."
    ],
  }, */
  /* {
    title: "Foundations: Data, Data, Everywhere Certificate",
    company_name: "Google",
    icon: google,
    iconBg: "#FFFFFF",
    date: "Jul 2023",
    points: [
      "Attained proficiency in data preprocessing and a deep understanding of the data analysis life cycle."
    ],
  },
  {
    title: "Tech for Everyone Certificate",
    company_name: "Sololearn",
    icon: sololearn,
    iconBg: "#FFFFFF",
    date: "Aug 2023",
    points: [
      "Developed a comprehensive understanding of the web and the technology industry."
    ],
  },
  {
    title: "Introduction to Generative AI Certificate",
    company_name: "Google",
    icon: google,
    iconBg: "#FFFFFF",
    date: "Aug 2023",
    points: [
      "Acquired technical expertise in introductory generative algorithms and their applications in real-world scenarios."
    ],
  },
  {
    title: "Python Intermediate Certificate",
    company_name: "Sololearn",
    icon: sololearn,
    iconBg: "#FFFFFF",
    date: "Sep 2023",
    points: [
      "Worked on functional programming, object-oriented programming, and exception handling."
    ],
  },
  {
    title: "SQL Intermediate Certificate",
    company_name: "Soloearn",
    icon: sololearn,
    iconBg: "#FFFFFF",
    date: "Oct 2023",
    points: [
      "Acquired proficiency in data storage with SQL through hands-on small-scale projects."
    ],
  },
  /*{
    title: "Introduction to Machine Learning on AWS Certificate",
    company_name: "Amazon Web Services",
    icon: aws,
    iconBg: "#FFFFFF",
    date: "Sep 2023",
    points: [
      "Gained proficiency platforms such as Rekognition and SageMaker, among others."
    ],
  },*/
  /*
  {
    title: "Machine Learning Specialization",
    company_name: "DeepLearning.AI & Stanford",
    icon: deeplearning,
    iconBg: "#FFFFFF",
    date: "Current",
    points: [
      "Supervised Learning (Regression and Classification).", 
      "Advanced Learning Algoithms.",
      "Unsupervised Learning and Recommenders.",
    ],
  },
  */
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
    name: "VR Room",
    description:
    "VR Room is a VR experience that transports you into an interactive living room. A world where you can leave reality and explore a digital realm with the comfort of home.",
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
  }
];

const projects2 = [
    {
      name: "Generative Adversarial Network (GAN)",
      description:
        "This project demonstrates the exciting possibilities of Generative AI and its applications in various domains, including art, design, and others.",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "generativeai",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: mnist,
      source_code_link: "https://github.com/GabrielM33/Generative-Adversarial-Network",
    },
    {
      name: "Classification of Anomalies on Chest X-Ray",
      description:
        "An innovative deep learning algorithm designed to identify anomalies in X-Rays to assist doctors in the early detection of potential cardiorespiratory diseases.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "deeplearning",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: xray,
      source_code_link: "https://github.com/GabrielM33/Classification-of-Anomalies-on-Chest-X-Ray-Dataset",
    },
    /*
    {
      name: "Burned Calories Tracker",
      description:
        "A linear regression model designed to accurately calculate calorie expenditure during workouts, levaraging various metrics including time of workout, intensity and others. Its simplicity makes it a viable product for deployment.",
      tags: [
        {
          name: "linearregression",
          color: "blue-text-gradient",
        },
        {
          name: "machinelearning",clear
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: workout,
      source_code_link: "https://github.com/GabrielM33/Burned-Calories-Tracker",
    },
    */
    {
      name: "Diabetes Prediction Model",
      description:
        "A sophisticated classification model built on a vast dataset of health metrics. It utilizes cutting-edge technology to accurately assess an individual's diabetic status, offering a crucial tool for proactive healthcare management.",
      tags: [
        {
          name: "linearkernel",
          color: "blue-text-gradient",
        },
        {
          name: "machinelearning",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: diabetes,
      source_code_link: "https://github.com/GabrielM33/Diabetes-Prediction-Model",
    },
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
    }
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

export { services, technologies, experiences, testimonials, projects, projects2, projects3 };
