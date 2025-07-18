
import { ArrowDown, Sparkles, Code, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { url } from 'inspector';
import resume from '../assets/resume.pdf'
export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-20 w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-20 right-32 w-6 h-6 text-secondary/40 animate-spin-slow" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute bottom-40 left-20 w-7 h-7 text-accent/40 animate-spin-slow" style={{ animationDelay: '2.5s' }} />
        <Code className="absolute bottom-40 right-32 w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mt-20 mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <div className="inline-block animate-bounce-slow">
              <div className="w-60 h-60 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-glow"
              style={{backgroundImage: `url('https://media.licdn.com/dms/image/v2/D5603AQFPpAraRiwGnQ/profile-displayphoto-shrink_200_200/B56ZbnXvdFG4AY-/0/1747638483433?e=2147483647&v=beta&t=X8vEH9Bes-sDuKwwgruGlcibiB9jCH6nt9Jc-f1HU5E')`, backgroundSize:'cover'}}>
                {/* <Code className="w-10 h-10 text-white animate-pulse" /> */}
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in">MERN Stack</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-rainbow bg-gradient-rainbow bg-400% hover:animate-wiggle cursor-default">
              Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            I build <span className="text-primary font-semibold">full-stack web applications</span> with modern technologies.
            <br />
            <span className="text-accent font-medium">Turning ideas into reality through code</span> ✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 hover:scale-105 transition-all duration-800 animate-glow group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
              View My Work
            </Button>
            <a href={resume} download={resume}>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 group"
            >
              <ArrowDown className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            </a>
          </div>
          
          
          {/* Fun interactive elements */}
          <div className="mt-12 flex justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 animate-pulse">
                <span className="text-2xl group-hover:animate-bounce">⚡</span>
              </div>
              <div className="text-xs text-foreground/60 mt-2">Fast</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all group-hover:scale-110 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl group-hover:animate-bounce">🎨</span>
              </div>
              <div className="text-xs text-foreground/60 mt-2">Creative</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all group-hover:scale-110 animate-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-2xl group-hover:animate-bounce">🚀</span>
              </div>
              <div className="text-xs text-foreground/60 mt-2">Modern</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
