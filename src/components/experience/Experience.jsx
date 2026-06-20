import React from 'react';
import { experiences } from '../../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-24 bg-void border-t border-edge relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold font-poppins text-white">
            Work History
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full mx-auto" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A walkthrough of my internship experiences and roles in software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto border-l-2 border-edge pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[39px] sm:-left-[55px] top-1.5 p-2 bg-slate-mid border border-edge rounded-full text-cyan-accent group-hover:border-cyan-accent group-hover:text-violet-accent transition-colors duration-300">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-xl bg-slate-mid border border-edge group-hover:border-cyan-accent/40 hover:scale-[1.01] transition-all duration-300 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-white">{exp.role}</h3>
                    <p className="text-sm font-semibold text-cyan-accent">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-xs text-slate-400 bg-void px-3 py-1 rounded-full border border-edge self-start">
                    <Calendar className="h-3.5 w-3.5 mr-1 text-slate-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-void border border-edge text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
