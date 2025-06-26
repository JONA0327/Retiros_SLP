import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Truck, Building, Shovel, Droplet, Package, HardHat, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import QuoteForm from "@/components/quote-form"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import WhatsAppButton from "@/components/whatsapp-button"
import { Separator } from "@/components/ui/separator"
import FullscreenHero from "@/components/fullscreen-hero"
import ProjectShowcase from "@/components/project-showcase"
import AnimatedStats from "@/components/animated-stats"
import ParallaxSection from "@/components/parallax-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Fullscreen Hero Video */}
      <FullscreenHero />

      {/* Services Section with Animated Entrance */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Servicios <span className="text-red-500">Industriales</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
              Soluciones integrales para proyectos de construcción, demolición y suministro de materiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Building className="h-12 w-12 text-red-500" />}
              title="Demoliciones Profesionales"
              description="Demolición precisa y segura para proyectos de cualquier escala con tecnología avanzada."
              index={0}
              backgroundImages={[
                "/images/demolition-site.jpeg",
                "/images/demolition-site-2.jpeg",
                "/images/demolition-site-3.jpeg",
                "/images/demolition-site-4.jpeg",
              ]}
              serviceInfo={{
                title: "Servicio de demoliciones",
                details: [
                  { name: "Retroexcavadora con martillo", price: "$6,200", unit: "día" },
                  { name: "Flete", price: "$3,600", unit: "viaje" },
                  { name: "Retroexcavadora sencilla", price: "$5,200", unit: "día" },
                  { name: "Flete", price: "$3,600", unit: "viaje" },
                ],
                note: "Renta por día con operador y diésel incluido.",
              }}
            />
            <ServiceCard
              icon={<Shovel className="h-12 w-12 text-red-500" />}
              title="Limpieza de Terrenos"
              description="Preparación y limpieza de terrenos con equipo Bobcat especializado de última generación."
              index={1}
              backgroundImages={["/images/land-clearing-1.jpeg", "/images/land-clearing-2.jpeg"]}
              serviceInfo={{
                title: "Servicio de limpieza de terrenos",
                details: [
                  { name: "Terreno básico", price: "$35", unit: "m²" },
                  { name: "Con vegetación", price: "$45", unit: "m²" },
                ],
                note: "Incluye retiro de maleza y nivelación básica.",
              }}
            />
            <ServiceCard
              icon={<Truck className="h-12 w-12 text-red-500" />}
              title="Acarreos de Escombro"
              description="Retiro y transporte eficiente de escombros con flota moderna y capacidad industrial."
              index={2}
              backgroundImages={["/images/debris-hauling-1.jpeg", "/images/debris-hauling-2.jpeg"]}
              serviceInfo={{
                title: "Viaje de escombro con mini cargador",
                details: [
                  { name: "Zona urbana", price: "$1,300", unit: "viaje" },
                  { name: "Zona industrial", price: "$1,500", unit: "viaje" },
                ],
                note: "Asistencia con mini cargador incluida.",
              }}
            />
            <ServiceCard
              icon={<HardHat className="h-12 w-12 text-red-500" />}
              title="Maquinaria Pesada"
              description="Renta de maquinaria especializada con operadores certificados y mantenimiento premium."
              index={3}
              backgroundImages={[
                "/images/heavy-machinery-1.jpeg",
                "/images/heavy-machinery-2.jpeg",
                "/images/heavy-machinery-3.jpeg",
                "/images/heavy-machinery-4.jpeg",
              ]}
              serviceInfo={{
                title: "Maquinaria Pesada",
                details: [
                  { name: "Rodillo vibrocompactador 10 toneladas", price: "$2,700", unit: "día" },
                  { name: "Rodillo vibrocompactador (semanal)", price: "$14,850", unit: "semana" },
                  { name: "Rodillo vibrocompactador (mensual)", price: "$55,600", unit: "mes" },
                  { name: "Flete rodillo", price: "$3,200", unit: "viaje" },
                  { name: "Mini cargador", price: "$3,300", unit: "día" },
                  { name: "Flete mini cargador", price: "$1,400", unit: "viaje" },
                ],
                note: "Renta por día con operador y diésel incluido. Precios más IVA.",
              }}
            />
            <ServiceCard
              icon={<Droplet className="h-12 w-12 text-red-500" />}
              title="Pipas de Agua"
              description="Suministro de agua para obras con unidades de alta capacidad y servicio inmediato."
              index={4}
              backgroundImages={["/images/water-truck-1.jpeg", "/images/water-truck-3.png"]}
              serviceInfo={{
                title: "Pipa de agua (10 mil litros)",
                details: [
                  { name: "Precio por viaje", price: "$1,200", unit: "viaje" },
                ],
                note: "Entrega en un solo punto. Para múltiples entregas cotizar vía WhatsApp.",
              }}
            />
            <ServiceCard
              icon={<Package className="h-12 w-12 text-red-500" />}
              title="Materiales Premium"
              description="Arena, grava, tezontle y base hidráulica con certificación de calidad y entrega puntual."
              index={5}
              backgroundImages={["/images/materials-truck-1.jpeg", "/images/materials-truck-2.jpeg"]}
              serviceInfo={{
                title: "Suministro de Materiales",
                materials: ["Tepetate", "Arena", "Grava", "Base hidráulica", "Sello", "Piedra bola", "Tezontle"],
                capacities: ["7 m³", "14 m³"],
                note: "Cotiza sin compromiso. Precios especiales para volúmenes grandes.",
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedStats />

      {/* Project Showcase with Video and Images */}
      <ProjectShowcase videoSrc="/videos/construction-machinery.mp4" imageSrc="/images/construction-site.jpeg" />

      {/* Parallax Feature Section */}
      <ParallaxSection imageSrc="/images/construction-site.jpeg" />

      {/* Quotation Form Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Cotizador <span className="text-red-500">Inteligente</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
              Obtén una estimación precisa para tu proyecto en minutos. Nuestro sistema calculará los recursos
              necesarios.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              La <span className="text-red-500">Excelencia</span> Habla
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
              Nuestros clientes comparten su experiencia con nuestros servicios industriales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Carlos Ramírez"
              company="Constructora Horizonte"
              testimonial="Excelente servicio de demolición. Cumplieron con los tiempos establecidos y dejaron el terreno perfectamente limpio."
              rating={5}
              index={0}
            />
            <TestimonialCard
              name="Laura Méndez"
              company="Inmobiliaria Vanguardia"
              testimonial="La calidad de los materiales es inmejorable. Siempre cumplen con las entregas y los precios son muy competitivos."
              rating={5}
              index={1}
            />
            <TestimonialCard
              name="Roberto Sánchez"
              company="Arquitectos Asociados"
              testimonial="La renta de maquinaria fue muy eficiente. El equipo estaba en perfectas condiciones y el operador muy profesional."
              rating={4}
              index={2}
            />
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold mb-10">Empresas que confían en nosotros</h3>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div className="w-40 h-20 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-zinc-800">
                <span className="text-zinc-400">Logo 1</span>
              </div>
              <div className="w-40 h-20 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-zinc-800">
                <span className="text-zinc-400">Logo 2</span>
              </div>
              <div className="w-40 h-20 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-zinc-800">
                <span className="text-zinc-400">Logo 3</span>
              </div>
              <div className="w-40 h-20 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-zinc-800">
                <span className="text-zinc-400">Logo 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Preguntas <span className="text-red-500">Frecuentes</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
              Respuestas a las dudas más comunes sobre nuestros servicios industriales.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-zinc-800">
                <AccordionTrigger className="text-xl py-6">¿Cuánto cuesta un acarreo de escombro?</AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg">
                  El costo de un acarreo de escombro depende de varios factores como la cantidad de material, la
                  distancia de transporte y el tipo de escombro. Contáctanos para obtener una cotización personalizada
                  según tus necesidades específicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-zinc-800">
                <AccordionTrigger className="text-xl py-6">
                  ¿Qué materiales venden y en qué cantidades?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg">
                  Ofrecemos arena, grava, tezontle, base hidráulica y otros materiales para construcción. Vendemos desde
                  1 m³ hasta grandes volúmenes para proyectos industriales. Todos nuestros materiales cumplen con los
                  estándares de calidad requeridos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-zinc-800">
                <AccordionTrigger className="text-xl py-6">¿Ofrecen factura?</AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg">
                  Sí, emitimos factura por todos nuestros servicios y productos. Solo necesitas proporcionarnos tus
                  datos fiscales al momento de solicitar el servicio o realizar la compra.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-zinc-800">
                <AccordionTrigger className="text-xl py-6">¿Cuánto tiempo tardan en responder?</AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg">
                  Nuestro tiempo de respuesta es generalmente de 1 a 2 horas en días hábiles. Para solicitudes urgentes,
                  te recomendamos contactarnos directamente por WhatsApp para una atención inmediata.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-black relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/images/texture-industrial.png" alt="Textura industrial" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">
                Contacto <span className="text-red-500">Directo</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="mt-1 bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium mb-2">Dirección</h3>
                    <p className="text-zinc-400 text-lg">San Luis Potosí, México</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mt-1 bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium mb-2">Teléfono</h3>
                    <p className="text-zinc-400 text-lg">+52 (444) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mt-1 bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium mb-2">Correo Electrónico</h3>
                    <p className="text-zinc-400 text-lg">contacto@retirosysuministros.com.mx</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Síguenos</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                  >
                    <span className="sr-only">Facebook</span>
                    {/* Facebook icon */}
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                  >
                    <span className="sr-only">Instagram</span>
                    {/* Instagram icon */}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-zinc-900/80 backdrop-blur-md border-zinc-800 p-8 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                <CardContent className="p-0 relative">
                  <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-zinc-300">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-300">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-zinc-300">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-zinc-300">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-red-500 hover:bg-red-600 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-20 bg-zinc-800" />

          <div className="text-center">
            <p className="text-zinc-500">
              © {new Date().getFullYear()} Retiros y Suministros de San Luis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="524881144890" />
    </main>
  )
}
