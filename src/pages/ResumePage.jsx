import React from 'react';
import { education, experiences, languages, skills } from '../data/portfolioData';
import { GraduationCap, Briefcase, Download, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumePage = () => {
  return (
    <div className="py-16 min-h-screen bg-void relative">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-glow-violet pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-glow-cyan pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold font-poppins text-white tracking-tight">
            My Resume
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full mx-auto" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A detailed view of my educational achievements, professional work history, skills, and language competencies.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <a
            href="/Muhammad_Junaid_Resume.pdf"
            download="Muhammad_Junaid_Resume.pdf"
            id="resume-download-btn"
            className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-medium shadow-lg hover:shadow-cyan-accent/20 hover:scale-105 transition-all duration-200"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume PDF</span>
          </a>
        </div>

        {/* Experience & Education Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          {/* Work Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 border-b border-edge pb-4">
              <Briefcase className="h-6 w-6 text-cyan-accent" />
              <h2 className="text-2xl font-bold font-poppins text-white">Experience</h2>
            </div>

            <div className="space-y-8 pl-4 border-l border-edge">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative space-y-2"
                >
                  <div className="absolute -left-[21px] top-1.5 h-3.5 w-3.5 rounded-full bg-cyan-accent border-4 border-void" />
                  <span className="text-xs text-slate-500 font-semibold">{exp.duration}</span>
                  <h3 className="text-lg font-bold font-poppins text-white">{exp.role}</h3>
                  <p className="text-sm text-cyan-accent font-medium">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 border-b border-edge pb-4">
              <GraduationCap className="h-6 w-6 text-violet-accent" />
              <h2 className="text-2xl font-bold font-poppins text-white">Education</h2>
            </div>

            <div className="space-y-8 pl-4 border-l border-edge">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative space-y-2"
                >
                  <div className="absolute -left-[21px] top-1.5 h-3.5 w-3.5 rounded-full bg-violet-accent border-4 border-void" />
                  <span className="text-xs text-slate-500 font-semibold">{edu.duration}</span>
                  <h3 className="text-lg font-bold font-poppins text-white">{edu.degree}</h3>
                  <p className="text-sm text-violet-accent font-medium">{edu.institution}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary Grid */}
        <div className="border-t border-edge pt-16">
          <div className="flex items-center space-x-3 border-b border-edge pb-4 mb-8">
            <Award className="h-6 w-6 text-cyan-accent" />
            <h2 className="text-2xl font-bold font-poppins text-white">Skills Matrix</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(skills).map((key) => (
              <div key={key} className="p-6 rounded-xl bg-slate-mid border border-edge space-y-4">
                <h3 className="text-lg font-bold font-poppins text-white capitalize border-b border-edge/60 pb-2">
                  {key === 'softSkills' ? 'Soft Skills' : key}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[key].map((sk, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-void border border-edge text-slate-300"
                    >
                      {sk.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Grid */}
        <div className="border-t border-edge pt-16">
          <div className="flex items-center space-x-3 border-b border-edge pb-4 mb-8">
            <Globe className="h-6 w-6 text-violet-accent" />
            <h2 className="text-2xl font-bold font-poppins text-white">Languages</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-mid border border-edge text-center space-y-2 hover:border-cyan-accent/40 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold font-poppins text-white">{lang.name}</h3>
                <p className="text-xs text-slate-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
