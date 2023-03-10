// gitprofile.config.js

const config = {
  github: {
    username: 'kevindarbydev', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'Kevindarbydev.Github.io',
        'Kevindarbydev',
        'RunescapeAlKharidAgilityScript',
        'runescapeDraynorAgilityScript',
        'LosPollosWebpageHTML-CSS',
        'ReactExpenseTracker',
        'HelloWorldReactNative',
        'SpringBootMarketplace',
        'WebDev2_ClassExerciseOne',
        'runescapeChickenKillerScript',
        'nodeJSrest',
        'phpmarketplace',
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
    dev: '',
    stackoverflow: '20824834/kevdarby97', // format: userid/username
    website: 'https://kevindarbydev.github.io',
    phone: '',
    email: 'kevindarbydev@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    '.NET',
    'WPF',
     'Java',
    'Docker',
    'Jenkins',
    'C#',
    'ASP.NET Core',
    'Entity Framework',  
    'AWS',
    'Spring Boot',
    'Python',
    'Thymeleaf',
    'MySQL',
    'MongoDB',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'SUKU',
      position: 'Community Manager',
      from: 'May 2020',
      to: 'Jan 2021',
      companyLink: 'https://www.suku.world',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Concordia University',
      degree: 'Bachelors of Philosophy',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'John Abbott College',
      degree: 'Full Stack Developer AEC',
      from: '2021',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'TicketBlaster',
      description:
        'TicketMaster Clone app, where users can sign up and buy tickets for upcoming local concerts, with realtime data being fetched and displayed. MERN Stack',
      imageUrl: 'https://i.imgur.com/CXtwEY1.png',
      link: 'https://clever-hotteok-f60642.netlify.app',
    },
    {
      title: 'Los Pollos Hermanos',
      description:
        'Mock website for restauraunt "Los Pollos Hermanos" from Breaking Bad. Made with Vanilla JS, HTML & CSS',
      imageUrl: 'https://i.imgur.com/SeeLuoQ.png',
      link: 'https://tiny-kitten-7814e0.netlify.app',
    },
    {
      title: 'WOW Item Lookup',
      description:
        'Project to practice working with APIs in React, enter a number between 5000 and 50000.',
      imageUrl: 'https://i.imgur.com/qZsWLHE.png',
      link: 'https://cheery-speculoos-659bd3.netlify.app',
    },
    {
      title: 'Personal Weather App',
      description:
        'Search for the weather anywhere in North America, loads Montreal by default.',
      imageUrl: 'https://i.imgur.com/wJOACFG.png',
      link: 'https://kevin-darby.ca',
    },
      {
      title: 'Regex Records',
      description:
        'Discogs clone made with Laravel and React, users can add albums to their collections with real data fetched from Discogs API. Users can also add each other as friends and send messages, as well as sell and purchase albums, with Stripe and PayPal checkout.',
      imageUrl: 'https://i.imgur.com/T0P6IuT.png',
      link: 'https://laravelprojectfsd05.com',
    },
       {
      title: 'Regex Academy',
      description:
        'RegexAcademy is a school management system, where administrative users can enroll students & teachers into custom created classes. Users can also edit and delete any of their inputted entries. The program also has certain administrative helper features, such as exporting data to file, and graphical displays of the programs data. Made with WPF C#.',
      imageUrl: 'https://user-images.githubusercontent.com/92401368/218127311-959fd027-30ac-4cab-ad5c-bb4933dd1ec5.png',
      link: 'https://github.com/kevindarbydev/RegexAcademy',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
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
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
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
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
