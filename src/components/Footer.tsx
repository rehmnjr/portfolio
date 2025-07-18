
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 glass mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-primary">
              MERN<span className="text-accent">Dev</span>
            </a>
            <p className="text-sm text-foreground/70 mt-2">
              Building exceptional web experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <span className="text-sm text-foreground/70">Made with</span>
              <Heart className="mx-1 text-primary" size={16} />
              <span className="text-sm text-foreground/70">using React & Tailwind</span>
            </div>
            <p className="text-sm text-foreground/50">
              &copy; {new Date().getFullYear()} MERN Developer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
