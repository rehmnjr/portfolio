
import { User, GraduationCap, Heart, Code2, Sparkles, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center hover:scale-105 transition-transform duration-300 cursor-default">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main About Card */}
          <div className="glass p-8 rounded-xl animate-fade-in hover:scale-[1.02] transition-all duration-300 mouse-cursor-tracking group">
            <div className="flex items-start mb-6">
              <div className="relative">
                <User className="mr-4 text-primary group-hover:animate-bounce" size={28} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Who I Am
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">MERN stack developer</span> with expertise in building modern web applications.
                With a strong foundation in JavaScript and TypeScript, I create seamless user experiences
                through React frontends and robust MongoDB, Express, and Node.js backends.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My approach combines <span className="text-accent font-semibold">clean code principles</span> with creative problem-solving to deliver
                scalable, efficient solutions. I love turning ideas into reality through code! ✨
              </p>
              
              {/* Fun stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center group/stat">
                  <div className="text-2xl font-bold text-primary group-hover/stat:scale-125 transition-transform">
                    <Code2 className="w-8 h-8 mx-auto mb-1" />
                    20+
                  </div>
                  <div className="text-xs text-foreground/60">Projects</div>
                </div>
                <div className="text-center group/stat">
                  <div className="text-2xl font-bold text-secondary group-hover/stat:scale-125 transition-transform">
                    <Heart className="w-8 h-8 mx-auto mb-1" />
                    100%
                  </div>
                  <div className="text-xs text-foreground/60">Passion</div>
                </div>

                <div className="text-center group/stat">
                  <div className="text-2xl font-bold text-accent group-hover/stat:scale-125 transition-transform">
                    <Zap className="w-8 h-8 mx-auto mb-1" />
                    24/7
                  </div>
                  <div className="text-xs text-foreground/60">Learning</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div className="glass p-8 rounded-xl animate-fade-in hover:scale-[1.02] transition-all duration-300 mouse-cursor-tracking group" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start mb-6">
              <div className="relative">
                <GraduationCap className="mr-4 text-accent group-hover:animate-bounce" size={28} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Education & Learning
              </h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-card/50 border border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02]">
                <div className="font-semibold text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Bachelor's in Computer Application
                </div>
                <div className="text-sm text-foreground/70 mt-1">Chandigarh University | 2022 - 2025</div>
                <div className="text-sm text-foreground/60 mt-2">
                  Specialized in Software Engineering & MERN Technologies
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
                <div className="font-semibold text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Data Structures & Algorithms  
                </div>
                <div className="text-sm text-foreground/70 mt-1">Udemy | 2023 - 2024</div>
                <div className="text-sm text-foreground/60 mt-2">
                  Foundation in Programming & Data Structures
                </div>
              </div>
              
              {/* Continuous Learning */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-[1.02]">
                <div className="font-semibold text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary animate-pulse" />
                  Continuous Learning
                </div>
                <div className="text-sm text-foreground/70 mt-1">Self-taught & Online Courses</div>
                <div className="text-sm text-foreground/60 mt-2">
                  Always exploring new technologies and best practices! 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Fun Section */}
        <div className="mt-12 glass p-8 rounded-xl animate-fade-in hover:scale-[1.01] transition-all duration-300" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-card/30 flex flex-col items-center hover:bg-card/50 transition-all hover:scale-105 cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:animate-bounce"><img src="https://cdn-icons-png.flaticon.com/512/1875/1875744.png" alt="design" width={50} /></div>
              <h4 className="font-bold text-accent mb-2">Creative Design</h4>
              <p className="text-sm text-foreground/70">
                I love creating beautiful, intuitive interfaces that users enjoy interacting with
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card/30 flex flex-col items-center hover:bg-card/50 transition-all hover:scale-105 cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:animate-bounce"><img src="https://cdn-icons-png.flaticon.com/512/10061/10061734.png" alt="Performance" width={50} /></div>
              <h4 className="font-bold text-accent mb-2">Performance</h4>
              <p className="text-sm text-foreground/70">
                Optimizing applications for speed and efficiency is my specialty
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card/30 flex flex-col items-center hover:bg-card/50 transition-all hover:scale-105 cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:animate-bounce"><img src="https://cdn-icons-png.flaticon.com/512/4254/4254890.png" alt="Innovation" width={50}/></div>
              <h4 className="font-bold text-accent mb-2">Innovation</h4>
              <p className="text-sm text-foreground/70">
                Always exploring new technologies and pushing the boundaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}