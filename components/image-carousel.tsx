"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageCarouselProps {
  images: string[]
  interval?: number
  className?: string
}

export default function ImageCarousel({ images, interval = 4000, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) return null

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src || "/placeholder.svg"} alt={`Imagen ${index + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
