import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: 'transparent' } },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: 'repulse' },
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                },
              },
              particles: {
                color: { value: '#06b6d4' }, // Cyan
                links: { color: '#06b6d4', distance: 150, enable: true, opacity: 0.2, width: 1 },
                move: { enable: true, random: false, speed: 1, straight: false },
                number: { density: { enable: true, width: 800 }, value: 80 },
                opacity: { value: 0.5 },
                shape: { type: 'circle' },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-primary">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Hi, I'm <span className="text-primary text-glow">Jinshid</span>
            <br />
            <span className="text-3xl md:text-5xl text-white/80 mt-2 block h-[60px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Mern Stack Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl"
          >
            With 2 years of experience building modern, scalable web applications.
            I specialize in React, Next.js, TypeScript, and Node.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-background bg-primary hover:bg-primary/90 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/resume.pdf" target="_blank" className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white glass hover:bg-white/10 rounded-full transition-all duration-300">
              Download CV
              <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
};

export default HeroSection;
