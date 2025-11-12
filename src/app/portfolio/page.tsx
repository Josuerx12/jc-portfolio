"use client";
import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "JCWPP",
    description:
      "Plataforma de integração com API do WhatsApp para automação de mensagens e gestão de contatos.",
    image: "/projects/jcwpp-dash.png",
    url: "https://jcwpp.com.br",
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
    url: "https://separamais.com.br",
  },
  {
    title: "Encurta By JCDev",
    description:
      "Sistema de gerenciamento de links encurtados com estatísticas de acesso.",
    image: "/projects/encurta-jcdev.png",
    url: "https://encurta.jcdev.com.br",
  },
];

const PortfolioPage = () => {
  return (
    <section className="min-h-screen py-20 px-6 md:px-20 flex flex-col ">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10  text-accent font-medium px-6 py-3 rounded-xl shadow hover:opacity-90 transition-all"
        >
          <ArrowLeft size={18} />
          Voltar para Início
        </Link>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 text-secondary">
          Portfólio de Projetos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi com foco em performance,
          escalabilidade e experiência do usuário. Novos projetos estão sendo
          adicionados em breve 🚀
        </p>
      </div>

      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card shadow-accent rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                Ver Projeto <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="italic text-muted-foreground">
          Mais projetos serão adicionados em breve. Fique à vontade para{" "}
          <a href="/contato" className="text-accent hover:underline">
            entrar em contato
          </a>{" "}
          se quiser conversar sobre o seu!
        </p>
      </div>
    </section>
  );
};

export default PortfolioPage;
