"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, RotateCcw } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"
import Image from "next/image"
import ImageCarousel from "./image-carousel"

interface ServiceDetail {
  name: string
  price: string
  unit: string
}

interface ServiceInfo {
  title: string
  details?: ServiceDetail[]
  materials?: string[]
  capacities?: string[]
  note: string
}

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
  backgroundImage?: string
  backgroundImages?: string[]
  serviceInfo?: ServiceInfo
}

export default function ServiceCard({
  icon,
  title,
  description,
  index,
  backgroundImage,
  backgroundImages,
  serviceInfo,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="perspective-1000 [transform-style:preserve-3d]"
    >
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className="preserve-3d"
          >
            <Card className="h-full flex flex-col bg-zinc-800/50 backdrop-blur-sm border-zinc-700 rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all duration-500 group hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-2 relative">
              {backgroundImages && backgroundImages.length > 0 ? (
                <div className="absolute inset-0 z-0">
                  <ImageCarousel images={backgroundImages} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-zinc-900/40"></div>
                </div>
              ) : backgroundImage ? (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={backgroundImage || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-zinc-900/40"></div>
                </div>
              ) : null}
              <CardContent className="flex-grow p-8 relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                  className="mb-6 bg-red-500/20 p-4 rounded-2xl inline-block group-hover:bg-red-500/30 transition-colors duration-300 backdrop-blur-sm"
                >
                  {icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white text-shadow-sm">{title}</h3>
                <p className="text-white text-lg font-medium drop-shadow-md">{description}</p>
              </CardContent>
              <CardFooter className="p-8 pt-0 relative z-10">
                <Button
                  onClick={handleFlip}
                  className="w-full bg-zinc-700/80 hover:bg-red-500 text-white rounded-xl py-6 group-hover:bg-red-500 transition-colors duration-300 backdrop-blur-sm"
                >
                  Ver precios <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className="preserve-3d"
          >
            <Card className="h-full flex flex-col bg-zinc-800/50 backdrop-blur-sm border-zinc-700 rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all duration-500 group hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-2 relative">
              <div className="absolute inset-0 z-0 bg-zinc-900"></div>
              <CardContent className="flex-grow p-8 relative z-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-red-500 text-center">{serviceInfo?.title || title}</h3>

                <div className="bg-zinc-800/70 p-5 rounded-xl mb-6">
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-700 pb-3">
                    <div className="flex items-center">
                      {icon}
                      <h4 className="text-xl font-semibold text-white">Detalles del servicio</h4>
                    </div>
                  </div>

                  {serviceInfo?.details && (
                    <div className="space-y-4">
                      {serviceInfo.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-zinc-300 text-lg">{detail.name}:</span>
                          <span className="text-2xl font-bold text-white bg-red-500/20 px-3 py-1 rounded-lg">
                            {detail.price}
                            {detail.unit !== "día" &&
                            detail.unit !== "viaje" &&
                            detail.unit !== "semana" &&
                            detail.unit !== "mes"
                              ? `/${detail.unit}`
                              : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {serviceInfo?.materials && (
                    <div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {serviceInfo.materials.map((material, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            <span className="text-zinc-300">{material}</span>
                          </div>
                        ))}
                      </div>
                      {serviceInfo.capacities && (
                        <div className="border-t border-zinc-700 pt-4 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-300 text-lg">Capacidades:</span>
                            <div className="flex space-x-2">
                              {serviceInfo.capacities.map((capacity, idx) => (
                                <span
                                  key={idx}
                                  className="text-lg font-bold text-white bg-red-500/20 px-3 py-1 rounded-lg"
                                >
                                  {capacity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-zinc-400 text-sm">
                    {serviceInfo?.note || "Cotiza sin compromiso. Precios especiales para proyectos grandes."}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0 relative z-10">
                <Button
                  onClick={handleFlip}
                  className="w-full bg-zinc-700/80 hover:bg-red-500 text-white rounded-xl py-6 transition-colors duration-300 backdrop-blur-sm"
                >
                  Volver <RotateCcw className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
