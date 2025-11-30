import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Trello Clone',
    description:
      'A Trello-style task manager with boards, lists, and cards — featuring signup/login, a real-time dashboard, drag-and-drop, and collaboration tools.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind', 'Jenkins CI/CD'],
    image: '/Trello-Clone.png',
  },
  {
    title: 'Fullstack Docker QR',
    description:
      'A full-stack restaurant QR-code ordering system containerized with Docker. Includes authentication, dashboard, API integration, database connectivity, and a modern responsive UI.',
    tags: ['Next.js', 'Node.js', 'Tailwind', 'TypeScript', 'Docker', 'MinIO', 'PostgreSQL 16', 'lucide-react', 'shadcn/ui'],
    image: '/restaurant-qr-code-ordering.png',
  },
  {
    title: 'Portfolio Website v3',
    description:
      'A modern portfolio website showcasing projects, skills, and contact information — built with Next.js, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/portfolio-v3.png',
  },
  {
    title: 'FullStack Next',
    description:
      'A full-stack Next.js application with authentication, a dynamic dashboard, API integration, Supabase database connectivity, and modern UI components.',
    tags: ['Next.js', 'Node.js', 'Supabase', 'Tailwind', 'TypeScript'],
    image: '/fullstack-docker.png',
  },
  {
    title: 'Thailand Journey v3',
    description:
      'A scenic travel experience across Southeast Asia and the Himalayas before reaching the spiritual heart of Tibet — built with React Native.',
    tags: ['React Native', 'Node.js', 'Tailwind', 'TypeScript'],
    image: '/thailand-journey-v3.png',
  },
  {
    title: 'Fall Detection System',
    description:
      'A Python-based fall detection system designed to analyze real-time movement data and trigger alerts when a fall is detected.',
    tags: ['Python', 'AI'],
    image: '/computer-vision-fall-detection.png',
  },
  {
    title: 'Guinea Pig Care Website',
    description:
      'A WordPress-based website dedicated to guinea pig care tips, health guides, and proper pet management.',
    tags: ['WordPress'],
    image: '/guinea-pig.png',
  },
]

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Recent Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
