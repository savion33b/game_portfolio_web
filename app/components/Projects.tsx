'use client'

import { FaGithub, FaHeart, FaRegHeart } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import MotionWrapper from './MotionWrapper'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    title: 'San Andreas Unity',
    description: 'Lead AI Developer & Gameplay Programmer',
    image: '/placeholder-game1.jpg',
    githubUrl: 'https://github.com/savion33b/san-andreas-unity',
    presentation: 'PC, Steam (Released: January 2024)',
    impact: 'Implemented advanced NPC AI systems and optimized performance by 30%.',
    tags: ['Unity', 'C#', 'NavMesh', 'Behavior Trees', 'AI'],
    likes: 128,
    achievements: [
      'Implemented advanced NPC AI systems for realistic pedestrian and vehicle behaviors',
      'Optimized performance, achieving a 30% improvement in frame rates'
    ]
  },
  {
    title: 'Boat Attack',
    description: 'Gameplay & Physics Programmer',
    image: '/placeholder-game2.jpg',
    githubUrl: 'https://github.com/savion33b/boat-attack',
    presentation: 'Android/iOS (Released: July 2023)',
    impact: 'Developed realistic water physics and enhanced visual fidelity.',
    tags: ['Unity', 'C#', 'Shader Graph', 'URP', 'Physics'],
    likes: 95,
    achievements: [
      'Developed realistic water physics and boat dynamics, boosting user ratings by 25%',
      'Integrated shader-based graphical enhancements, improving visual fidelity significantly'
    ]
  },
  {
    title: 'Megacity Metro',
    description: 'Technical Artist & Procedural Generation Developer',
    image: '/placeholder-game3.jpg',
    githubUrl: 'https://github.com/savion33b/megacity-metro',
    presentation: 'PC, Epic Games Store (Released: December 2022)',
    impact: 'Created procedural city-generation tools and enhanced visual realism.',
    tags: ['Unity', 'C#', 'Houdini', 'Procedural Generation', 'Shaders'],
    likes: 156,
    achievements: [
      'Created procedural city-generation tools, reducing manual level design efforts by 60%',
      'Enhanced visual realism through custom shaders and lighting setups'
    ]
  },
  {
    title: 'Darkest Dungeon Unity Port',
    description: 'Porting Engineer & Optimization Specialist',
    image: '/placeholder-game4.jpg',
    githubUrl: 'https://github.com/savion33b/darkest-dungeon-unity',
    presentation: 'PC/Mac, Steam (Released: August 2022)',
    impact: 'Successfully ported and optimized the game for Unity.',
    tags: ['Unity', 'C#', 'Porting', 'Optimization', 'Asset Management'],
    likes: 87,
    achievements: [
      'Successfully ported the game to Unity, ensuring seamless gameplay experience',
      'Optimized loading times and memory usage, improving performance by 40%'
    ]
  },
  {
    title: 'Procedural Level Generator',
    description: 'Solo Developer & Publisher',
    image: '/placeholder-game5.jpg',
    githubUrl: 'https://github.com/savion33b/procedural-level-generator',
    presentation: 'Unity Asset Store (Released: April 2022)',
    impact: 'Created a highly-rated Unity asset used by 5000+ developers.',
    tags: ['Unity', 'Editor Scripting', 'C#', 'Procedural Generation'],
    likes: 112,
    achievements: [
      'Designed and published a highly-rated Unity asset used by 5000+ developers',
      'Achieved a 4.8-star rating with consistent positive feedback'
    ]
  },
  {
    title: 'RocketMan VR',
    description: 'VR Gameplay Developer & UX Designer',
    image: '/placeholder-game6.jpg',
    githubUrl: 'https://github.com/savion33b/rocketman-vr-escape-room',
    presentation: 'Oculus Quest (Released: November 2021)',
    impact: 'Developed immersive VR puzzles and enhanced user retention.',
    tags: ['Unity', 'VR', 'Oculus SDK', 'C#', 'XR Interaction'],
    likes: 98,
    achievements: [
      'Developed immersive VR puzzles and interactive mechanics',
      'Received recognition for intuitive UX design, increasing user retention by 35%'
    ]
  }
]

export default function Projects() {
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set())
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const handleLike = (projectTitle: string) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev)
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle)
      } else {
        newSet.add(projectTitle)
      }
      return newSet
    })
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-indigo-950 to-purple-950">
      <div className="container mx-auto px-4">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Selected Projects & Portfolio
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A showcase of my contributions to open-source Unity projects
          </motion.p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionWrapper
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="project-card group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredProject === project.title ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <button
                      onClick={() => handleLike(project.title)}
                      className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors"
                    >
                      <AnimatePresence mode="wait">
                        {likedProjects.has(project.title) ? (
                          <motion.div
                            key="liked"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="text-red-500"
                          >
                            <FaHeart className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="unliked"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <FaRegHeart className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.h3 
                      className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                  </div>
                  <p className="text-lg text-gray-300 mb-4 font-medium group-hover:text-gray-200 transition-colors">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span 
                        key={tag} 
                        className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full backdrop-blur-sm hover:bg-gray-700/50 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <motion.div 
                      className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/40 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <p className="text-sm text-gray-300 mb-2">
                        <span className="font-semibold text-white">Platform:</span> {project.presentation}
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold text-white">Impact:</span> {project.impact}
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/40 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <p className="text-sm font-semibold text-white mb-2">Key Achievements:</p>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, index) => (
                          <motion.li 
                            key={index} 
                            className="text-sm text-gray-300 flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <FaHeart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-400">
                          {project.likes + (likedProjects.has(project.title) ? 1 : 0)} likes
                        </span>
                      </div>
                      <motion.button
                        onClick={() => handleLike(project.title)}
                        className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {likedProjects.has(project.title) ? 'Liked' : 'Like'}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
} 