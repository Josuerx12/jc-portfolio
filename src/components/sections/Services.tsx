"use client";
import { Brackets, Code, HandFist, Palette } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <section
      id="servicos"
      className="bg-background min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h3
        className="text-2xl text-center font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Meus Serviços
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="mb-6 flex flex-col gap-y-4">
            <Code className="text-accent mx-auto" size={32} />
            <h6 className="text-center font-semibold text-xl">
              Desenvolvimento Fullstack
            </h6>
          </div>

          <ul className="flex flex-col gap-y-2 pb-2">
            <li>🚀 APIs escaláveis (NestJS ou Laravel)</li>
            <li>
              ⚡ Frontends modernos e performáticos (Next.js, Vue, ReactJS)
            </li>
            <li>☁️ Integrações com AWS e serviços em nuvem</li>
          </ul>

          <p className="text-sm italic mt-auto">
            Construção de aplicações completas — do backend ao frontend — com
            foco em performance, segurança e escalabilidade.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="mb-6 flex flex-col gap-y-4">
            <Palette className="text-pink-500 mx-auto" size={32} />
            <h6 className="text-center font-semibold text-xl">
              Design e Experiência
            </h6>
          </div>

          <ul className="flex flex-col gap-y-2 pb-2">
            <li>🎨 Interfaces intuitivas e responsivas</li>
            <li>🧩 Experiência centrada no usuário (UX)</li>
            <li>🖥️ Identidade visual aplicada a produtos digitais</li>
          </ul>

          <p className="text-sm italic mt-auto">
            Crio interfaces que equilibram estética e usabilidade, garantindo
            uma experiência fluida e memorável.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral/50 p-6 flex flex-col gap-y-4 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="mb-6 flex flex-col gap-y-2">
            <HandFist className="text-primary mx-auto" size={32} />
            <h6 className="text-center font-semibold text-xl">
              Consultoria Técnica
            </h6>
          </div>

          <ul className="flex flex-col gap-y-2 pb-2">
            <li>🔍 Diagnóstico e otimização de sistemas</li>
            <li>🧠 Mentoria e orientação técnica</li>
            <li>📈 Planejamento de arquitetura escalável</li>
          </ul>

          <p className="text-sm italic mt-auto">
            Auxílio empresas e equipes a aprimorar sua base técnica e estruturar
            produtos prontos para o crescimento.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20 max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h4 className="font-semibold text-lg">
          Quer transformar sua ideia em um produto digital real?
        </h4>

        <p className="mt-6 italic">
          <Link
            href="/contato"
            className="text-accent underline cursor-pointer hover:text-accent/80"
          >
            Vamos conversar sobre o seu projeto.
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Services;
