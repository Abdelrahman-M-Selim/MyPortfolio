import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/content';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-32 last:mb-0`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex gap-4">
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              GitHub <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Featured <span className="text-white/30">Projects</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left" 
          />
        </motion.div>

        <div>
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
