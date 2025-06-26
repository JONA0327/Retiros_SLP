"use client"

import { useRef, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { Building, Users, Award, Clock } from "lucide-react"

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Define stats with useMemo to prevent recreation on every render
  const stats = useMemo(
    () => [
      {
        value: 150,
        label: "Proyectos Completados",
        icon: <Building className="h-10 w-10 text-red-500" />,
      },
      {
        value: 50,
        label: "Clientes Satisfechos",
        icon: <Users className="h-10 w-10 text-red-500" />,
      },
      {
        value: 10,
        label: "Años de Experiencia",
        icon: <Clock className="h-10 w-10 text-red-500" />,
      },
      {
        value: 15,
        label: "Reconocimientos",
        icon: <Award className="h-10 w-10 text-red-500" />,
      },
    ],
    [],
  )

  return (
    <section ref={ref} className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-zinc-900/40 backdrop-blur-sm rounded-3xl"
            >
              <div className="mb-6 bg-red-500/20 p-4 rounded-full">{stat.icon}</div>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {stat.value}+
              </motion.span>
              <span className="text-zinc-400 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
