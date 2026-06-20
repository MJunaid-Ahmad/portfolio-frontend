import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalDetails } from '../data/portfolioData';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../utils/emailConfig';

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    setStatus('loading');

    // Setup template parameters matching EmailJS requirements
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_name: personalDetails.name
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('error');
          setErrorMessage('Failed to send message. Please check your EmailJS configurations.');
        }
      );
  };

  return (
    <div className="py-16 min-h-screen bg-void relative">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] rounded-full bg-glow-cyan pointer-events-none opacity-40" />
      <div className="absolute bottom-1/3 left-1/4 w-[35rem] h-[35rem] rounded-full bg-glow-violet pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold font-poppins text-white tracking-tight">
            Contact Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-accent to-cyan-accent rounded-full mx-auto" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Have a project in mind, an internship opportunity, or want to say hello? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-2xl font-bold font-poppins text-white mb-2">Get in Touch</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              You can contact me via the form or reach out through my personal social networks and email listed below.
            </p>

            {/* Email Card */}
            <a
              href={`mailto:${personalDetails.email}`}
              id="contact-email-link"
              className="flex items-center space-x-4 p-5 rounded-xl bg-slate-mid border border-edge hover:border-cyan-accent/40 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="p-3.5 rounded-lg bg-void text-cyan-accent">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Email Me</span>
                <span className="text-sm font-semibold text-slate-200">{personalDetails.email}</span>
              </div>
            </a>

            {/* Location Card */}
            <a
              href="https://maps.app.goo.gl/s9kA7jRL7GP5NCRKA"
              rel="noopener noreferrer"
              target="_blank"
              id="contact-location-card"
              className="flex items-center space-x-4 p-5 rounded-xl bg-slate-mid border border-edge"
            >
              <div className="p-3.5 rounded-lg bg-void text-violet-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Location</span>
                <span className="text-sm font-semibold text-slate-200">{personalDetails.location}</span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="https://wa.me/923456294228"
              rel="noopener noreferrer"
              target="_blank"
              id="contact-phone-link"
              className="flex items-center space-x-4 p-5 rounded-xl bg-slate-mid border border-edge hover:border-cyan-accent/40 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="p-3.5 rounded-lg bg-void text-cyan-accent">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Call Me</span>
                <span className="text-sm font-semibold text-slate-200">{personalDetails.phone}</span>
              </div>
            </a>

            {/* Social Connect Card */}
            <div className="p-6 rounded-xl bg-slate-mid border border-edge space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Social Accounts</h3>
              <div className="flex space-x-4">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-link"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-lg bg-void border border-edge text-slate-400 hover:text-cyan-accent hover:border-cyan-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-lg bg-void border border-edge text-slate-400 hover:text-cyan-accent hover:border-cyan-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-2xl bg-slate-mid border border-edge shadow-2xl space-y-6"
          >
            <h2 className="text-2xl font-bold font-poppins text-white">Send a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} id="contact-form" className="space-y-6">
              {/* Status Banner */}
              {status === 'success' && (
                <div className="flex items-center space-x-3 bg-green-950/50 border border-green-500/30 text-green-300 p-4 rounded-xl text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center space-x-3 bg-red-950/50 border border-red-500/30 text-red-300 p-4 rounded-xl text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-void border border-edge rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-accent/80 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-void border border-edge rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-accent/80 transition-colors"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-void border border-edge rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-accent/80 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-semibold shadow-lg hover:shadow-cyan-accent/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {status === 'loading' ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
