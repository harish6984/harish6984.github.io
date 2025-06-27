
import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable cloud infrastructure and automation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="bg-gradient-to-br from-devops-500/20 to-cloud-500/20 rounded-2xl p-8 mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-devops-400 to-cloud-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User size={48} className="text-background" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Harish Maddukuri</h3>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Rome, Italy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>4+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Cloud DevOps Engineer</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Cloud DevOps Engineer with over 4 years of experience in IT infrastructure, 
              specializing in cloud management, configuration management, and build & release processes. 
              Currently working at Farmerswife Software, I focus on deploying scalable solutions across 
              multiple environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise includes configuring cloud formations with Terraform, managing Kubernetes 
              clusters with high availability, and implementing robust CI/CD pipelines. I have extensive 
              experience with AWS services, containerization technologies, and monitoring solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-devops-400 mb-2">Cloud Platforms</h4>
                <p className="text-sm text-muted-foreground">AWS, Azure</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-cloud-400 mb-2">Container Orchestration</h4>
                <p className="text-sm text-muted-foreground">Kubernetes, Docker</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-devops-400 mb-2">Infrastructure as Code</h4>
                <p className="text-sm text-muted-foreground">Terraform, Ansible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-cloud-400 mb-2">Monitoring</h4>
                <p className="text-sm text-muted-foreground">Prometheus, Grafana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
