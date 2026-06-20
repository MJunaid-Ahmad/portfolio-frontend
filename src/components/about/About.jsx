import React from 'react';
import { personalDetails } from '../../data/portfolioData';
import { motion } from 'framer-motion';

const About = () => {
  const codeWatermark = `const developer = {
  name: "${personalDetails.name}",
  role: "${personalDetails.title}",
  skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
  location: "${personalDetails.location}",
  hardWorker: true,
  problemSolver: true,
  hireable: () => {
    return developer.hardWorker && developer.problemSolver;
  }
};`;

  return (
    <section className="py-24 bg-void border-t border-edge relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Watermark Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-lg bg-[#0d1117] border border-edge overflow-hidden shadow-2xl font-mono text-sm">
              {/* Terminal Window Header */}
              <div className="flex items-center space-x-2 bg-slate-mid px-4 py-3 border-b border-edge">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-xs text-slate-400 font-medium">developer.js</span>
              </div>
              {/* Code Panel */}
              <div className="p-5 overflow-x-auto text-slate-300 whitespace-pre leading-relaxed">
                <span className="text-violet-accent">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-cyan-accent">"{personalDetails.name}"</span>,<br />
                &nbsp;&nbsp;role: <span className="text-cyan-accent">"{personalDetails.title}"</span>,<br />
                &nbsp;&nbsp;skills: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"MongoDB"</span>, <span className="text-green-400">"Express.js"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Node.js"</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;location: <span className="text-cyan-accent">"{personalDetails.location}"</span>,<br />
                &nbsp;&nbsp;hardWorker: <span className="text-yellow-400">true</span>,<br />
                &nbsp;&nbsp;problemSolver: <span className="text-yellow-400">true</span>,<br />
                &nbsp;&nbsp;hireable: () =&gt; &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-accent">return</span> developer.hardWorker && developer.problemSolver;<br />
                &nbsp;&nbsp;&#125;<br />
                &#125;;
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Bio & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-poppins text-white">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full" />
            </div>

            <p className="text-slate-400 leading-relaxed text-lg">
              {personalDetails.bio}
            </p>

            {/* Stat Blocks */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {personalDetails.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-mid border border-edge hover:border-cyan-accent/50 hover:scale-[1.02] transition-all duration-300 shadow-md group"
                >
                  <span className="block text-3xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-violet-accent to-cyan-accent group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </span>
                  <span className="block text-sm text-slate-400 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
