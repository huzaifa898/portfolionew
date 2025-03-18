"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React, Next.js, Redux" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Integration", description: "Integration of BlockChain , API, and Database" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Database", description: "MongoDB, Mongoose" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performance", description: "Optimization, Caching" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-chakra mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8"> 
          {/* Added gap-8 here to create space between text and cards */}

          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-chakra text-gray-700 dark:text-gray-300 leading-tight mb-6 text-justify">
  As a passionate Frontend Developer, I specialize in crafting modern, high-performance web applications. With a strong foundation in React.js and Next.js, I build seamless and interactive user experiences.
</p>
<p className="text-xl font-chakra text-gray-700 dark:text-gray-300 leading-tight text-justify">
  My expertise extends to state management tools like Redux and UI frameworks like Tailwind CSS. I focus on writing clean, efficient code and staying updated with the latest trends to deliver cutting-edge solutions.
</p>

          </motion.div>

          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-chakra mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 font-chakra dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
