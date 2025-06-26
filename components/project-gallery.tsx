"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Construcción Residencial",
    description: "Proyecto de construcción de losa en zona residencial",
    category: "construccion",
    image: "/images/construction-site.jpeg",
  },
  {
    id: 2,
    title: "Demolición Industrial",
    description: "Demolición controlada de estructura industrial",
    category: "demolicion",
    image: "/images/construction-site.jpeg",
  },
  {
    id: 3,
    title: "Suministro de Materiales",
    description: "Entrega de materiales para proyecto comercial",
    category: "materiales",
    image: "/images/construction-site.jpeg",
  },
  {
    id: 4,
    title: "Limpieza de Terreno",
    description: "Preparación de terreno para nueva construcción",
    category: "limpieza",
    image: "/images/construction-site.jpeg",
  },
]

export default function ProjectGallery() {
  const [selectedTab, setSelectedTab] = useState("todos")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedTab === "todos" ? projects : projects.filter((project) => project.category === selectedTab)

  return (
    <>
      <Tabs defaultValue="todos" className="w-full" onValueChange={setSelectedTab}>
        <div className="flex justify-center mb-12">
          <TabsList className="bg-zinc-800/50 backdrop-blur-sm p-1 rounded-full">
            <TabsTrigger
              value="todos"
              className="rounded-full px-6 py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="construccion"
              className="rounded-full px-6 py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Construcción
            </TabsTrigger>
            <TabsTrigger
              value="demolicion"
              className="rounded-full px-6 py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Demolición
            </TabsTrigger>
            <TabsTrigger
              value="materiales"
              className="rounded-full px-6 py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Materiales
            </TabsTrigger>
            <TabsTrigger
              value="limpieza"
              className="rounded-full px-6 py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white"
              className="rounded-full px-6 py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Limpieza
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="todos" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-zinc-300">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="construccion" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-zinc-300">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="demolicion" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-zinc-300">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="materiales" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-zinc-300">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="limpieza" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-zinc-300">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-12">
        <Button className="bg-zinc-800 hover:bg-red-500 text-white px-8 py-6 text-lg rounded-full">
          Ver más proyectos <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-zinc-400">{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          <div className="relative h-[400px] w-full mt-4">
            {selectedProject && (
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Detalles del proyecto</h4>
            <p className="text-zinc-400">
              Este proyecto demuestra nuestra capacidad para entregar resultados de alta calidad en tiempo y forma.
              Utilizamos maquinaria especializada y materiales de primera calidad para garantizar la satisfacción del
              cliente.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
