"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutLight from "../lights/AboutLight";
import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";

const fadeIn = (direction = "up", delay = 0) =>
  ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        delay,
        ease: "easeOut",
        type: "spring",
      },
    },
  } as any);

const About = () => {
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const isInViewLeft = useInView(refLeft, { once: true, amount: 0.2 });
  const isInViewRight = useInView(refRight, { once: true, amount: 0.2 });
  const { scrollTo } = useScroll();

  const handleScrollToServices = () => scrollTo("#servicos");

  return (
    <section
      id="sobre-mim"
      className="relative flex min-h-screen flex-wrap-reverse md:flex-nowrap justify-around items-center py-20 gap-10 bg-linear-to-br from-neutral via-neutral/90 to-background text-foreground overflow-hidden"
    >
      <motion.div
        ref={refLeft}
        className="w-full lg:max-w-6/12 flex justify-center items-center"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        animate={isInViewLeft ? "visible" : "hidden"}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { type: "spring", stiffness: 200 },
          }}
          className="relative z-20"
        >
          <Image
            src="/about.png"
            width={600}
            height={400}
            className="hidden md:block rounded-xl lg:w-[500px] md:w-[400px] object-cover"
            alt="Sobre Josué Carvalho"
          />

          <motion.div
            className="absolute -inset-6 bg-linear-to-tr from-accent/40 to-transparent blur-3xl rounded-full z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={refRight}
        className="flex flex-col gap-8 w-full lg:max-w-6/12 px-6"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate={isInViewRight ? "visible" : "hidden"}
      >
        <div>
          <h2 className="text-3xl mb-6 font-bold text-secondary">
            Minha Jornada
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground text-justify">
            Minha trajetória na tecnologia começou com a curiosidade de entender
            como as coisas funcionam por trás das telas. Ao longo de{" "}
            <span className="font-semibold text-primary">mais de 3 anos</span>{" "}
            de experiência, transformei essa curiosidade em uma{" "}
            <span className="font-semibold text-secondary">
              carreira sólida
            </span>
            , construindo desde MVPs até sistemas complexos em produção.
            <br />
            <br />
            Hoje, trabalho com uma abordagem que vai além do código: busco{" "}
            <span className="font-semibold text-accent">
              entender o problema real
            </span>
            , propor a melhor solução técnica e entregar com qualidade. Cada
            projeto é uma oportunidade de criar algo que faça diferença —
            priorizando sempre{" "}
            <span className="font-semibold text-primary">código limpo</span>,{" "}
            <span className="font-semibold text-primary">
              documentação clara
            </span>{" "}
            e{" "}
            <span className="font-semibold text-primary">
              comunicação eficiente
            </span>
            .
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold  text-secondary mb-4">
            Como Trabalho
          </h3>
          <div className="grid gap-3">
            {[
              {
                emoji: "🎯",
                text: "Entendimento do problema antes de propor soluções",
              },
              {
                emoji: "🧩",
                text: "Arquitetura pensada para escalar e evoluir",
              },
              {
                emoji: "💬",
                text: "Comunicação constante durante todo o projeto",
              },
              {
                emoji: "✅",
                text: "Testes, documentação e código revisado",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", i * 0.1)}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Stack Técnica
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "TypeScript", color: "text-blue-400" },
              { name: "Next.js", color: "text-white" },
              { name: "React", color: "text-cyan-400" },
              { name: "Vue.js", color: "text-green-400" },
              { name: "NestJS", color: "text-red-400" },
              { name: "Laravel", color: "text-red-500" },
              { name: "Node.js", color: "text-green-500" },
              { name: "PostgreSQL", color: "text-blue-500" },
              { name: "MongoDB", color: "text-green-600" },
              { name: "Redis", color: "text-red-500" },
              { name: "AWS", color: "text-orange-400" },
              { name: "Docker", color: "text-blue-400" },
              { name: "Git", color: "text-orange-500" },
              { name: "Prisma", color: "text-slate-300" },
            ].map((tech, i) => (
              <motion.span
                key={i}
                variants={fadeIn("up", i * 0.05)}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                className={`${tech.color} px-3 py-1.5 bg-neutral/40 border border-neutral-700 rounded-lg text-xs font-medium cursor-default transition-all hover:border-accent`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          className="bg-card/30 border border-accent/30 rounded-xl p-5"
        >
          <h3 className="text-lg font-semibold text-accent mb-3">
            💡 Diferenciais
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground text-justify">
            <li>✓ Código orientado a testes e boas práticas</li>
            <li>✓ Experiência com microsserviços e APIs escaláveis</li>
            <li>✓ Deploy e infraestrutura cloud (AWS)</li>
            <li>✓ Foco em DX (Developer Experience) e código legível</li>
          </ul>
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.7)}
          className="text-center mt-6 italic text-muted-foreground"
        >
          Quer transformar sua ideia em realidade?{" "}
          <Link
            href={"/contato"}
            className="text-accent underline cursor-pointer hover:text-accent/80 font-semibold"
          >
            Vamos conversar!
          </Link>
        </motion.p>

        <motion.div variants={fadeIn("up", 0.8)} className="text-center mt-4">
          <button
            onClick={handleScrollToServices}
            className="text-primary cursor-pointer font-semibold hover:underline tracking-wide transition-all hover:scale-105"
          >
            Ver meus serviços →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
