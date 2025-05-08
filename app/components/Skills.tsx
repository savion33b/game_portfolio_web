'use client'

import { FaUnity, FaCode, FaGamepad, FaServer, FaDatabase, FaRobot, FaBitcoin } from 'react-icons/fa'
import { SiGodotengine, SiBlender, SiUnrealengine } from 'react-icons/si'
import { IconType } from 'react-icons'
import MotionWrapper from './MotionWrapper'

interface SkillItem {
  name: string
  icon: IconType
  highlight?: boolean
}

interface SkillGroup {
  category: string
  items: SkillItem[]
}

const skills: SkillGroup[] = [
  {
    category: "Game Engines",
    items: [
      { name: "Unity", icon: FaUnity },
      { name: "Unreal Engine", icon: SiUnrealengine },
      { name: "Godot", icon: SiGodotengine }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "C#", icon: FaCode },
      { name: "C++", icon: FaCode },
      { name: "GDScript", icon: FaCode }
    ]
  },
  {
    category: "3D/2D Tools",
    items: [
      { name: "Blender", icon: SiBlender },
      { name: "Game Design", icon: FaGamepad },
      { name: "Asset Creation", icon: FaGamepad }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Networking", icon: FaServer },
      { name: "Database", icon: FaDatabase },
      { name: "API Integration", icon: FaServer }
    ]
  },
  {
    category: "Emerging Tech",
    items: [
      { name: "Generative AI", icon: FaRobot, highlight: true },
      { name: "NFT/Blockchain", icon: FaBitcoin, highlight: true },
      { name: "Smart Contracts", icon: FaCode, highlight: true }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-indigo-950 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title animate-pulse-slow">Skills & Expertise</h2>
          <p className="section-subtitle animate-fade-up">Technologies and tools I work with</p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.slice(0, 4).map((skillGroup, index) => (
            <MotionWrapper
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text animate-slide-in">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <MotionWrapper
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="skill-icon">
                      <skill.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-200" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-200 mt-2">
                      {skill.name}
                    </span>
                  </MotionWrapper>
                ))}
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Emerging Tech Section - Centered */}
        <div className="mt-8 flex justify-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 w-full max-w-2xl"
          >
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-x animate-slide-in">
              {skills[4].category}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills[4].items.map((skill, skillIndex) => (
                <MotionWrapper
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="skill-icon bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-200" />
                  </div>
                  <span className="text-sm font-medium text-purple-300 group-hover:text-pink-300 transition-colors duration-200 mt-2">
                    {skill.name}
                  </span>
                </MotionWrapper>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
} 