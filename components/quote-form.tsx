"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ArrowRight } from "lucide-react"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    services: {
      demolition: false,
      cleaning: false,
      debris: false,
      machinery: false,
      waterTrucks: false,
      materials: false,
      construction: false,
    },
    selectedMachinery: {
      roller: false,
      miniLoader: false,
      excavator: false,
      excavatorSimple: false,
    },
    rentalPeriod: "day", // "day", "week", "month"
    squareMeters: "",
    machineryType: "",
    materialVolume: "",
    projectDuration: "",
    comments: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (service: keyof typeof formData.services) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service as keyof typeof formData.services],
      },
    }))
  }

  const handleMachineryChange = (machinery: keyof typeof formData.selectedMachinery) => {
    setFormData((prev) => ({
      ...prev,
      selectedMachinery: {
        ...prev.selectedMachinery,
        [machinery]: !prev.selectedMachinery[machinery as keyof typeof formData.selectedMachinery],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Preparar el mensaje para WhatsApp
    let message = `*Nueva Solicitud de Cotización*%0A%0A`
    message += `*Nombre:* ${formData.name}%0A`
    message += `*Teléfono:* ${formData.phone}%0A`
    message += `*Email:* ${formData.email}%0A`
    message += `*Ubicación:* ${formData.location}%0A%0A`

    message += `*Servicios solicitados:*%0A`
    if (formData.services.demolition) message += `- Demolición%0A`
    if (formData.services.cleaning) message += `- Limpieza de terreno%0A`
    if (formData.services.debris) message += `- Acarreos de escombro%0A`
    if (formData.services.machinery) {
      message += `- Renta de maquinaria%0A`

      // Añadir detalles de maquinaria si está seleccionada
      if (formData.services.machinery) {
        message += `  *Maquinaria seleccionada:*%0A`

        if (formData.selectedMachinery.roller) {
          const price =
            formData.rentalPeriod === "day" ? "2,700" : formData.rentalPeriod === "week" ? "14,850" : "55,600"
          message += `  - Rodillo vibrocompactador: $${price} (${formData.rentalPeriod})%0A`
          message += `  - Flete rodillo: $3,200%0A`
        }

        if (formData.selectedMachinery.miniLoader) {
          const price =
            formData.rentalPeriod === "day" ? "3,300" : formData.rentalPeriod === "week" ? "18,300" : "72,000"
          message += `  - Mini cargador: $${price} (${formData.rentalPeriod})%0A`
          message += `  - Flete mini cargador: $1,400%0A`
        }

        if (formData.selectedMachinery.excavator) {
          message += `  - Retroexcavadora con martillo: $6,200 (día)%0A`
          message += `  - Flete retroexcavadora: $3,600%0A`
        }

        if (formData.selectedMachinery.excavatorSimple) {
          message += `  - Retroexcavadora sencilla: $5,200 (día)%0A`
          message += `  - Flete retroexcavadora: $3,600%0A`
        }

        if (formData.machineryType) {
          message += `  - Tipo específico: ${formData.machineryType}%0A`
        }
      }
    }
    if (formData.services.waterTrucks) message += `- Renta de pipas%0A`
    if (formData.services.materials) message += `- Compra de materiales%0A`
    if (formData.services.construction) message += `- Construcción/planificación%0A`

    if (formData.squareMeters) message += `*Metros cuadrados:* ${formData.squareMeters}%0A`
    if (formData.materialVolume) message += `*Volumen de material:* ${formData.materialVolume}%0A`
    if (formData.projectDuration) message += `*Duración del proyecto:* ${formData.projectDuration}%0A`
    if (formData.comments) message += `*Comentarios:* ${formData.comments}%0A`

    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/524881144890?text=${message}`, "_blank")

    // Mostrar mensaje de éxito
    toast({
      title: "Cotización enviada",
      description: "Te redirigiremos a WhatsApp para finalizar tu solicitud.",
    })
  }

  // Check if any service is selected
  const anyServiceSelected = Object.values(formData.services).some((value) => value)
  const isMachinerySelected = formData.services.machinery

  return (
    <Card className="bg-zinc-900 border-zinc-800 p-8 rounded-3xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent"></div>
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="name" className="text-zinc-300 text-lg mb-2 block">
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-zinc-300 text-lg mb-2 block">
              Teléfono
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-zinc-300 text-lg mb-2 block">
              Correo electrónico
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="location" className="text-zinc-300 text-lg mb-2 block">
              Ubicación del proyecto
            </Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
        </div>

        <div>
          <Label className="text-zinc-300 text-lg block mb-4">Servicios a contratar</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="demolition"
                checked={formData.services.demolition}
                onCheckedChange={() => handleCheckboxChange("demolition")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="demolition" className="text-zinc-300 text-lg">
                Demolición
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="cleaning"
                checked={formData.services.cleaning}
                onCheckedChange={() => handleCheckboxChange("cleaning")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="cleaning" className="text-zinc-300 text-lg">
                Limpieza de terreno
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="debris"
                checked={formData.services.debris}
                onCheckedChange={() => handleCheckboxChange("debris")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="debris" className="text-zinc-300 text-lg">
                Acarreos de escombro
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="machinery"
                checked={formData.services.machinery}
                onCheckedChange={() => handleCheckboxChange("machinery")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="machinery" className="text-zinc-300 text-lg">
                Renta de maquinaria
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="waterTrucks"
                checked={formData.services.waterTrucks}
                onCheckedChange={() => handleCheckboxChange("waterTrucks")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="waterTrucks" className="text-zinc-300 text-lg">
                Renta de pipas
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="materials"
                checked={formData.services.materials}
                onCheckedChange={() => handleCheckboxChange("materials")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="materials" className="text-zinc-300 text-lg">
                Compra de materiales
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="construction"
                checked={formData.services.construction}
                onCheckedChange={() => handleCheckboxChange("construction")}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
              />
              <Label htmlFor="construction" className="text-zinc-300 text-lg">
                Construcción/planificación
              </Label>
            </div>
          </div>
        </div>

        {anyServiceSelected && (
          <div className="space-y-8 pt-4">
            {isMachinerySelected && (
              <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
                <h3 className="text-xl font-bold text-white mb-4">Selecciona la maquinaria</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="roller"
                      checked={formData.selectedMachinery.roller}
                      onCheckedChange={() => handleMachineryChange("roller")}
                      className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
                    />
                    <Label htmlFor="roller" className="text-zinc-300 text-lg">
                      Rodillo vibrocompactador
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="miniLoader"
                      checked={formData.selectedMachinery.miniLoader}
                      onCheckedChange={() => handleMachineryChange("miniLoader")}
                      className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
                    />
                    <Label htmlFor="miniLoader" className="text-zinc-300 text-lg">
                      Mini cargador
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="excavator"
                      checked={formData.selectedMachinery.excavator}
                      onCheckedChange={() => handleMachineryChange("excavator")}
                      className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
                    />
                    <Label htmlFor="excavator" className="text-zinc-300 text-lg">
                      Retroexcavadora con martillo
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="excavatorSimple"
                      checked={formData.selectedMachinery.excavatorSimple}
                      onCheckedChange={() => handleMachineryChange("excavatorSimple")}
                      className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-red-500"
                    />
                    <Label htmlFor="excavatorSimple" className="text-zinc-300 text-lg">
                      Retroexcavadora sencilla
                    </Label>
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="rentalPeriod" className="text-zinc-300 text-lg mb-2 block">
                    Periodo de renta (para rodillo y mini cargador)
                  </Label>
                  <select
                    id="rentalPeriod"
                    name="rentalPeriod"
                    value={formData.rentalPeriod}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 border-zinc-700 text-white rounded-xl py-3 px-4 text-lg focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="day">Por día</option>
                    <option value="week">Por semana</option>
                    <option value="month">Por mes</option>
                  </select>
                </div>

                <div className="mt-4">
                  <Label htmlFor="machineryType" className="text-zinc-300 text-lg mb-2 block">
                    Otra maquinaria (especificar)
                  </Label>
                  <Input
                    id="machineryType"
                    name="machineryType"
                    value={formData.machineryType}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-3 px-4 text-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Ej. Excavadora, Bobcat, etc."
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(formData.services.demolition || formData.services.cleaning) && (
                <div>
                  <Label htmlFor="squareMeters" className="text-zinc-300 text-lg mb-2 block">
                    Metros cuadrados
                  </Label>
                  <Input
                    id="squareMeters"
                    name="squareMeters"
                    value={formData.squareMeters}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Ej. 100 m²"
                  />
                </div>
              )}

              {formData.services.materials && (
                <div>
                  <Label htmlFor="materialVolume" className="text-zinc-300 text-lg mb-2 block">
                    Volumen de material
                  </Label>
                  <Input
                    id="materialVolume"
                    name="materialVolume"
                    value={formData.materialVolume}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Ej. 10 m³ o 15 toneladas"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="projectDuration" className="text-zinc-300 text-lg mb-2 block">
                  Duración del proyecto
                </Label>
                <Input
                  id="projectDuration"
                  name="projectDuration"
                  value={formData.projectDuration}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-6 px-4 text-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Ej. 2 semanas, 1 mes"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="comments" className="text-zinc-300 text-lg mb-2 block">
                Comentarios adicionales
              </Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 text-white rounded-xl py-4 px-4 text-lg focus:ring-red-500 focus:border-red-500"
                rows={4}
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 py-6 text-lg rounded-xl">
          Solicitar cotización por WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </Card>
  )
}
