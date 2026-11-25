/* =====================================================================
   SITE CONTENT — this is the only file you need to edit to update the site.

   Tips
   - Text fields may contain simple HTML, e.g. <em>italic</em> or <strong>bold</strong>.
   - "text" fields are lists of paragraphs; "bullets" are lists of bullet points.
   - Images go in assets/img/, PDFs in assets/docs/. Paths are relative to index.html.
   - Order matters: the first item in a list is shown first (put newest on top).
   - Skill levels are 1–5.
   - Remove a section entirely by deleting it from "sections" below.
   ===================================================================== */

window.SITE = {
  name: "Carl Emil Elling",
  title: "M.Sc. Electronics Engineer | B.Sc. Physics- and Electrical Engineer",
  photo: "assets/img/profile.jpg",

  contact: {
    phone: "+45 23 27 37 39",
    email: "carlemilelling@hotmail.com",
    linkedin: "https://www.linkedin.com/in/carlemilelling",
    github: "https://github.com/caee"
  },

  resumePdf: "assets/docs/cv.pdf",

  // Menu order. Valid ids: bio, education, experience, skills, projects
  sections: ["bio", "education", "experience", "skills", "projects"],

  /* ---------------------------------------------------------------- BIO */
  bio: {
    tagline: "Passionate and nerdy in a good way",
    text: [
      "Electrical engineer with high personal and professional drive, and a curiosity to match it.",
      "I thoroughly enjoy creating novel solutions to complex problems. Although this might sound like a cliché, it is a driving force in my life, leading me to do electronic and mechanical projects in my spare time – simply because I cannot help it. This ranges from building a CNC router for my own enjoyment to starting an amateur rocketry club during my studies.",
      "Academically, I have broad interests. My B.Sc. is a combination of both physics and electrical engineering to satisfy this curiosity, and I’ve tailored it with a heavy focus on the latter.",
      "My M.Sc. is in electrioics engineering, a field I have been passionate about for many years. I have a strong interest in hardware design, and I enjoy the process of taking a concept from idea to prototype.",
      "Despite the archetypical engineering profile, connecting with people has always been a strong suit of mine. Among many other manifestations, I use it in playing the piano, which I’ve done most of my life, accompanying singers, bands and arranging concerts. I am an outdoor enthusiast, and have even worked professionally as a guide in the harsh climate of the Greenlandic west coast, keeping people safe and accommodating their needs. I benefit from my interpersonal skills in most other contexts, and can deliver a serious and constructive opinion with a smile."
    ]
  },

  /* ---------------------------------------------------------- EDUCATION */
  education: [
     {
      period: "2021–2025",
      role: "M.Sc.Eng.",
      place: "Electronics Engineering",
      org: "DTU",
      logo: "assets/img/logos/dtu.png",
      extra: "Graded avg: 11.4",
      text: [
        "Electronics engineer from DTU specializing in hardware and electronics design for product development. ",
        "Thesis on development of diagnostic imaging system for field-inspection of solar panels with photoluminescence."
      ],
      documents: [
        { label: "Courses & grades", href: "assets/docs/master-of-science-in-engineering.pdf" }
      ]
    },
    {
      period: "2016–2020",
      role: "B.Sc.Eng.",
      place: "Earth & Space Physics & Engineering",
      org: "DTU",
      logo: "assets/img/logos/dtu.png",
      extra: "Graded avg: 10.4",
      text: [
        "Bachelor combining <em>Physics</em>- and <em>Electronics</em> engineering.",
        "Specialized with a heavy focus on electronics and biomedical engineering with a high level of professional engagement.",
        "Following my studies I’ve been occupied with extracurricular activities, such as the student organization DanSTAR (see Experience) and the case competition SensUs (see Projects)."
      ],
      documents: [
        { label: "Courses & grades", href: "assets/docs/grades.pdf" }
      ]
    },
    {
      period: "2012–2015",
      role: "Math, Physics & Chemistry",
      place: "Frederiksborg High School",
      org: "Frederiksborg High School",
      logo: "assets/img/logos/frederiksborg.png",
      extra: "Graded avg: 12.4",
      text: [
        "As a student at Frederiksborg Gymnasium og HF, I have developed as a person – both socially and professionally. I have studied Maths, Physics and Chemistry on a high level, with the other supplementing courses that make up the Danish general education.",
        "I participated in ’12 at ATU (the Academy for Talented Youth), a 3-year offer to students at the Danish gymnasiums with an extraordinary scientific interest. There I attended a lot of extra courses, and had the opportunity to explore my scientific curiosity with likeminded peers. Apart from this, I attended a lot of voluntary activities offered by the school."
      ]
    }
  ],

  /* --------------------------------------------------------- EXPERIENCE */
  experience: [
    {
      period: "2026–present",
      role: "Lead Hardware Engineer",
      org: "Danish PV Service",
      logo: "assets/img/logos/dpvs.png",
      text: [
        "Lead hardware developer for spinn-off in close cooperation with both industry and academia. Develops hardware solutions for inspection, characterization and production of solar panels, as well as peripheral technology."
      ],
      bullets: ["Team leadership","project management","Embedded systems","hardware design", "software development","CAD modelling", "Pitching and Startup environment"]
    },
    {
      period: "2025",
      role: "Arctic Guide",
      org: "Albatros Arctic Circle",
      logo: "assets/img/logos/aac.png",
      text: [
        "Sabbatical as nature/glacier guide in Greenland. Responsibility for safety and well-being of tourists in extreme environments."
      ],
      bullets: ["Safety and risk management", "Team leadership", "Customer service"],
      image: "assets/img/Banner.jpeg"
    },
    {
      period: "2020–2021",
      role: "Development Engineer",
      org: "CB Svendsen A/S",
      logo: "assets/img/logos/CBS-logo.avif",
      text: [
        "Temporary full-time hardware engineer. Responsibility for the majority of hardware-design in CB Svendsen. On my own initiative, built a modern prototype lab, which is time-saving and cost efficient compared to old solutions in house.",
        "I have acted as project responsible for electronics project as well as hardware support for more complex projects - using my broad skills in both electronics, mechanical and software design."
      ],
      bullets: ["hardware design", "software development","CAD modelling","Project management", "Pitching"]
    },
    
    {
      period: "2018–2019",
      role: "Co-founder",
      org: "LærMaple",
      logo: "assets/img/logos/laermaple.png",
      text: [
        "During my studies, a friend of mine and I identified problems in the teaching of Maple, a math program developed for engineering, but often used in Danish high schools. Creating an online learning tool for this, I have gained experience in:"
      ],
      bullets: ["Project management", "Pitching and teaching", "Online business"]
    },
    {
      period: "2016–2018",
      role: "Board Member",
      org: "DanSTAR",
      logo: "assets/img/logos/danstar.png",
      text: [
        "Denmark’s only student rocketry club, DanSTAR, was founded in 2016. Here, I was part of developing the association from an idea to the point where engaged students from all of DTU are building a 5 m long rocket.",
        "My responsibilities included:"
      ],
      bullets: [
        "Securing funding from grants and sponsors. This includes cooperation with Alumeco, Swagelok and Sanistål.",
        "Project management – organizing 25+ students in dedicated teams.",
        "Member of the fluidics team."
      ]
    },
    {
      period: "2017",
      role: "Mentor",
      org: "MentorDanmark",
      logo: "assets/img/logos/mentordanmark.png",
      text: [
        "Using and developing my skills in explaining difficult subjects, my time in MentorDanmark was dedicated to teaching maths and physics to high school students."
      ]
    },
    {
      period: "2015–2016",
      role: "Student Co-worker",
      org: "Pfizer",
      logo: "assets/img/logos/pfizer.png",
      text: [
        "Assistant in the Engineering department of Pfizer Søborg with responsibility in SAP, archival, decommissioning of the site and more. I have been a key part of different projects, and I have used my skills both to make a foundation for decision-making for my superiors and to make decisions of my own.",
        "Areas of responsibility include, but are not limited to:"
      ],
      bullets: [
        "SAP Engineering",
        "Data processing and visualization for utility and maintenance",
        "Assisting with engineering workflows in production"
      ]
    },
    {
      period: "2012–2015",
      role: "Piano teacher & teaching assistant",
      org: "Frederiksborg High School",
      logo: "assets/img/logos/frederiksborg.png",
      text: [
        "As I have played the piano for most of my life, I had the opportunity to teach this to music students at Frederiksborg High School. Besides this, I worked as a mentor in Maths, Physics and Chemistry at a weekly tuition arrangement organized by the school.",
        "This taught me:"
      ],
      bullets: [
        "How to explain difficult concepts in order to teach them.",
        "Channeling my excitement for a subject into others.",
      ]
    }
  ],

  /* ------------------------------------------------------------- SKILLS */
  // Each group becomes a tab. Rated groups use "level" (1–5).
  // A group with "tags" instead shows boxes; "highlight: true" makes a tag bold.
  skills: [
    {
      name: "Hard Skills",
      items: [
        { name: "Hardware Prototyping", level: 5 },
        { name: "PCB design", level: 4 },
        { name: "PCB assembly (hand solder and reflow)", level: 4 },
        { name: "Solidworks & CAD", level: 4 },
        { name: "Brain-Computer Interfacing", level: 4 },
        { name: "Deep Learning and neural networks w/ TensorFlow", level: 3 },
        { name: "Biosensors", level: 4 },
        { name: "Sensor technology", level: 3 },
        { name: "Analog circuit design", level: 4 },
        { name: "Digital circuit design", level: 3 },
        { name: "Image Analysis", level: 4 },
        { name: "Signal Processing", level: 3 },
        { name: "Systems Control", level: 2 }
      ]
    },
    {
      name: "Programming Skills",
      items: [
        { name: "Python", level: 5 },
        { name: "MATLAB", level: 5 },
        { name: "Arduino-style C++", level: 3 },
        { name: "Embedded Programming in C", level: 3 },
        { name: "HTML & CSS", level: 3 },
        { name: "Processing", level: 2 }
      ]
    },
    {
      name: "Soft Skills",
      tags: [
        { name: "Analytical problem-solving", highlight: true },
        { name: "Fast learner", highlight: true },
        { name: "Innovation & creativity", highlight: true },
        { name: "Intellectual curiosity", highlight: true },
        { name: "Team leadership" },
        { name: "Project management" },
        { name: "Clear technical communication" },
        { name: "Cross-disciplinary collaboration" },
        { name: "Stakeholder engagement" },
        { name: "Thorough & quality-minded" },
        { name: "Independent & self-driven" },
        { name: "Strong work ethic" }
      ],
      note: [
        "Highlighted are the qualities I rely on most.",
        "They have been shaped by leading hardware projects from concept to field test, co-founding a start-up, working closely with both industry and academia, and years of mentoring and supporting others.",
        "Skills in boxes only tell part of the story – I’m always happy to elaborate in person."
      ]
    }
  ],

  /* ----------------------------------------------------------- PROJECTS */
  // "id" is used in the URL (#projects/<id>) so keep it short, lowercase, no spaces.
  // media items: { image, caption }, { youtube: "<video id>", caption }
  //           or { video: "file.mp4", poster: "still.jpg", caption }  (video must be .mp4)
  projects: [
    {
      id: "pl-inspection",
      title: "Thesis: Field-ready solar panel inspection with Photoluminescence",
      year: "2025",
      thumb: "assets/img/projects/pl-thumb.jpg",
      text: [
        "Master Thesis in collaboration with DTU Electro. Here, I built, wired and coded a very novel full prototype setup for inspecting solar panels with induced photoluminescence. The project was done from scratch with very little outside help, and results were published in the EUPVSEC conference proceedings (2025 and 2026).",
        "Advanced image processing pipelines were developed to do image capture as a line scanning method, and stitch together to a resulting image.",
        "The project is continued in my work at Danish PV Service, where I am developing a commercial version of the setup."
      ],
      media: [
        { image: "assets/img/projects/pl-render.jpg", caption: "" },
        { image: "assets/img/projects/pl-setup-photo.jpg", caption: "" },
        { video: "assets/img/projects/pl-scan.mp4", poster: "assets/img/projects/pl-scan-poster.jpg", caption: "" },
        { image: "assets/img/projects/pl-scan-result.png", caption: "" }
      ]
    },
    {
      id: "lab-setup",
      title: "Lab Setup",
      year: "2026",
      thumb: "assets/img/projects/inv-lab.png",
      text: [
        "Setting up and managing a new laboratory space for research and prototype development at DTU Risø."
      ],
      media: [
        { image: "assets/img/projects/inv-lab.png", caption: "" }
      ]
    },
    {
      id: "cnc",
      title: "Homebuilt CNC-router",
      year: "2020",
      thumb: "assets/img/projects/cnc-thumb.jpg",
      text: [
        "During COVID-19, a friend and I have been building a CNC-router based on the Mostly Printed CNC (<a href=\"https://www.v1engineering.com/\" target=\"_blank\" rel=\"noopener\">MPCNC</a>).",
        "All joints are 3D-printed, connector pipes are aluminium, and a 500 W spindle is to be mounted at the connection.",
        "Much work is still needed before a fully working, modular CNC-router is finished.",
        "<strong>Future work:</strong> Upgrade belt size from 6 mm to 10 mm. Sturdier pipe connectors – either steel or concrete-filled aluminium. 3D print head. Cutting board mounting system. Work-table upgrades – vacuum, tool mounts, electronics mounts."
      ],
      media: [
        { image: "assets/img/projects/cnc-frame.png", caption: "CNC frame with 3D printed joints. Underneath, the level and sturdy base plate can be seen." }
      ]
    },
    {
      id: "sprat",
      title: "Forecasting with Deep Learning",
      year: "2020",
      thumb: "assets/img/projects/sprat-thumb.png",
      text: [
        "A project I did to teach myself Deep Learning. I set out to predict catch of sprat in the North Sea, using data from DTU Aqua.",
        "Here, I investigated different types of Neural Networks, eventually settling for ConvLSTM, a network architecture specifically designed for spatial, temporal forecasting.",
        "I built a number of different networks, using all available data in creative ways, and ended up forecasting with an accuracy of around 40% – which, although it does not sound impressive, was rather significant.",
        "The project taught me:"
      ],
      bullets: [
        "The basics of AI, computer vision, and predictive neural networks.",
        "A lot of TensorFlow.",
        "Python for deep learning.",
        "Data structuring.",
        "Data visualization."
      ],
      media: [
        { image: "assets/img/projects/sprat-result.gif", caption: "Result of the project. CPUE is a normalized measure of catch; the higher the value at a specific point, the easier it is to catch sprat there." }
      ],
      documents: [
        { label: "Read the report", href: "assets/docs/sprat-forecast.pdf" }
      ]
    },
    {
      id: "bci",
      title: "Bachelor in Brain-Computer Interfacing (BCI)",
      year: "2019",
      thumb: "assets/img/projects/bci-thumb.jpg",
      text: [
        "I did my very successful bachelor’s thesis on Brain-Computer Interfacing – the closest thing I could get to science fiction in the real world. Here, we created a modular system for controlling a drone with impulses directly from the brain, and had an astonishing 70% accuracy when giving the drone 3 separate commands: <em>forward</em>, <em>left</em> and <em>right</em>.",
        "The modularity of the system came from the chain of open-source systems used to create it. Each module was changeable – the transduction (electrodes), filters, machine learning algorithms for training, algorithms for sending control impulses to the drone, the radio used to send and the module to receive, and finally the vehicle. This was due to the signals being strictly controlled throughout the system."
      ],
      media: [
        { youtube: "wYRMMQU5Fu8", caption: "Video of a project demo. This was before tweaks made the 70% accuracy possible, but a degree of control can easily be seen – especially in the last part of the video." },
        { image: "assets/img/projects/bci-vehicle.png", caption: "The small vehicle built as a stand-in for the <em>very expensive</em> drones DTU Space use." }
      ],
      links: [
        { label: "See the project on GitHub", href: "https://github.com/caee/MIDroneControl" }
      ],
      documents: [
        { label: "Read the thesis", href: "assets/docs/bci-thesis.pdf" }
      ]
    },
    {
      id: "hangboard",
      title: "Homebuilt hangboard",
      year: "2020",
      thumb: "assets/img/projects/hangboard-thumb.png",
      text: [
        "A quick COVID-19 project to test out the capabilities of a new 3D-printer. Modelled after the Beastmaker 2000 hangboard, I wanted a chance to flex my Solidworks skills, so I modelled, printed and mounted the hangboard from scratch.",
        "This project will be the first test of the new CNC-router."
      ],
      media: [
        { image: "assets/img/projects/hangboard-cad.png", caption: "" },
        { image: "assets/img/projects/hangboard-print.jpg", caption: "" },
        { image: "assets/img/projects/hangboard-mounted.jpg", caption: "" }
      ]
    }
  ]
};
