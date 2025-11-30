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
      period: '2023 — Present ',
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
    { name: 'Web Design', level: 80 },
    { name: 'Frontend Development', level: 75 },
    { name: 'Backend Development', level: 55 },
    { name: 'Database Design', level: 67 },
  ],
}

export const portfolioData = {
  categories: ['all', 'web design', 'applications',],
  projects: [
    {
      title: 'Trello Clone',
      category: 'web design',
      image: '/Trello-Clone.png',
      description: 'A Trello-style task manager with boards, lists, and cards — featuring signup/login, a real-time dashboard, drag-and-drop, and collaboration tools.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind', 'Jenkins CI/CD'],
      liveUrl: 'https://trello-neon-ten.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/Trello-Clone',
    },
    {
      title: 'Fullstack Docker QR',
      category: 'applications',
      image: '/restaurant-qr-code-ordering.png',
      description: 'A Full-Stack application containerized with Docker for easy deployment and scalability. Includes user authentication, a dynamic dashboard, API integration, database connectivity, and a modern responsive UI.',
      tech: ['Next.js', 'Node.js', 'Tailwind', 'TypeScript','Docker','MinIO', 'PostgreSQL 16','lucide-react','shadcn/ui'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pongpitchit/Qrcode-Order-Docker.git',
    },
    {
      title: 'Portfolio Website v3',
      category: 'web design',
      image: '/portfolio-v3.png',
      description: 'A modern portfolio website showcasing projects, skills, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion for a smooth, responsive user experience.',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://portfolio-pongpitchit.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/Portfolio-v3',
    },
    {
      title: 'FullStack Next',
      category: 'web design',
      image: '/fullstack-docker.png',
      description: 'A Full-Stack Next.js application featuring user authentication, a dynamic dashboard, API integration, database connectivity, and modern UI components. Designed for high performance, scalability, and a seamless user experience.',
      tech: ['Next.js', 'Node.js', 'Supabase', 'Tailwind', 'TypeScript'],
      liveUrl: 'https://next-dit205.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/FullStack-Next.js.git',
    },
    {
      title: 'Thailand Journey v3',
      category: 'web design',
      image: '/Thailand-Journey-v3.png',
      description: 'Embark on a scenic route across Southeast Asia and the Himalayas, traveling through ancient cities and breathtaking alpine landscapes before reaching the spiritual heart of Tibet.',
      tech: ['React Native', 'Node.js','Tailwind', 'TypeScript'],
      liveUrl: 'https://thailand-journey.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/Thailand-Journey-v3.git',
    },
    {
      title: 'Fall Detection',
      category: 'applications',
      image: '/computer-vision-fall-detection.png',
      description: 'This project aims to develop a fall detection system using Python. The system utilizes various sensors and algorithms to detect falls in real-time, providing alerts and data for further analysis.',
      tech: ['Python', 'AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pongpitchit/Fall-Detection.git',
    },
    {
      title: 'Guinea Pig Care',
      category: 'web design',
      image: '/guinea-pig.png',
      description: 'WordPress website dedicated to guinea pig care and pet management tips.',
      tech: ['WordPress'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ],
}

// export const blogData = {
//   posts: [
//     {
//       title: 'Building Modern Web Applications with Next.js 15',
//       category: 'Development',
//       date: 'Mar 15, 2024',
//       readTime: '8 min',
//       image: '/web-development-coding.png',
//       excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
//       tags: ['Next.js', 'React', 'Web Development'],
//       slug: 'building-modern-web-apps-nextjs-15',
//     },
//     {
//       title: 'Microservices Architecture: A Complete Guide',
//       category: 'Architecture',
//       date: 'Mar 8, 2024',
//       readTime: '12 min',
//       image: '/software-architecture.jpg',
//       excerpt: 'Design scalable microservices with real-world examples.',
//       tags: ['Architecture', 'Backend', 'DevOps'],
//       slug: 'microservices-architecture-guide',
//     },
//     {
//       title: 'The Art of UI/UX: Creating Delightful Experiences',
//       category: 'Design',
//       date: 'Feb 28, 2024',
//       readTime: '6 min',
//       image: '/ui-ux-design-concept.png',
//       excerpt: 'Principles of exceptional UI/UX design for interfaces users love.',
//       tags: ['Design', 'UI/UX', 'Frontend'],
//       slug: 'art-of-uiux-delightful-experiences',
//     },
//     {
//       title: 'TypeScript Best Practices for Large-Scale Applications',
//       category: 'Development',
//       date: 'Feb 20, 2024',
//       readTime: '10 min',
//       image: '/web-development-coding.png',
//       excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
//       tags: ['TypeScript', 'JavaScript', 'Best Practices'],
//       slug: 'typescript-best-practices',
//     },
//     {
//       title: 'Building Real-Time Applications with WebSockets',
//       category: 'Development',
//       date: 'Feb 12, 2024',
//       readTime: '9 min',
//       image: '/software-architecture.jpg',
//       excerpt: 'Implement real-time features using WebSockets and modern frameworks.',
//       tags: ['WebSockets', 'Real-time', 'Backend'],
//       slug: 'realtime-apps-websockets',
//     },
//     {
//       title: 'Mastering CSS Grid and Flexbox Layouts',
//       category: 'Design',
//       date: 'Feb 5, 2024',
//       readTime: '7 min',
//       image: '/ui-ux-design-concept.png',
//       excerpt: 'Modern CSS layout techniques with practical examples.',
//       tags: ['CSS', 'Layout', 'Frontend'],
//       slug: 'mastering-css-grid-flexbox',
//     },
//   ],
// }

export const contactData = {
  email: 'Pongpitchitza@gmail.com',
  phone: '',
  location: 'Bangkok',
  mapEmbedUrl:
    'https://maps.app.goo.gl/kr1j1jXq1deVdP8V8',
}
