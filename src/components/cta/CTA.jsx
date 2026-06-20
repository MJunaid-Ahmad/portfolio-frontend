import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-slate-mid border-t border-edge relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] rounded-full bg-glow-cyan pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-void border border-edge overflow-hidden p-8 sm:p-12 text-center space-y-6 shadow-2xl"
        >
          {/* Card Border glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-accent to-cyan-accent" />

          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white leading-tight">
            Let's Collaborate on Your Next Big Idea!
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            I am currently open to internship opportunities, full-time positions, and challenging web projects. Let's build something exceptional together!
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/contact"
              id="cta-contact-btn"
              className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-medium shadow-lg hover:shadow-cyan-accent/20 hover:scale-105 transition-all duration-200"
            >
              <span>Get In Touch</span>
              <Send className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              id="cta-projects-btn"
              className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-slate-mid border border-edge text-slate-300 font-medium hover:text-white hover:border-slate-300 hover:scale-105 transition-all duration-200"
            >
              <span>See My Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
