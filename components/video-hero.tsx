"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from "lucide-react"
import Image from "next/image"

interface VideoHeroProps {
  videoSrc: string
}

export default function VideoHero({ videoSrc }: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      if (isPlaying) {
        video.play().catch(() => {
          setIsPlaying(false)
        })
      }
    }

    video.addEventListener("canplay", handleCanPlay)
    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [isPlaying])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play().catch(() => {
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }

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
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full">
              Cotiza tu proyecto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-zinc-700 hover:bg-zinc-800 px-8 py-6 text-lg rounded-full"
            >
              Explora servicios <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Video controls */}
          <Button
            onClick={togglePlay}
            variant="ghost"
            size="icon"
            className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm"
          >
            {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white ml-1" />}
          </Button>
        </div>
      </div>
    </section>
  )
}
