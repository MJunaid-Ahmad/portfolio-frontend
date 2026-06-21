import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails } from '../../data/portfolioData';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Double-Glow Blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-glow-violet pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-glow-cyan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-mid border border-edge rounded-full px-4 py-1.5 text-sm text-cyan-accent">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-accent to-cyan-accent">
              {personalDetails.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
            {personalDetails.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personalDetails.tagline}
          </p>

          {/* Quick Tech Badges */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-md bg-void border border-edge text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <Link
              to="/projects"
              id="hero-view-projects"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-medium shadow-lg hover:shadow-cyan-accent/20 hover:scale-105 transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resume"
              id="hero-view-resume"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-mid border border-edge text-slate-300 font-medium hover:text-white hover:border-slate-300 hover:scale-105 transition-all duration-200"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Image Card */}
         <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Ambient Shadow/Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

            {/* Profile Image Wrap */}
            <div className="relative bg-slate-mid border border-edge rounded-2xl p-3 max-w-[320px] sm:max-w-[360px] overflow-hidden">
              <img
                src={profileImg}
                alt={personalDetails.name}
                className="rounded-xl w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* <div className="mt-4 text-center">
                <h3 className="font-semibold text-white font-poppins">{personalDetails.name}</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">Based in {personalDetails.location}</p>
              </div> */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
