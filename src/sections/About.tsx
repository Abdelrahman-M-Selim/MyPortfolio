import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export const About = () => {
  return (
    <section id="about" className="relative min-h-[80svh] flex items-center py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            About <span className="text-white/30">Me</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left" 
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-2xl md:text-3xl leading-snug font-light text-white/90"
          >
            I engineer <span className="text-white font-medium text-gradient">digital experiences</span> that bridge the gap between scalable backends and engaging user interfaces.
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
              hidden: {}
            }}
            className="space-y-6 text-white/60 text-lg leading-relaxed font-light"
          >
            {personalInfo.bio.map((paragraph, index) => (
              <motion.p 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
