import React from 'react';
import { ExternalLink, Github, Server, Cloud, Container, BarChart3, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AWS Lambda Data Processing Pipeline',
      description: 'Developed scalable AWS Lambda functions in Python for large-scale data transformation and analytics on EMR clusters. Implemented automated data processing workflows with fault tolerance and auto-scaling capabilities.',
      tech: ['AWS Lambda', 'Python', 'EMR', 'S3', 'CloudWatch'],
      icon: <Cloud size={24} />,
      github: 'https://github.com/harish-maddukuri',
      demo: 'https://aws-pipeline.example.com',
      color: 'cloud'
    },
    {
      title: 'High-Availability Kubernetes Infrastructure',
      description: 'Architected and deployed production-grade Kubernetes clusters with advanced networking, auto-scaling, and disaster recovery. Managed containerized workloads across private and public clouds using Helm for reproducible deployments.',
      tech: ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'Prometheus'],
      icon: <Container size={24} />,
      github: 'https://github.com/harish-maddukuri',
      demo: 'https://k8s-cluster.example.com',
      color: 'devops'
    },
    {
      title: 'Multi-Environment CI/CD Pipeline',
      description: 'Built comprehensive CI/CD pipeline using Jenkins, Maven, and Nexus with automated testing, security scanning, and multi-stage deployments. Integrated with AWS services for seamless cloud deployment and monitoring.',
      tech: ['Jenkins', 'Maven', 'Nexus', 'GitHub Actions', 'AWS'],
      icon: <GitBranch size={24} />,
      github: 'https://github.com/harish-maddukuri',
      demo: 'https://cicd-pipeline.example.com',
      color: 'cloud'
    },
    {
      title: 'Comprehensive Monitoring Stack',
      description: 'Implemented enterprise-grade monitoring and alerting system using Prometheus, Grafana, and CloudWatch. Set up automated incident response and troubleshooting workflows for Kubernetes nodes and applications.',
      tech: ['Prometheus', 'Grafana', 'CloudWatch', 'New Relic', 'PagerDuty'],
      icon: <BarChart3 size={24} />,
      github: 'https://github.com/harish-maddukuri',
      demo: 'https://monitoring.example.com',
      color: 'devops'
    },
    {
      title: 'Infrastructure Automation with Terraform',
      description: 'Designed Infrastructure as Code solutions using Terraform for rapid deployment of cloud architectures. Automated provisioning of VPCs, security groups, and multi-tier applications with cost optimization strategies.',
      tech: ['Terraform', 'AWS', 'Ansible', 'CloudFormation', 'Cost Optimization'],
      icon: <Server size={24} />,
      github: 'https://github.com/harish-maddukuri',
      demo: 'https://infrastructure.example.com',
      color: 'cloud'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of cloud infrastructure and automation solutions I've architected
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
            href="https://github.com/harish-maddukuri"
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
