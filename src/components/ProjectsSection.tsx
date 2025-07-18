
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
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, cart functionality, secure checkout, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop",
      tags: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interfaces, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1039&auto=format&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization, sentiment analysis, and scheduling capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1015&auto=format&fit=crop",
      tags: ["React", "Chart.js", "Express", "MongoDB", "OAuth"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project"
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      description: "A real estate platform featuring property listings, advanced search, map integration, and virtual tours.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop",
      tags: ["MERN", "Google Maps API", "Cloudinary", "Authentication"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project"
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
                  
                  <a 
                    href="#" 
                    className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                  >
                    Details <ArrowRight size={16} className="ml-1" />
                  </a>
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