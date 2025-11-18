"use client";

import React, { useState, useMemo } from "react";
import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const PortfolioPageComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) return projects;

    return projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 flex flex-col ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-10 text-accent font-medium  rounded-xl shadow hover:opacity-90 transition-all"
          >
            <ArrowLeft size={18} />
            Voltar para Início
          </Link>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-secondary">
            Portfólio de Projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi com foco em
            performance, escalabilidade e experiência do usuário.
          </p>
        </div>

        <div className="max-w-md mx-auto w-full mb-12">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar por nome do projeto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-neutral-700 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "projeto encontrado"
                : "projetos encontrados"}
            </p>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-neutral-700 hover:border-accent/50"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
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

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-accent font-medium hover:underline text-sm"
                  >
                    Ver Projeto <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              Nenhum projeto encontrado com "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-accent hover:underline"
            >
              Limpar busca
            </button>
          </div>
        )}

        <div className="text-center mt-20">
          <p className="italic text-muted-foreground">
            Mais projetos serão adicionados em breve. Fique à vontade para{" "}
            <a href="/contato" className="text-accent hover:underline">
              entrar em contato
            </a>{" "}
            se quiser conversar sobre o seu!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioPageComponent;
