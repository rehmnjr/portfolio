
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "KnowledgeConnect - EdTech Platform",
      description: "KnowledgeConnect is a peer-to-peer learning platform that lets students connect, share expertise, and resolve academic doubts through topic-based collaboration.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFzLa9iouuj4w/feedshare-shrink_800/B56ZcLf9mpGoAg-/0/1748244626357?e=1755734400&v=beta&t=vgln-bAMr37Gq__aGt1UCJV4UW77pIxo_ivgD4CXPz4",
      tags: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      liveUrl: "https://knowledgeconnectapp.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/KnowledgeConnectApp"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing on given agricultural data and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1015&auto=format&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://indianagro-dashboard.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/IndianAgro_Dashboard"
    },
    {
      id: 3,
      title: "WA Sender Landing Page",
      description: "Landing page for a WhatsApp automation tool with user-friendly UI.",
      image: "https://superblog.supercdn.cloud/site_cuid_cm7sqssg4005wnw4g5a487ytc/images/screenshot-2025-04-03-at-3-1743673857965-compressed.png",
      tags: ["React", "Vite", "TailwindCss", "Javascript", "Redux"],
      liveUrl: "https://wasender-y60o.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/WAsender"
    },
    {
      id: 4,
      title: "GFG CLONE",
      description: "A clone of GeeksforGeeks Landing Page, focused on interactive UI and Implemented Light/Dark Theme",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240124145208/Screenshot-2024-01-24-144732.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gfg-clone.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/gfg_clone"
    },
     {
      id: 5,
      title: "Calculator",
      description: "A simple and responsive calculator built with Javascript with modern User Interface and can perform calculations.",
      image: "https://www.figma.com/community/resource/fb1a4efc-5870-4685-bfaa-3fc6a3f7c3b8/thumbnail",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://calculator-g5sp.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/Calculator"
    },
    {
      id: 6,
      title: "Tic-Tac-Toe",
      description: "Classic Tic-Tac-Toe game with responsive UI and multiplayer logic.",
      image: "https://assetstorev1-prd-cdn.unity3d.com/key-image/4420e81d-fbaf-4810-8dc3-e293bb0c0dcb.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://tic-tac-toe-bnw1.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/tic-tac-toe"
    },
    {
      id: 7,
      title: "To Do List",
      description: "Task management app to add, delete, and update your daily to-dos.",
      image: "https://www.bytewebster.com/javascriptprojects/uploads/images/todo-list-javascriptapp.png",
      tags: ["React", "TailwindCss", "Javascript", "Redux"],
      liveUrl: "https://todolistapp-vay2.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/ToDoListApp"
    },
    {
      id: 8,
      title: "Analog Clock",
      description: "An animated analog clock built using HTML, CSS, and JavaScript.",
      image: "https://codehim.com/wp-content/uploads/2023/10/analog-and-digital-clock-design-using-html-css.png",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://analogclock-kla1.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/analog_clock"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-6">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={18} className="mr-1" /> Code
                    </a>
                  </div>
                  
                  {/* <a href="#" className="flex items-center text-foreground/70 hover:text-primary transition-colors">
                    Details <ArrowRight size={16} className="ml-1" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Projects <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}