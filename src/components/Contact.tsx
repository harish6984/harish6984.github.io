
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'harish@example.com',
      href: 'mailto:harish@example.com'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/harish',
      href: 'https://github.com/harish'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/harish',
      href: 'https://linkedin.com/in/harish'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'United States',
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together to build amazing infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-devops-500/20 flex items-center justify-center text-devops-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-devops-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-semibold mb-4">Let's Connect!</h4>
              <p className="text-muted-foreground mb-4">
                I'm always interested in discussing new opportunities, 
                collaborating on interesting projects, or just chatting about DevOps and cloud technologies.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/harish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-accent hover:bg-muted transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/harish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-accent hover:bg-muted transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:harish@example.com"
                  className="p-3 rounded-lg bg-accent hover:bg-muted transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-devops-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-devops-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-devops-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-devops-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-devops-600 hover:bg-devops-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
