'use client';

import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Dynamically import 3D components to avoid SSR issues
const AnimatedBackground = dynamic(() => import('../components/AnimatedBackground'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
