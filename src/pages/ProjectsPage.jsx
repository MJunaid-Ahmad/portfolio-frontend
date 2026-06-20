import React from 'react';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink, ArrowUpRight, FolderCode } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="py-16 min-h-screen bg-void relative">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-glow-cyan pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] rounded-full bg-glow-violet pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold font-poppins text-white tracking-tight">
            My Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full mx-auto" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A selection of my recent works, showcasing frontend design and full-stack implementation details.
          </p>
        </div>

        {/* Projects Alternating Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Representation Layer */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-2xl blur opacity-30 group-hover:opacity-55 transition duration-500"></div>
                  <div className="relative rounded-2xl bg-[#0d1117] border border-edge p-8 min-h-[300px] flex flex-col justify-between overflow-hidden shadow-2xl">
                    <div className="flex justify-between items-start">
                      <FolderCode className="h-12 w-12 text-cyan-accent" />
                      <span className="text-slate-500 font-mono text-xs">Project #0{index + 1}</span>
                    </div>

                    <div className="space-y-4 my-8">
                      <h3 className="text-2xl font-bold font-poppins text-white">{project.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech badging */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-void border border-edge text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Details / Feature List */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h4 className="text-lg font-bold font-poppins text-white tracking-wide uppercase">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-sm leading-relaxed">
                        <span className="h-1.5 w-1.5 bg-cyan-accent rounded-full mt-2 mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-github-${index}`}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-mid border border-edge text-slate-300 font-medium text-sm hover:text-white hover:border-slate-400 hover:scale-105 transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code Repository</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-live-${index}`}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-medium text-sm shadow-md hover:shadow-cyan-accent/20 hover:scale-105 transition-all duration-200"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-2xl bg-slate-mid border border-edge p-8 text-center space-y-4"
        >
          <div className="inline-flex p-3 rounded-full bg-void border border-edge text-violet-accent">
            <FolderCode className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold font-poppins text-white">More Projects in Progress</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            I am constantly working on new web engineering ideas. Follow my GitHub profile to stay updated on my latest source repositories.
          </p>
          <div className="pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              id="project-github-follow"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-void border border-edge text-slate-300 font-medium text-sm hover:text-white hover:border-violet-accent transition-colors duration-250"
            >
              <Github className="h-4 w-4" />
              <span>Follow on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
