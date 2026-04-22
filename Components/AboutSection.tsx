import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Server, Smartphone, MonitorSmartphone } from 'lucide-react';

const features = [
  { icon: <MonitorSmartphone className="w-6 h-6 text-primary" />, title: 'Frontend', desc: 'React, Next.js, Tailwind' },
  { icon: <Server className="w-6 h-6 text-accent" />, title: 'Backend', desc: 'Node.js, Express, MongoDB' },
  { icon: <Code2 className="w-6 h-6 text-green-400" />, title: 'Clean Code', desc: 'TypeScript, Clean Architecture' },
  { icon: <Smartphone className="w-6 h-6 text-orange-400" />, title: 'Responsive', desc: 'Mobile-first design approach' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[400px] aspect-square mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl rotate-6 opacity-50 blur-xl animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl -rotate-3" />
              <div className="absolute inset-1 bg-background rounded-[22px] overflow-hidden">
                {/* Note: In a real app we would use next/image with proper config */}
                <img 
                  src="/assets/images/jinshi.jpg" 
                  alt="Jinshid - Full Stack Developer" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Passionate Developer Creating Awesome Digital Experiences
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              I am a Full Stack Developer with a strong foundation in modern web technologies. Over the past 2 years, I've dedicated myself to crafting robust, scalable, and visually stunning applications.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              My approach combines technical proficiency with a keen eye for design, ensuring that every project not only functions flawlessly but also provides an intuitive and engaging user experience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-background border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/60">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
