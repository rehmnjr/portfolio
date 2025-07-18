
import { useState } from 'react';
import { Code, Server, Database, Globe, Palette, LineChart, Sparkles, Zap, Heart } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: {
    name: string;
    level: number;
    icon: string;
  }[];
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  
  const skillCategories: Record<string, SkillCategory> = {
    frontend: {
      name: "Frontend",
      icon: <Code size={24} />,
      color: "primary",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML/CSS", level: 90, icon: "🎨" },
        { name: "Redux", level: 85, icon: "🔄" },
      ]
    },
    backend: {
      name: "Backend",
      icon: <Server size={24} />,
      color: "secondary",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express", level: 88, icon: "🚀" },
        { name: "REST API", level: 92, icon: "🔗" },
        { name: "GraphQL", level: 80, icon: "📊" },
        { name: "Authentication", level: 85, icon: "🔐" },
      ]
    },
    database: {
      name: "Database",
      icon: <Database size={24} />,
      color: "accent",
      skills: [
        { name: "MongoDB", level: 92, icon: "🍃" },
        { name: "Mongoose", level: 88, icon: "🦫" },
        { name: "SQL", level: 75, icon: "📋" },
        { name: "Redis", level: 70, icon: "🔴" },
        { name: "Data Modeling", level: 85, icon: "📐" },
      ]
    },
    other: {
      name: "Other",
      icon: <Globe size={24} />,
      color: "primary",
      skills: [
        { name: "Git", level: 90, icon: "🌿" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Testing", level: 80, icon: "🧪" },
        { name: "Agile/Scrum", level: 85, icon: "🏃" },
        { name: "AWS/Azure", level: 75, icon: "☁️" },
      ]
    },
  };

  return (
    <section id="skills" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center hover:scale-105 transition-transform duration-300 cursor-default">
          My Skills
        </h2>
        
        <div className="grid lg:grid-cols-[350px_1fr] gap-8 max-w-6xl mx-auto">
          {/* Category Selection */}
          <div className="glass p-6 rounded-xl animate-fade-in hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              Technologies
            </h3>
            <ul className="space-y-3">
              {Object.entries(skillCategories).map(([key, category]) => (
                <li key={key}>
                  <button 
                    className={`w-full flex items-center p-4 rounded-lg text-left transition-all duration-300 group ${
                      activeCategory === key 
                        ? 'glass bg-card/90 text-primary scale-105 shadow-lg' 
                        : 'hover:bg-card/50 hover:scale-102'
                    }`}
                    onClick={() => setActiveCategory(key)}
                  >
                    <span className={`mr-3 transition-all duration-300 ${activeCategory === key ? 'animate-bounce' : 'group-hover:animate-pulse'}`}>
                      {category.icon}
                    </span>
                    <span className="font-medium">{category.name}</span>
                    {activeCategory === key && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Skills Display */}
          <div className="glass p-8 rounded-xl animate-fade-in hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="animate-bounce">{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].name} Skills
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in hover:scale-[1.02] transition-all duration-300 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium flex items-center gap-2">
                      <span className="text-xl group-hover:animate-bounce">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-primary font-bold text-lg animate-pulse">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: 'rainbow 3s ease infinite'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* MERN Stack Showcase */}
        <div className="mt-16 glass p-8 rounded-xl animate-fade-in hover:scale-[1.01] transition-all duration-300" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            MERN Stack Expertise
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-card/70 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer group mouse-cursor-gradient-tracking">
              <div className="mb-4 text-primary group-hover:animate-bounce">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Code size={28} />
                </div>
              </div>
              <h4 className="font-bold mb-2 text-lg">MongoDB</h4>
              <p className="text-sm text-foreground/70">
                NoSQL database for flexible, scalable data storage and retrieval. 🍃
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/70 border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 cursor-pointer group mouse-cursor-gradient-tracking">
              <div className="mb-4 text-secondary group-hover:animate-bounce">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                  <Server size={28} />
                </div>
              </div>
              <h4 className="font-bold mb-2 text-lg">Express</h4>
              <p className="text-sm text-foreground/70">
                Fast, unopinionated backend framework for Node.js applications. 🚀
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/70 border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 cursor-pointer group mouse-cursor-gradient-tracking">
              <div className="mb-4 text-accent group-hover:animate-bounce">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                  <Palette size={28} />
                </div>
              </div>
              <h4 className="font-bold mb-2 text-lg">React</h4>
              <p className="text-sm text-foreground/70">
                Component-based library for building dynamic user interfaces. ⚛️
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/70 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer group mouse-cursor-gradient-tracking">
              <div className="mb-4 text-primary group-hover:animate-bounce">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <LineChart size={28} />
                </div>
              </div>
              <h4 className="font-bold mb-2 text-lg">Node.js</h4>
              <p className="text-sm text-foreground/70">
                JavaScript runtime for server-side execution and API development. 🟢
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
