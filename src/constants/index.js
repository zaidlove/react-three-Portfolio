import {
    mobile,
    // backend,
    creator,
    web,
    intern,
    javascript,
    typescript,
    html,
    css,
    aman,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    // gdsc,
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
      title: "ReactJS Developer",
      icon: mobile,
    },
    // {
    //   title: "Java Programmer",
    //   icon: backend,
    // },
    {
      title: "UI/UX Designer",
      icon: creator,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    
    {
      title: "Senior Frontend Engineer",
      company_name: "Diligent Technologies",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "August 2020 - May 2024",
      points: [
        "Owned strong proficiency in JavaScript, HTML, CSS, and related web technologies, including client-side libraries/frameworks React.js and Next.js.",
        "Responsibled for leading the development of user interfaces for our web applications, leveraging React.js for the front-end, Adobe Experience Manager (AEM) for content management, and sourcing external data using RESTful APIs for dynamic applications.",
        "Collaborated with Product Managers, UX designers and Back-end teams to translate requirements and wireframes into responsive, interactive web applications.",
        "Designed, developed and supported modern web applications written in cutting edge client-side technologies using industry best practices.",
        "Developed custom web component architecture and templates within headless content management system to delivery dynamic content presentation.",
        "Ensured the technical feasibility of UI/UX designs and optimize applications for maximum speed and scalability.",
        "Implemented and maintained best practices for front-end development, including code reviews, performance optimization, and documentation.",
        "Created component/subsystem documentation, then produced design and technical specifications as needed for technical architecture solutions.",
        "Influenced and built vision with product managers, team members, customers, and other engineering teams to solve complex problems for building enterprise-class business applications.",
        "Translated customer requirements, recommended system solutions, and formulated the detailed specifications from which programs are written, then worked closely with business partners to produce quality products that meet business needs.",
        "Provided enhancements to primary and supporting websites, web applications, and infrastructures.",
        "Had liaison with end users, research groups, and other business support areas.",
        "Worked with QA teams to ensure the quality and reliability of website performance.",
        "After facilitate design and technical meetings, provided technical documentation to internal business and design teams.",
        "Provided leadership to the team in the form of mentoring, training, guidance with daily task assignments, and serving as subject matter expert on most applications.",
      ],
    },
    
    {
      title: "Mid-level Frontend developer",
      company_name: "Comrax",
      icon: intern,
      iconBg: "#fff",
      date: "March 2016 - June 2020",
      points: [
        "Understood and analyzed user needed to translate them into intuitive and compelling UI designs.",
        "Leaded the UI design process for web interfaces, ensured a seamless and intuitive user experience.",
        "Confidently guided the design and implementation of the UI",
        "Implemented the UI design in a web application using HTML, CSS, JavaScript, Svelte.",
        "Proficient in creating interactive prototypes using design tools such as Figma, Sketch, Adobe XD, or similar.",
        "Owned experience in understanding large and complex code bases, including API design techniques to help keep them clean and maintainable.",
        "Coordinated and leaded research into new technologies independently, as part of a team and with the Architecture team to make judgement and recommendations for future releases.",
        "Contributed to a teamwork environment by actively participating in peer project reviews, code reviews, design reviews and being available to help others when needed.",
        "Optimized code for maximum performance and efficiency, dealt swiftly with any issues that arose.",
        "Ensured a seamless user experience by working closely with cross-functional teams.",
        "Developed immersive user interfaces using Svelte, HTML, CSS, and TypeScript.",
        "Designed UI elements such as input controls, navigational components, and informational components.",
        "Worked closely with financial stakeholders to gather requirements and deliver solutions that meet business needs.",
        "Owned proficiency in HTML5, CSS3, JavaScript, and modern JavaScript libraries and frameworks.",
        "Analyzed, troubleshoot and resolved issues related to application functionality, performance, and availability.",
        "Monitored system performance and identified potential issues before they impacted the production environment - Developed and maintained documentation for support processes and procedures .",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Zaid proved me wrong.",
      name: "Sanjay Rawat",
      designation: "Owner",
      company: "Plastify",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "Zaid was able to learn new skills and adapt to new technologies in a very short span of time, thus being productive quickly.",
      name: "Aman Kesarwani",
      designation: "Founder",
      company: "Lets Grow More",
      image: aman,
    },
    {
      testimonial:
        "Designed clean UI for our company and he was able to work very productively and punctually.",
      name: "Shiv Sharma",
      designation: "Founder",
      company: "ABT Enterprises",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
      {
      name: "Flux Form",
      description:
        "Effortlessly design AI-driven forms that captivate users and gather insights like never before. Transform data collection into a seamless experience!",
      tags: [
        {
          name: "NextJS13",
          color: "blue-text-gradient",
        },
        {
          name: "NeonDB",
          color: "green-text-gradient",
        },
        {
          name: "DrizlleORM",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      // source_code_link: "https://flux-form.vercel.app",
    },
    {
      name: "Deal Dropper",
      description:
        " Developed using Next.js and Bright Data's webunlocker, this e-commerce product scraping site is designed to assist users in making informed decisions.",
      tags: [
        {
          name: "NextJs13",
          color: "blue-text-gradient",
        },
        {
          name: "BrightData",
          color: "green-text-gradient",
        },
        {
          name: "Web Scraping",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      // source_code_link: "https://trackittoday.vercel.app",
    },
    {
      name: "Crypto Tracker",
      description:
        "Developed and launched a cryptocurrency tracking website leveraging CoinGecko API, providing real-time market data, price charts, and essential information for investors and enthusiasts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "ChakraUI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      // source_code_link: "https://xcrypto-react-js-chakra-ui.vercel.app",
    },
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
