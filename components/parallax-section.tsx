"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

interface ParallaxSectionProps {
  imageSrc: string
}

export default function ParallaxSection({ imageSrc }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={sectionRef} className="py-32 bg-zinc-950 relative overflow-hidden">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/land-preparation.jpeg"
          alt="Maquinaria pesada en preparación de terreno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/50"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ingeniería de <span className="text-red-500">Precisión</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 font-light">
              Nuestro equipo de especialistas utiliza tecnología de vanguardia para garantizar resultados excepcionales
              en cada proyecto.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="mt-1 bg-red-500/20 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Cobertura Total</h3>
                  <p className="text-zinc-400">Servicio en todo San Luis Potosí con respuesta inmediata.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="mt-1 bg-red-500/20 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Maquinaria Avanzada</h3>
                  <p className="text-zinc-400">Flota moderna con mantenimiento preventivo y operadores certificados.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="mt-1 bg-red-500/20 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Materiales Certificados</h3>
                  <p className="text-zinc-400">
                    Todos nuestros materiales cumplen con los más altos estándares de calidad.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Button className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105">
                Conoce más <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
