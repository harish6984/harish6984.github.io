
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'DevOps | Cloud | Automation';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-background via-background to-devops-900/20">
      <div className="text-center z-10 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Harish</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono h-8">
            <span className="typing-cursor">{displayText}</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
          Passionate about building scalable infrastructure, automating deployments, 
          and enabling teams to deliver software faster and more reliably.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-devops-600 hover:bg-devops-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-border hover:bg-accent text-foreground rounded-lg font-medium transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <ChevronDown size={32} />
      </button>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-devops-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cloud-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
