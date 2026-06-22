import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/profile.png";
import { personalDetails } from "../../data/portfolioData";

const Hero = () => {
  return (
    <>
      <div className="bg-glow-violet inline-flex items-center space-x-2 bg-slate-mid border border-edge rounded-full px-4 py-1.5 text-sm text-cyan-accent">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-xs font-semibold tracking-wide">
          Available for Opportunities
        </span>
      </div>

      <section className="relative min-h-[60vh] flex flex-row items-center justify-center overflow-hidden pt-3">
        {/* Background Double-Glow Blurs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-glow-violet pointer-events-none" />

        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-glow-cyan pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 items-center">
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-accent to-cyan-accent blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              {/* Circle Image Wrapper (FIXED) */}
              <div className="relative w-42 h-42 sm:w-46 sm:h-46 rounded-full overflow-hidden border-4 border-edge shadow-2xl">
                <img
                  src={profileImg}
                  alt={personalDetails.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 text-center lg:text-center space-y-3 pt-1"
          >
            {/* Status Badge */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-accent to-cyan-accent">
                {personalDetails.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
              {personalDetails.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto  leading-relaxed text-center">
              {personalDetails.tagline}
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-center pt-2">
              {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-void border border-edge text-slate-400"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-center pt-4 pb-8">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
