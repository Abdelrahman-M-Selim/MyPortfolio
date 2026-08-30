import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white/80 tracking-wide"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          I'm <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10 font-light"
        >
          {personalInfo.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
        >
          <a
            href={personalInfo.resume}
            download
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 z-10"
      >
        <span className="text-xs uppercase tracking-[0.2em] mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
