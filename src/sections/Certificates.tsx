import { motion } from 'framer-motion';
import { certificates } from '../data/content';

export const Certificates = () => {
  return (
    <section id="certificates" className="relative py-24 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Licenses & <span className="text-white/30">Certifications</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left" 
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">{cert.title}</h3>
                <p className="text-white/50 text-sm">{cert.issuer}</p>
              </div>
              
              <a 
                href={cert.image} 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${cert.title} certificate`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
