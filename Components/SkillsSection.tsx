import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS / DaisyUI", level: 90 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Svelte / React Native", level: 75 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express.js", level: 90 },
      { name: "MongoDB / Mongoose", level: 85 },
      { name: "MySql / Prisma ORM", level: 80 },
      { name: "Socket.io / WebRTC", level: 85 },
      { name: "Microservices / JWT", level: 80 },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker / Kubernetes", level: 70 },
      { name: "AWS (S3 / EC2)", level: 75 },
      { name: "GIT / GitHub Actions", level: 85 },
      { name: "Postman / Figma", level: 90 },
      { name: "Trello / Beekeeper", level: 80 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.2 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
              
              <h3 className="text-2xl font-semibold mb-8 text-white">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-primary text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (skillIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
