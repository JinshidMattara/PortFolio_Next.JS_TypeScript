import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Heatz E-Commerce",
    description: "A scalable, full-featured e-commerce platform catering to users in India and Dubai, featuring localized features and international payment support.",
    image: "/assets/images/heatz.png",
    tags: ["Next.js", "React", "Node.js", "PayPal"],
    github: "https://github.com/JinshidMattara",
    live: "https://heatz.in/en"
  },
  {
    title: "Nareez Jewelry",
    description: "An elegant e-commerce experience for a luxury jewelry brand, featuring high-resolution product showcases and secure checkout.",
    image: "/assets/images/nareez.png",
    tags: ["Luxury E-Commerce", "Next.js", "React", "Branding"],
    github: "https://github.com/JinshidMattara",
    live: "https://nareezjewelry.com/en"
  },
  {
    title: "The Nyork",
    description: "A trendy, urban e-commerce platform featuring high-quality fashion and lifestyle products with a clean, modern aesthetic.",
    image: "/assets/images/nyork.png",
    tags: ["E-Commerce", "DigitalOcean", "React", "Node.js"],
    github: "https://github.com/JinshidMattara",
    live: "https://nyork-gr3tm.ondigitalocean.app/en"
  },
  {
    title: "Komy Safety",
    description: "A fast-loading, SEO-optimized product inquiry platform for Saudi Arabia, showcasing industrial safety equipment with a seamless lead generation flow.",
    image: "/assets/images/komy.png",
    tags: ["Next.js", "Inquiry System", "SEO", "Lead Gen"],
    github: "https://github.com/JinshidMattara",
    live: "https://www.komysafety.com/en"
  },
  {
    title: "Eduzone Online Class",
    description: "A collaborative virtual learning application supporting video communication and real-time chat for seamless student-teacher interaction.",
    image: "/assets/images/eduzone.png",
    tags: ["React", "WebRTC", "Socket.io", "Tailwind"],
    github: "https://github.com/JinshidMattara",
    live: "#"
  },
  {
    title: "CineView Movie App",
    description: "A user-friendly movie application enabling users to browse, search, and manage a wide collection of movies with Redux state management.",
    image: "/assets/images/movieapp.png",
    tags: ["React", "Redux Toolkit", "Public API", "Tailwind"],
    github: "https://github.com/JinshidMattara",
    live: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.live} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
