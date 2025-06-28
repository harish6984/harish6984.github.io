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
    { 
      name: 'AWS Certified Solutions Architect - Associate',
      image: '/lovable-uploads/solutions-architect.png'
    },
    { 
      name: 'AWS Certified Cloud Practitioner',
      image: '/lovable-uploads/cloud-practitioner.png'
    },
    { 
      name: 'Microsoft Certified: Azure Fundamentals',
      image: '/lovable-uploads/azure-fundamentals.png'
    },
    { 
      name: 'HashiCorp Certified: Terraform Associate',
      image: '/lovable-uploads/terraform.png'
    }
  ];

  const tools = [
    { name: 'Kubernetes' },
    { name: 'Docker' },
    { name: 'AWS' },
    { name: 'Terraform' },
    { name: 'Prometheus' },
    { name: 'Jenkins' },
    { name: 'Python' },
    { name: 'Ansible' }
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
        <div className="bg-card/30 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="relative group transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-600/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60 group-hover:opacity-80"></div>
                
                {/* Glass card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/95 via-background/85 to-background/75 backdrop-blur-xl border border-white/10 p-6 h-[200px] flex flex-col items-center justify-center group-hover:border-white/20 transition-all duration-300">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-4">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent line-clamp-2">{cert.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Bars */}
        <div className="bg-card/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Proficiencies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="relative group transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-70"></div>
                
                {/* Glass card */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/5"></div>
                  <div className="relative p-4">
                    <span className="font-medium bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">{tool.name}</span>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
