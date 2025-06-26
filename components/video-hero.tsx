"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface VideoHeroProps {
  videoSrc: string
}

export default function VideoHero({ videoSrc }: VideoHeroProps) {
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

  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0 bg-zinc-950">
        {/* Video background */}
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-60" : "opacity-0"
          }`}
          muted
          loop
          playsInline
        />

        {/* Fallback image while video loads */}
        {!isLoaded && (
          <Image
            src="/images/construction-site.jpeg"
            alt="Sitio de construcción"
            fill
            className="object-cover opacity-60"
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/50 to-zinc-950"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt="Retiros y Suministros de San Luis"
            width={200}
            height={100}
            className="mb-12"
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Soluciones Industriales
            <span className="block text-red-500">De Alto Rendimiento</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl font-light">
            Demoliciones, renta de maquinaria y suministro de materiales con precisión y eficiencia.
          </p>
          {/* Action buttons removed */}
        </div>
      </div>
    </section>
  )
}
