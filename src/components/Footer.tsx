
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 glass mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-primary">
              Rehman<span className="text-accent">Jr</span>
            </a>
            <p className="text-sm text-foreground/70 mt-2">
              
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2 gap-1">
              <span className="text-sm text-foreground/70">Made with</span>
               
              <span className="text-sm text-foreground/70">using React & Tailwind</span>
            </div>
            <p className="text-sm text-foreground/50">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
