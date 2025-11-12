"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import ButtonCTA from "../button/CTA";

const projects = [
  {
    title: "JCWPP",
    description:
      "Plataforma de integração com API do WhatsApp para automação de mensagens e gestão de contatos.",
    image: "/projects/jcwpp-dash.png",
    url: "https://jcwpp.jcdev.com.br",
  },
  {
    title: "Floricultura Formosa",
    description:
      "E-commerce de flores e plantas com integração a sistemas de pagamento (Mercado Pago). Projeto dedicado à floricultura da minha cidade.",
    image: "/projects/floricultura-formosa.png",
    url: "https://floriculturaformosa.com.br",
  },
  {
    title: "Separa+",
    description:
      "Sistema de gerenciamento de itens em depósitos, facilitando a organização, localização e solicitações de retirada. Desenvolvido para Águas do Paraíba.",
    image: "/projects/separa-mais.png",
    url: "https://separamais.jcdev.com.br/",
  },
  {
    title: "Encurta By JCDev",
    description:
      "Sistema de gerenciamento de links encurtados com estatísticas de acesso.",
    image: "/projects/encurta-jcdev.png",
    url: "https://encurta.jcdev.com.br",
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-20 min-h-screen flex flex-col justify-between px-6 md:px-20 bg-background relative overflow-hidden"
    >
      {/* Cabeçalho animado */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Projetos em Destaque
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Alguns dos projetos que refletem minha paixão por performance, design
          e boas práticas.
        </p>
      </motion.div>

      {/* Swiper animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10!"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 min-h-[420px] flex flex-col"
              >
                <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-accent/90 hover:bg-accent px-4 py-2 rounded-full transition-all"
                  >
                    <ExternalLink size={18} />
                    Ver Projeto
                  </Link>
                </div>

                <motion.div
                  className="relative w-full h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/portfolio">
          <ButtonCTA>Ver Portfólio Completo</ButtonCTA>
        </Link>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-background/30 via-transparent to-background/30"></div>
    </section>
  );
};

export default PortfolioSection;
