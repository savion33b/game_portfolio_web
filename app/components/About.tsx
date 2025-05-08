'use client'

import Image from 'next/image'
import MotionWrapper from './MotionWrapper'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-950 via-indigo-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title animate-pulse-slow">About Me</h2>
          <p className="section-subtitle animate-fade-up">Get to know more about my journey in game development</p>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden card-hover group"
          >
            <Image
              src="/placeholder-profile.png"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MotionWrapper>

          <MotionWrapper
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text animate-slide-in">Education & Passion</h3>
              <p className="text-gray-300 animate-fade-up">
                I am a passionate, slightly obsessed, and professionally skilled game developer with a Master's in Computer Science from Michigan State University. My love for game-making started young and now it's my job and it's the dream that keeps me up at night (but in a good way).
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text animate-slide-in">Innovation & Technology</h3>
              <p className="text-gray-300 animate-fade-up">
                I thrive on combining AI, blockchain, and game mechanics to build not just games, but living worlds that grow and evolve based on player behavior. Whether it's creating NFT economies or designing VR environments, I'm all in.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text animate-slide-in">Let's Build Together</h3>
              <p className="text-gray-300 animate-fade-up">
                If you're looking for someone who's tech-savvy, always learning, and has a passion for developing the next big thing in the gaming industry, you've found your match. Let's build something epic!
              </p>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
} 