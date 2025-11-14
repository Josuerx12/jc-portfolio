"use client";
import { Cloud, Code, Wrench, Layers } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

const Services = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  } as any;

  const { scrollTo } = useScroll();

  const handleScrollToClients = () => scrollTo("#clients");

  return (
    <section
      id="servicos"
      className="bg-background min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.div
        className="text-center max-w-3xl mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-3xl font-bold mb-4">Como Posso Ajudar</h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          Com base na minha experiência e stack técnica, ofereço soluções
          completas para levar seu projeto do planejamento à produção — sempre
          com foco em{" "}
          <span className="text-primary font-semibold">performance</span>,{" "}
          <span className="text-secondary font-semibold">escalabilidade</span> e{" "}
          <span className="text-accent font-semibold">qualidade</span>.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 "
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg hover:border-accent/50 transition-all"
        >
          <div className="flex flex-col gap-y-3">
            <Code className="text-accent mx-auto" size={36} />
            <h6 className="text-center font-semibold text-xl">
              Aplicações Web Fullstack
            </h6>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-3">
            Desenvolvimento completo de aplicações modernas do zero, integrando
            frontend e backend.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {["Next.js", "NestJS", "React", "TypeScript"].map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-background/50 border border-neutral-600 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <li>✓ SaaS e plataformas web</li>
            <li>✓ E-commerce e marketplaces</li>
            <li>✓ Dashboards administrativos</li>
            <li>✓ Landing pages de alta conversão</li>
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg hover:border-primary/50 transition-all"
        >
          <div className="flex flex-col gap-y-3">
            <Layers className="text-primary mx-auto" size={36} />
            <h6 className="text-center font-semibold text-xl">
              APIs & Backend Escalável
            </h6>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-3">
            Construção de APIs robustas, seguras e preparadas para crescer.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {["NestJS", "Node.js", "PostgreSQL", "Redis"].map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-background/50 border border-neutral-600 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <li>✓ REST & GraphQL APIs</li>
            <li>✓ Microsserviços e arquitetura limpa</li>
            <li>✓ Autenticação e autorização (JWT, OAuth)</li>
            <li>✓ Integrações com terceiros</li>
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg hover:border-secondary/50 transition-all"
        >
          <div className="flex flex-col gap-y-3">
            <Cloud className="text-secondary mx-auto" size={36} />
            <h6 className="text-center font-semibold text-xl">
              Cloud & DevOps
            </h6>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-3">
            Deploy, infraestrutura e automação para manter seu sistema online e
            performático.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {["AWS", "Docker", "CI/CD", "GitHub Actions"].map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-background/50 border border-neutral-600 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <li>✓ Deploy em AWS (EC2, S3, RDS, Lambda)</li>
            <li>✓ Containerização com Docker</li>
            <li>✓ Pipelines de CI/CD</li>
            <li>✓ Monitoramento e logs</li>
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg hover:border-accent/50 transition-all"
        >
          <div className="flex flex-col gap-y-3">
            <Wrench className="text-orange-400 mx-auto" size={36} />
            <h6 className="text-center font-semibold text-xl">
              Refatoração & Otimização
            </h6>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-3">
            Melhoria de sistemas existentes para aumentar performance e
            manutenibilidade.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {["Code Review", "Performance", "Testing", "Migration"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-background/50 border border-neutral-600 rounded text-xs"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <ul className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <li>✓ Code review e auditoria técnica</li>
            <li>✓ Otimização de performance</li>
            <li>✓ Migração de tecnologias</li>
            <li>✓ Implementação de testes automatizados</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-muted-foreground text-lg">
          Não acredita só nas palavras?
        </p>
        <p className="mt-4">
          <button
            onClick={handleScrollToClients}
            className="text-accent font-semibold hover:underline inline-flex items-center gap-2 transition-all hover:gap-3"
          >
            Veja quem já confiou no meu trabalho →
          </button>
        </p>
      </motion.div>
    </section>
  );
};

export default Services;
