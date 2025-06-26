"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FullscreenHeroProps {
  videoSrc?: string
}

export default function FullscreenHero({ videoSrc }: FullscreenHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/construction-machinery.mp4"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-70" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          autoPlay
        />

        {/* Fallback image while video loads */}
        {!isLoaded && (
          <Image
            src="/images/construction-site.jpeg"
            alt="Sitio de construcción"
            fill
            className="object-cover opacity-70"
            priority
          />
        )}

        {/* Overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950"></div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center text-center max-w-full"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[250px] h-[250px] rounded-full overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-red-500/30 mb-12 flex items-center justify-center shadow-lg shadow-red-500/10"
          >
            <div className="relative w-[230px] h-[230px] rounded-full overflow-hidden">
              <Image
                src="/images/new-logo.png"
                alt="Retiros y Suministros de San Luis"
                fill
                className="object-cover scale-[1.2]"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            Retiros y Suministros
            <span className="block text-red-500 mt-2">De San Luis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl font-light"
          >
            Demoliciones, renta de maquinaria y suministro de materiales con precisión y eficiencia.
          </motion.p>

          {/* Action buttons removed */}
        </motion.div>
      </div>

      {/* Video controls removed */}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
        onClick={scrollToNextSection}
      >
        <Button variant="ghost" size="icon" className="rounded-full bg-transparent hover:bg-zinc-800/30">
          <ChevronDown className="h-10 w-10 text-zinc-400" />
        </Button>
      </motion.div>
    </section>
  )
}
