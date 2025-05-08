'use client'

import { FaGamepad, FaCode, FaEnvelope, FaDownload } from 'react-icons/fa'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import MotionWrapper from './components/MotionWrapper'
import Particles from './components/Particles'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Particles />
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold gradient-text">Christopher Cruz</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="nav-link flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaDownload className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title animate-float">
              Christopher Cruz
            </h1>
            <p className="section-subtitle">
              Game Developer & Creative Coder
            </p>
            <div className="relative mt-6 mb-8">
              <motion.p 
                className="text-2xl text-white font-medium italic px-8 py-4 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur-sm"></span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text font-bold">
                    "Game-making is my dream — I live it every day"
                  </span>
                </span>
              </motion.p>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="btn-primary flex items-center"
              >
                <FaGamepad className="mr-2" />
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center"
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </a>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Other Sections */}
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

