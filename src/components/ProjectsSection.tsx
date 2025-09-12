
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
      "id": 1,
      "title": "DSA Instructor - A DSA Chatbot",
      "description":"DSA-Instructor is an AI-powered assistant built with the Gemini API, designed to help users understand and solve Data Structures & Algorithms (DSA) problems through natural language queries.",
      "image": "https://media.licdn.com/dms/image/v2/D5622AQFAk1_SE-vAdw/feedshare-shrink_800/B56ZkvbPtSHcAg-/0/1757437298126?e=1760572800&v=beta&t=k2K21XpjsERcZ3eCPEpJaFIvBNacTujmGVWH3417YTs",
      "tags": ["React", "Node.js", "Express", "Gemini", "Google Generative AI", "Tailwind","Vant"],
      "liveUrl": "https://dsa-instructor-xyar.onrender.com/",
      "githubUrl": "https://github.com/rehmnjr/DSA-Instructor"
    },
      {
      "id": 2,
      "title": "AskMyDoc - A PDF Chatbot (RAG System)",
      "description": "AskMyDoc is a web-based application that allows users to chat with their PDF documents. It leverages Retrieval-Augmented Generation (RAG) to provide accurate, context-aware answers directly from the content of uploaded PDFs, acting as a personal document-based knowledge assistant.",
      "image": "https://media.licdn.com/dms/image/v2/D5622AQGf_1wLI9lE2A/feedshare-shrink_2048_1536/B56ZiDfEmuHcAo-/0/1754552622130?e=1760572800&v=beta&t=_R8eH4xSVIaz_EMVdnoW-XZ1RXxNSmjUfOZ1T4Eqtmo",
      "tags": ["Next.js", "React", "Node.js", "Express", "LangChain", "Google Generative AI", "HNSWLib"],
      "liveUrl": "https://askmydoc-pi.vercel.app/",
      "githubUrl": "https://github.com/rehmnjr/AskMyDoc"
    },
    {
      id: 3,
      title: "KnowledgeConnect - EdTech Platform",
      description: "KnowledgeConnect is a peer-to-peer learning platform that lets students connect, share expertise, and resolve academic doubts through topic-based collaboration.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFzLa9iouuj4w/feedshare-shrink_800/B56ZcLf9mpGoAg-/0/1748244626357?e=1760572800&v=beta&t=DjOpBT8FM04cw11tgf_Z-lZ5CdPAblYK5CeknVLjGBE",
      tags: ["MongoDB", "Express", "React", "Node.js", "Redux","Tailwind"],
      liveUrl: "https://knowledgeconnectapp.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/KnowledgeConnectApp"
    },
    {
      id: 4,
      title: "JobPortalApp  - A Job Platform",
      description: "A responsive and dynamic job portal built with React.js. It allows users to search, filter, and apply for jobs, while employers can create and manage job listings. Features include dark/light mode toggle, salary range slider, real-time filtering, and a clean UI using Context API for state management.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQHmba3Ye0ijMA/feedshare-shrink_800/B56Zf9pFSHGUAg-/0/1752307097108?e=1760572800&v=beta&t=VRe8ihghpdALwD3rccexiuZaHVY6S8h5xqv-G3HBLak",
      tags: ["MongoDB", "Express", "React", "Node.js", "Redux","context Management", "Tailwind"],
      liveUrl: "https://jobportalapp-mnqv.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/jobportalapp"
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing on given agricultural data and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1015&auto=format&fit=crop",
      tags: ["React", "Node.js","Mantine UI","Tailwind", "MongoDB", "Express"],
      liveUrl: "https://indianagro-dashboard.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/IndianAgro_Dashboard"
    },
    {
      id: 6,
      title: "WA Sender Landing Page",
      description: "Landing page for a WhatsApp automation tool with user-friendly UI.",
      image: "https://fuzen.io/wp-content/uploads/2024/11/image-edited.png",
      tags: ["React", "Vite", "TailwindCss", "Javascript", "Redux"],
      liveUrl: "https://wasender-y60o.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/WAsender"
    },
    {
      id: 7,
      title: "GFG CLONE",
      description: "A clone of GeeksforGeeks Landing Page, focused on interactive UI and Implemented Light/Dark Theme",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240124145208/Screenshot-2024-01-24-144732.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gfg-clone.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/gfg_clone"
    },
     {
      id: 8,
      title: "Calculator",
      description: "A simple and responsive calculator built with Javascript with modern User Interface and can perform calculations.",
      image: "https://www.figma.com/community/resource/fb1a4efc-5870-4685-bfaa-3fc6a3f7c3b8/thumbnail",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://calculator-g5sp.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/Calculator"
    },
    {
      id: 9,
      title: "Tic-Tac-Toe",
      description: "Classic Tic-Tac-Toe game with responsive UI and multiplayer logic.",
      image: "https://assetstorev1-prd-cdn.unity3d.com/key-image/4420e81d-fbaf-4810-8dc3-e293bb0c0dcb.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://tic-tac-toe-bnw1.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/tic-tac-toe"
    },
    {
      id: 10,
      title: "To Do List",
      description: "Task management app to add, delete, and update your daily to-dos.",
      image: "https://www.bytewebster.com/javascriptprojects/uploads/images/todo-list-javascriptapp.png",
      tags: ["React", "TailwindCss", "Javascript", "Redux"],
      liveUrl: "https://todolistapp-vay2.onrender.com/",
      githubUrl: "https://github.com/rehmnjr/ToDoListApp"
    },
    // {
    //   id: 11,
    //   title: "Analog Clock",
    //   description: "An animated analog clock built using HTML, CSS, and JavaScript.",
    //   image: "https://codehim.com/wp-content/uploads/2023/10/analog-and-digital-clock-design-using-html-css.png",
    //   tags: ["HTML", "CSS", "JavaScript", "Figma"],
    //   liveUrl: "https://analogclock-kla1.onrender.com/",
    //   githubUrl: "https://github.com/rehmnjr/analog_clock"
    // }
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