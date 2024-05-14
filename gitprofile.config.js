const config = {
  externalProjects: [
    {
      title: 'Regex Records',
      description:
        'Discogs clone made with Laravel and React.js, users can add albums to their collections with real data fetched from Discogs API. Users can also add each other as friends and send messages, as well as sell and purchase albums, with Stripe and PayPal checkout.',
      imageUrl: 'https://i.imgur.com/tH3qq3M.jpg',
      link: 'https://regexrecords.shop/', // ''
      techStack: ['React.js', 'Laravel', 'Inertia.js', 'AWS'],
    },
    {
      title: 'Diablo4.Tips',
      description:
        'Guides and news for Diablo 4, made with Gatsby.js & TypeScript. Leverages several gatsby plugins to deliver a feature-rich experience and displays high resolution images while maintaining peformance.',
      imageUrl: '/d4logo.png',
      link: 'https://diablo4.tips',
      techStack: ['React.js', 'Gatsby.js', 'TypeScript'],
    },
    {
      title: 'JobLink',
      description:
        'PLEASE NOTE: The link may take time to load, but it will eventually load. LinkedIn clone where users can register as job seekers or recruiters. Friends system, messaging, users can apply to job postings and recruiters can approve/deny applications. 3rd party APIs for financial news and stock prices.',
      imageUrl: 'https://i.imgur.com/WckbJVb.png',
      link: 'https://joblink.azurewebsites.net',
      techStack: ['C#', '.NET', 'Entity Framework', 'Azure'],
    },
    {
      title: 'TicketBlaster',
      description:
        'TicketMaster clone app, where users can sign up and buy tickets for upcoming local concerts, with realtime data being fetched and displayed. Made with MERN Stack.',
      imageUrl: 'https://i.imgur.com/CXtwEY1.png',
      link: 'https://clever-hotteok-f60642.netlify.app',
      techStack: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    },
    {
      title: 'Regex Academy',
      description:
        'RegexAcademy is a school management system, where administrative users can enroll students & teachers into custom created classes. Users can also edit and delete any of their inputted entries. The program also has certain administrative helper features, such as exporting data to file, and graphical displays of the programs data.',
      imageUrl:
        'https://user-images.githubusercontent.com/92401368/218127311-959fd027-30ac-4cab-ad5c-bb4933dd1ec5.png',
      link: 'https://github.com/kevindarbydev/RegexAcademy',
      techStack: ['C#', '.NET', 'WPF', 'Entity Framework'],
    },
    {
      title: 'Hearthstone Tile Matching Game',
      description:
        'Tile matching memory game made with TypeScript and React.js, meant to practice my skills with TypeScript.',
      imageUrl: '/hs-logo.png',
      link: 'https://hearthstone-memory-game.vercel.app',
      techStack: ['React.js', 'TypeScript', 'JavaScript'],
    },
  ],
  github: {
    username: 'kevindarbydev', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'Kevindarbydev.Github.io',
        'Kevindarbydev',
        'LosPollosWebpageHTML-CSS',
        'CustomScreenClick_Script',
        'Stardust-Per-Hour-Calculator',
        'ReactWeatherApp',
        'Custom-Laravel-Friends',
        'ReactExpenseTracker',
        'HelloWorldReactNative',
        'Plugin-Hub-Fork',
        'Github-Stats-Transparent',
        'Gtr-Nextjs',
        'Fork_d4_tips_delete_me',
        'CSharpNumberGuessr',
        'nodeJSrest',
        'phpmarketplace',
        'OSRS_WebApp',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kevin-darby-4b1b06249',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'kevindarbydev',
    stackoverflow: '20824834/kevdarby97', // format: userid/username
    website: 'https://kevin-darby.ca',
    phone: '',
    email: 'kevindarbydev@gmail.com',
  },
  resume: {
    fileUrl: 'https://pdfhost.io/v/4MZJ6QX26_NewFormat_Oct', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'AWS',
    'Spring Boot',
    'JavaScript',
    'React.js',
    'Node.js',
    'Java',
    'Docker',
    'Jenkins',
    'C#',
    '.NET Core',
    'Next.js',
    'PHP',
    'Laravel',
    'MySQL',
    'Semantic HTML',
    'Cypress',
  ],
  experiences: [
    {
      company: 'Earthshot Group',
      position: 'Full Stack Developer',
      from: 'Dec 2023',
      to: 'Mar 2024',
      companyLink: 'https://earthshot.bio/',
    },
    {
      company: 'Idahys Partners',
      position: 'Full Stack Developer',
      from: 'March 2023',
      to: 'May 2023',
      companyLink: 'https://idahys.com/',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Developer',
      body: `Certificate of completion of John Abbott College${"'"}s Full Stack Developer program`,
      year: 'May 2023',
      link: 'https://i.imgur.com/wQOwebo.png',
    },
    {
      name: 'Front End Web Developer',
      body: `Certificate given at the half way point of John Abbott College${"'"}s Full Stack Developer program`,
      year: 'Oct 2022',
      link: 'https://i.imgur.com/vkOp3C7.jpg',
    },
  ],
  education: [
    {
      institution: 'John Abbott College',
      degree: 'Full Stack Developer AEC',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'John Abbott College',
      degree: 'Social Science DEC, Psychology Specialization',
      from: '2014',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '',
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'autumn',
      'night',
      'coffee',
      'winter',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
