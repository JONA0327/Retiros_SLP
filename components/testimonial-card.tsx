"use client"

import { useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion, useInView } from "framer-motion"

interface TestimonialCardProps {
  name: string
  company: string
  testimonial: string
  rating: number
  index: number
}

export default function TestimonialCard({ name, company, testimonial, rating, index }: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <Card className="h-full flex flex-col bg-zinc-900 border-zinc-800 rounded-3xl overflow-hidden p-2 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500 hover:-translate-y-2">
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl h-full flex flex-col p-6">
          <CardContent className="flex-grow pt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
              className="flex mb-6"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-zinc-700"}`}
                />
              ))}
            </motion.div>
            <p className="text-zinc-300 text-lg italic mb-6">"{testimonial}"</p>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-0">
            <p className="font-semibold text-white text-lg">{name}</p>
            <p className="text-zinc-500">{company}</p>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}
