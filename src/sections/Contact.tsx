import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            Get in <span className="text-white/30">Touch</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-px w-full bg-white/10 origin-left hidden md:block" 
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <form action="https://formspree.io/f/movpgdwv" method="POST" className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your message..." 
                  rows={5}
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              hidden: {}
            }}
            className="flex flex-col justify-center space-y-8"
          >
            {personalInfo.socials.map((social) => (
              <motion.a 
                key={social.name}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }
                }}
                href={social.url}
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <social.icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">{social.name}</div>
                  <div className="text-lg font-medium">{social.display}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
