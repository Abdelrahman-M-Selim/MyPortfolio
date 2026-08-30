import { motion } from 'framer-motion';
import { experience, education } from '../data/content';

const TimelineItem = ({ 
  item, 
  index 
}: { 
  item: { title?: string, degree?: string, date: string, description?: string, institute?: string, location?: string }, 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-5 gap-8">
        {/* Timeline Dot (Mobile only) */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: index * 0.1 + 0.3 }}
          className="md:hidden absolute left-0 top-2 w-2 h-2 rounded-full bg-white" 
        />
        
        {/* Date / Location */}
        <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
          <div className="text-white/40 text-sm font-mono tracking-wider">{item.date}</div>
          {item.location && <div className="text-white/30 text-xs mt-1">{item.location}</div>}
        </div>
        
        {/* Divider (Desktop only) */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: index * 0.1 + 0.3 }}
            className="w-2 h-2 rounded-full bg-white mb-4 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 + 0.4 }}
            className="w-px h-full bg-white/10 origin-top" 
          />
        </div>

        {/* Content */}
        <div className="md:col-span-3 pb-16">
          <h3 className="text-xl font-medium text-white mb-2">{item.title || item.degree}</h3>
          {(item.institute) && <h4 className="text-white/60 mb-4">{item.institute}</h4>}
          {item.description && (
            <p className="text-white/50 leading-relaxed font-light">{item.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Experience
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left" 
          />
        </motion.div>

        <div className="space-y-4 mb-24">
          {experience.map((exp, idx) => (
            <TimelineItem key={`exp-${idx}`} item={exp} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Education
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left" 
          />
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, idx) => (
            <TimelineItem key={`edu-${idx}`} item={edu} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
