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
import { projects } from "@/data/projects";
import { useScroll } from "@/hooks/useScroll";

const PortfolioSection = () => {
  const { scrollTo } = useScroll();

  const handleScrollToServices = () => scrollTo("#servicos");

  return (
    <section
      id="portfolio"
      className="py-20 min-h-screen flex flex-col justify-between px-6 md:px-20 bg-background relative overflow-hidden"
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-3 text-foreground">
          Do Conceito à Produção: Projetos Reais
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Cada projeto representa um desafio solucionado com tecnologias
          modernas, arquitetura sólida e entrega de valor real para o negócio.
        </p>
      </motion.div>

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

                <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-neutral/60 border border-neutral-600 text-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
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

      {/* CTA Final Forte */}
      <motion.div
        className="relative z-10 mt-20 max-w-3xl mx-auto text-center bg-card/50 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para Criar Seu Próximo Projeto?
        </h3>
        <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
          Viu a qualidade dos projetos? Agora é a sua vez! Vamos conversar sobre
          como posso ajudar a transformar sua ideia em um produto digital de
          sucesso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-accent/50"
          >
            Solicitar Orçamento Gratuito
          </Link>
          <button
            onClick={handleScrollToServices}
            className="inline-block px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-full transition-all"
          >
            Rever Meus Serviços
          </button>
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-background/30 via-transparent to-background/30"></div>
    </section>
  );
};

export default PortfolioSection;
