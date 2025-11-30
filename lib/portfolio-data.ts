export const profileData = {
  name: 'Pongpitchit',
  title: 'Full-Stack Developer',
  avatar: '/professional-developer-avatar.png',
  email: 'Pongpitchitza@gmail.com',
  studying: 'Rangsit University',
  Faculty: 'Digital Innovation and Information Technology',
  // location: 'San Francisco, California, USA',
  social: {
    github: 'https://github.com/Pongpitchit',
    // twitter: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/Besttpopxlarr',
  },
}

export const aboutData = {
  description: [
    "I'm a Full-Stack Developer based in Thailand, currently studying at Rangsit University (RSU), Faculty of Digital Innovation and Information Technology (DIT). I specialize in web development and building modern digital solutions. I enjoy transforming complex problems into simple, intuitive, and visually appealing applications.",
    "My work focuses on creating functional, user-friendly, and aesthetically engaging websites and applications. I add a personal touch to every project to ensure it stands out and clearly communicates your message. I’ve worked with technologies like React, Next.js, Node.js, and modern cloud platforms."
  ],
  services: [
    {
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Zap',
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions with Node.js and modern frameworks.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Development',
      description: 'Professional development of mobile applications with React Native and modern tools.',
    },
    {
      icon: 'PenTool',
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user experience.',
    },
  ],
  Projectinprogress: [
    {
      avatar: '/Trello-Clone.png',
      name: 'Trello-Clone',
      text: 'A Trello-style task manager with boards, lists, and cards — featuring signup/login, a real-time dashboard, drag-and-drop, and collaboration tools.',
    },
    {
      avatar: '/fullstack-docker.png',
      name: 'FullStack-Next.js',
      text: 'A Full-Stack Next.js application featuring user authentication, a dynamic dashboard, API integration, database connectivity, and modern UI components. Designed for high performance, scalability, and a seamless user experience.',
    },
    {
      avatar: '/restaurant-qr-code-ordering.png',
      name: 'Fullstack-Docker-QR',
      text: 'A Full-Stack application containerized with Docker for easy deployment and scalability. Includes user authentication, a dynamic dashboard, API integration, database connectivity, and a modern responsive UI.',
    },
  ],
  skills: [
    { name: 'Next.js', logo: '/next-icon.png' },
    { name: 'HTML', logo: '/html-logo.png' },
    { name: 'CSS', logo: '/css-logo.png' },
    { name: 'React', logo: '/react-logo.png' },
    { name: 'Python', logo: '/python-logo.png' },
    { name: 'TypeScript', logo: '/typescript-logo.png' },
  ],
}

export const resumeData = {
  education: [

    {
      title: 'Rangsit University',
      period: '2023 — ',
      description: 'Currently studying at Rangsit University (RSU), Faculty of Digital Innovation and Information Technology (DIT)',
    },
    {
      title: 'Attawit Commercial Technology College',
      period: '2017 — 2019',
      description:
        'Studied computer systems with a focus on business computing, software applications, and practical IT skills, completed vocational certificate (Vocational Diploma) in the Faculty of Business Computer.',
    },

  ],
  // experience: [
  //   {
  //     title: 'Senior Full-Stack Developer',
  //     period: '2020 — Present',
  //     description:
  //       'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
  //   },
  //   {
  //     title: 'Full-Stack Developer',
  //     period: '2018 — 2020',
  //     description:
  //       'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create seamless user experiences.',
  //   },
  // ],
  skills: [
    { name: 'Web Design', level: 90 },
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 85 },
    { name: 'Database Design', level: 80 },
  ],
}

export const portfolioData = {
  categories: ['all', 'web design', 'applications', 'web development'],
  projects: [
    {
      title: 'E-Commerce Platform',
      category: 'web development',
      image: '/modern-ecommerce-website.png',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
    },
    {
      title: 'Task Management App',
      category: 'applications',
      image: '/task-management-interface.png',
      description: 'Collaborative task manager with real-time updates',
      tech: ['React', 'Firebase', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/taskmanager',
    },
    {
      title: 'Portfolio Website',
      category: 'web design',
      image: '/minimalist-portfolio-design.jpg',
      description: 'Modern portfolio design for creative professionals',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
    },
    {
      title: 'Social Media Dashboard',
      category: 'web development',
      image: '/analytics-dashboard.png',
      description: 'Analytics dashboard with data visualization',
      tech: ['React', 'D3.js', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/dashboard',
    },
    {
      title: 'Mobile Banking App',
      category: 'applications',
      image: '/banking-app-interface.png',
      description: 'Secure mobile banking application',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/banking',
    },
    {
      title: 'Restaurant Website',
      category: 'web design',
      image: '/restaurant-website-design.png',
      description: 'Elegant restaurant website with online ordering',
      tech: ['Next.js', 'Sanity CMS', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/restaurant',
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
    {
      title: 'The Art of UI/UX: Creating Delightful Experiences',
      category: 'Design',
      date: 'Feb 28, 2024',
      readTime: '6 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Principles of exceptional UI/UX design for interfaces users love.',
      tags: ['Design', 'UI/UX', 'Frontend'],
      slug: 'art-of-uiux-delightful-experiences',
    },
    {
      title: 'TypeScript Best Practices for Large-Scale Applications',
      category: 'Development',
      date: 'Feb 20, 2024',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-best-practices',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      category: 'Development',
      date: 'Feb 12, 2024',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt: 'Implement real-time features using WebSockets and modern frameworks.',
      tags: ['WebSockets', 'Real-time', 'Backend'],
      slug: 'realtime-apps-websockets',
    },
    {
      title: 'Mastering CSS Grid and Flexbox Layouts',
      category: 'Design',
      date: 'Feb 5, 2024',
      readTime: '7 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Modern CSS layout techniques with practical examples.',
      tags: ['CSS', 'Layout', 'Frontend'],
      slug: 'mastering-css-grid-flexbox',
    },
  ],
}

export const contactData = {
  email: 'john@example.com',
  phone: '+1 (234) 567-890',
  location: 'San Francisco, CA',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14220298434!2d-122.50764017406082!3d37.75767381338211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
}
