
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Setting up High-Availability Kubernetes Clusters',
      excerpt: 'A comprehensive guide to deploying production-ready Kubernetes clusters with multiple master nodes and automated failover capabilities.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Kubernetes', 'High Availability', 'Production']
    },
    {
      title: 'Infrastructure as Code Best Practices with Terraform',
      excerpt: 'Learn how to structure Terraform projects, manage state effectively, and implement proper CI/CD pipelines for infrastructure deployments.',
      date: '2024-01-08',
      readTime: '12 min read',
      tags: ['Terraform', 'IaC', 'Best Practices']
    },
    {
      title: 'Monitoring Microservices with Prometheus and Grafana',
      excerpt: 'Complete setup guide for monitoring distributed systems using Prometheus for metrics collection and Grafana for visualization.',
      date: '2024-01-01',
      readTime: '10 min read',
      tags: ['Monitoring', 'Prometheus', 'Grafana', 'Microservices']
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge about DevOps, Cloud, and Infrastructure automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title}
              className="card-hover bg-card border border-border rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 bg-accent rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center gap-2 text-devops-400 hover:text-devops-300 transition-colors duration-200 font-medium">
                Read More
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border border-border hover:bg-accent text-foreground rounded-lg font-medium transition-all duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
