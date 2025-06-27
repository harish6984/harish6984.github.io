
import React from 'react';
import { ExternalLink, Github, Server, Cloud, Container, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Kubernetes Multi-Cluster Management',
      description: 'Built a comprehensive multi-cluster Kubernetes management platform with automated deployments, monitoring, and disaster recovery across multiple cloud providers.',
      tech: ['Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana', 'Terraform'],
      icon: <Container size={24} />,
      github: 'https://github.com/harish/k8s-multi-cluster',
      demo: 'https://k8s-demo.harish.dev',
      color: 'devops'
    },
    {
      title: 'Cloud-Native Observability Stack',
      description: 'Designed and implemented a complete observability solution using Prometheus, Grafana, and Loki for monitoring distributed applications across AWS EKS.',
      tech: ['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'AWS EKS'],
      icon: <BarChart3 size={24} />,
      github: 'https://github.com/harish/observability-stack',
      demo: 'https://monitoring.harish.dev',
      color: 'cloud'
    },
    {
      title: 'Infrastructure as Code Pipeline',
      description: 'Automated infrastructure provisioning pipeline using Terraform and GitHub Actions, supporting multiple environments with policy-as-code validation.',
      tech: ['Terraform', 'GitHub Actions', 'AWS', 'OPA', 'Sentinel'],
      icon: <Server size={24} />,
      github: 'https://github.com/harish/iac-pipeline',
      demo: 'https://infrastructure.harish.dev',
      color: 'devops'
    },
    {
      title: 'Microservices Deployment Platform',
      description: 'Created a self-service platform for deploying microservices with automated scaling, blue-green deployments, and integrated security scanning.',
      tech: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'Harbor'],
      icon: <Cloud size={24} />,
      github: 'https://github.com/harish/microservices-platform',
      demo: 'https://platform.harish.dev',
      color: 'cloud'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of infrastructure solutions and automation projects I've built
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-hover bg-card border border-border rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${project.color}-500/20 flex items-center justify-center text-${project.color}-400`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent hover:bg-muted transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent hover:bg-muted transition-colors duration-200"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full bg-${project.color}-500/10 text-${project.color}-400 border border-${project.color}-500/20`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/harish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-devops-600 hover:bg-devops-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
