
import React from 'react';
import { 
  Cloud, 
  Container, 
  Server, 
  Database, 
  GitBranch, 
  Shield, 
  BarChart3, 
  Zap,
  Settings,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud size={24} />,
      skills: ['AWS', 'Azure', 'EC2', 'RDS', 'S3', 'Lambda'],
      color: 'devops'
    },
    {
      title: 'Containerization',
      icon: <Container size={24} />,
      skills: ['Docker', 'Kubernetes', 'Helm', 'Container Registry'],
      color: 'cloud'
    },
    {
      title: 'Infrastructure as Code',
      icon: <Server size={24} />,
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'ARM Templates'],
      color: 'devops'
    },
    {
      title: 'CI/CD & Automation',
      icon: <GitBranch size={24} />,
      skills: ['Jenkins', 'GitHub Actions', 'Maven', 'Nexus', 'AWS CodePipeline'],
      color: 'cloud'
    },
    {
      title: 'Monitoring & Observability',
      icon: <BarChart3 size={24} />,
      skills: ['Prometheus', 'Grafana', 'CloudWatch', 'New Relic'],
      color: 'devops'
    },
    {
      title: 'Security & Access Management',
      icon: <Shield size={24} />,
      skills: ['AWS IAM', 'Security Groups', 'RBAC', 'Network Policies'],
      color: 'cloud'
    },
    {
      title: 'Databases & Storage',
      icon: <Database size={24} />,
      skills: ['RDS', 'DynamoDB', 'ElastiCache', 'S3', 'EBS'],
      color: 'devops'
    },
    {
      title: 'Scripting & Automation',
      icon: <Zap size={24} />,
      skills: ['Python', 'Bash', 'PowerShell', 'Lambda Functions'],
      color: 'cloud'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect - Associate', level: 100 },
    { name: 'AWS Certified Cloud Practitioner', level: 100 },
    { name: 'Microsoft Certified: Azure Fundamentals', level: 100 }
  ];

  const tools = [
    { name: 'Kubernetes', level: 90 },
    { name: 'Docker', level: 95 },
    { name: 'AWS', level: 88 },
    { name: 'Terraform', level: 85 },
    { name: 'Prometheus', level: 82 },
    { name: 'Jenkins', level: 87 },
    { name: 'Python', level: 80 },
    { name: 'Ansible', level: 78 }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build reliable, scalable infrastructure
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`card-hover bg-card border border-border rounded-xl p-6 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${category.color}-500/20 flex items-center justify-center mb-4 text-${category.color}-400`}>
                {category.icon}
              </div>
              <h3 className="font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs px-2 py-1 bg-accent rounded-md text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="bg-card border border-border rounded-lg p-4 text-center">
                <Shield className="w-12 h-12 text-devops-400 mx-auto mb-3" />
                <h4 className="font-medium text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Bars */}
        <div className="bg-card/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={tool.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-sm text-muted-foreground">{tool.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-devops-500 to-cloud-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
