import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-mid border-t border-edge py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <span className="text-xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-violet-accent to-cyan-accent">
              M. JUNAID
            </span>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              MERN Stack Developer specializing in crafting elegant, user-centric, and high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-poppins">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/"
                  id="footer-home"
                  className="text-sm text-slate-400 hover:text-cyan-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  id="footer-projects"
                  className="text-sm text-slate-400 hover:text-cyan-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  id="footer-resume"
                  className="text-sm text-slate-400 hover:text-cyan-accent transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  id="footer-contact"
                  className="text-sm text-slate-400 hover:text-cyan-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-poppins">
              Connect
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-github"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-void border border-edge text-slate-400 hover:text-cyan-accent hover:border-cyan-accent hover:scale-110 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-linkedin"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-void border border-edge text-slate-400 hover:text-cyan-accent hover:border-cyan-accent hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:junaid@example.com"
                id="footer-email"
                aria-label="Send Email"
                className="p-2.5 rounded-full bg-void border border-edge text-slate-400 hover:text-cyan-accent hover:border-cyan-accent hover:scale-110 transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Available for full-time roles and freelance projects.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-edge/60 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Muhammad Junaid. All rights reserved.</p>
          <p className="flex items-center mt-2 sm:mt-0">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
