import React, { useState } from 'react';
import { skills } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'tools', label: 'Tools & Workflows' },
    { key: 'softSkills', label: 'Soft Skills' }
  ];

  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section className="py-24 bg-slate-mid border-t border-edge relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-poppins text-white">
            My Tech Stack
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full mx-auto" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Here are the languages, frameworks, databases, and tools that I use to bring digital products to life.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              id={`skills-tab-${cat.key}`}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 border ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-violet-accent to-cyan-accent text-white border-transparent'
                  : 'bg-void text-slate-400 border-edge hover:text-white hover:border-slate-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {skills[activeCategory].map((skill, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-void border border-edge flex flex-col justify-between hover:border-violet-accent/40 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-white font-poppins">{skill.name}</span>
                    <span className="text-xs font-semibold text-cyan-accent">{skill.level}</span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-slate-mid rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: skill.level }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
