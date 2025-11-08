"use client";
import { Brackets, Code, HandFist, Palette } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Nossos Serviços
      </motion.h3>

      {/* Container animado */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Card 1 */}
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

          <ul className="flex flex-col gap-y-4">
            <li>🌐 Aplicações Web</li>
            <li>📱 Aplicações Mobile</li>
            <li>☁️ Soluções em Nuvem</li>
          </ul>

          <p className="text-sm italic mt-5">
            Desenvolvimento de aplicações web e mobile, com foco em soluções em
            nuvem.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral/50 flex flex-col gap-y-4 p-6 rounded-2xl border border-neutral-700 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="mb-6 flex flex-col gap-y-4">
            <Palette className="text-pink-500 mx-auto" size={32} />
            <h6 className="text-center font-semibold text-xl">
              Design de Interfaces
            </h6>
          </div>

          <ul className="flex flex-col gap-y-4">
            <li>🎨 UI/UX Design</li>
            <li>🖌️ Prototipagem</li>
            <li>📐 Design Responsivo</li>
          </ul>

          <p className="text-sm italic mt-5">
            Criação de interfaces intuitivas e atraentes, com foco na
            experiência do usuário.
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
              Consultoria em Tecnologia
            </h6>
          </div>

          <ul className="flex flex-col gap-y-4">
            <li>🔍 Avaliação de Sistemas</li>
            <li>🛠️ Implementação de Soluções</li>
            <li>📈 Otimização de Processos</li>
          </ul>

          <p className="text-sm italic mt-5">
            Consultoria especializada em tecnologia, com foco na transformação
            digital e inovação.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20 max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="font-semibold text-lg">
          Entre em contato para discutir como posso ajudar no seu próximo
          projeto!
        </h4>

        <p className="mt-6 italic">
          Conheça mais sobre meu trabalho{" "}
          <a href="/portfolio" className="text-accent underline">
            aqui
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default Services;
