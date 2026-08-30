import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';

const Background3D = lazy(() => import('./canvas/Background3D').then(module => ({ default: module.Background3D })));
const About = lazy(() => import('./sections/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./sections/Skills').then(module => ({ default: module.Skills })));
const Experience = lazy(() => import('./sections/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./sections/Projects').then(module => ({ default: module.Projects })));
const Certificates = lazy(() => import('./sections/Certificates').then(module => ({ default: module.Certificates })));
const Contact = lazy(() => import('./sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <div className="relative bg-black text-white selection:bg-white selection:text-black">
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Suspense fallback={<div className="min-h-[50svh]" />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </Suspense>
      </main>

      <footer className="relative z-10 py-8 text-center text-white/40 text-sm bg-black border-t border-white/10">
        <p>© {new Date().getFullYear()} Abdelrahman Selim.</p>
      </footer>
    </div>
  );
}

export default App;
