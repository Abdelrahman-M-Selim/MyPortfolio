import { motion } from 'framer-motion';
import { skillsCategories } from '../data/content';

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Tech <span className="text-white/30">Stack</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left" 
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2, staggerChildren: 0.1 } },
                hidden: { opacity: 0, y: 30 }
              }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", color: "#fff" }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.05] text-white/70 border border-white/5 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
