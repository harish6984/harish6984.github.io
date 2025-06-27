
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/harish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-devops-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/harish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-devops-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:harish@example.com"
              className="text-muted-foreground hover:text-devops-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground flex items-center gap-1">
              Built with <Heart size={16} className="text-red-500 fill-current" /> by 
              <span className="gradient-text font-medium ml-1">Harish</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
