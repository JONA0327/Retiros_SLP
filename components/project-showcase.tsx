"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProjectShowcaseProps {
  videoSrc: string
  imageSrc: string
}

export default function ProjectShowcase({ videoSrc, imageSrc }: ProjectShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Nuestros <span className="text-red-500">Proyectos</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
            Conoce algunos de nuestros trabajos más recientes y el impacto que generamos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Hero section con el video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden w-full min-h-[500px]"
          >
            {/* Hero background con video */}
            <div className="absolute inset-0">
              {/* Imagen de respaldo mientras carga el video */}
              <Image
                src="/images/construction-site.jpeg"
                alt="Sitio de construcción"
                fill
                className="object-cover"
                priority
              />

              {/* Video de fondo con implementación mejorada */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-10"
                onLoadedData={(e) => {
                  // Forzar reproducción cuando los datos estén cargados
                  const video = e.currentTarget
                  video.play().catch((err) => {
                    console.error("Error al reproducir el video:", err)
                  })
                }}
              >
                {/* Múltiples formatos para mejor compatibilidad */}
                <source src="/videos/construction-machinery.mp4" type="video/mp4" />
                <source src="/videos/construction-machinery.webm" type="video/webm" />
                Tu navegador no soporta videos HTML5.
              </video>

              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/50 via-zinc-900/30 to-transparent z-20"></div>
            </div>

            {/* Contenido del hero */}
            <div className="relative z-30 h-full flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">Proyectos de Excelencia</h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 drop-shadow-md">
                Conoce nuestro trabajo destacado en construcción y demolición profesional
              </p>
            </div>
          </motion.div>

          {/* Contenido de detalles del proyecto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Construcción Residencial en San Luis</h3>
            <p className="text-zinc-400 text-lg mb-8">
              Este proyecto demuestra nuestra capacidad para entregar resultados de alta calidad en tiempo y forma.
              Utilizamos maquinaria especializada y materiales de primera calidad para garantizar la satisfacción del
              cliente.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="font-semibold mb-1">Duración</h4>
                <p className="text-zinc-400">3 semanas</p>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="font-semibold mb-1">Área</h4>
                <p className="text-zinc-400">450 m²</p>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="font-semibold mb-1">Materiales</h4>
                <p className="text-zinc-400">Premium</p>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="font-semibold mb-1">Equipo</h4>
                <p className="text-zinc-400">8 personas</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
          >
            <Image
              src="/images/demolition-site-5.jpeg"
              alt="Proyecto de demolición industrial con excavadora"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-bold text-white mb-1">Demolición Industrial</h3>
              <p className="text-zinc-300">Proyecto completado en 2 semanas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
          >
            <Image
              src="/images/construction-materials.jpeg"
              alt="Materiales de construcción: grava y arena"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-bold text-white mb-1">Suministro de Materiales</h3>
              <p className="text-zinc-300">Entrega puntual y de calidad</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
          >
            <Image
              src="/images/land-clearing-3.jpeg"
              alt="Limpieza de terreno"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-bold text-white mb-1">Limpieza de Terreno</h3>
              <p className="text-zinc-300">Preparación para nueva construcción</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
