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
        <div className="text-justify">
          <h2 className="text-3xl mb-6 font-bold text-secondary">Sobre Mim</h2>

          <p className="text-base leading-relaxed text-muted-foreground">
            Sou um{" "}
            <span className="font-semibold text-secondary">
              desenvolvedor fullstack
            </span>{" "}
            com foco em entregar soluções robustas e escaláveis para empresas
            que valorizam performance e qualidade técnica. Ao longo dos últimos
            anos, venho aperfeiçoando minha expertise com{" "}
            <span className="font-semibold text-secondary">NestJS</span>,{" "}
            <span className="font-semibold text-secondary">Next.js</span> e{" "}
            <span className="font-semibold text-secondary">AWS</span>, sempre
            priorizando boas práticas, arquitetura limpa e resultados
            consistentes.
            <br />
            <br />
            Minha missão é transformar complexidade em simplicidade —
            desenvolvendo sistemas que unem eficiência, design inteligente e
            impacto real para quem utiliza. Cada linha de código é pensada para
            escalar, evoluir e gerar valor no longo prazo.
          </p>
        </div>

        <motion.ul
          className="grid md:grid-cols-2 gap-4"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            "🚀 Desenvolvedor Fullstack",
            "🧠 Arquitetura Limpa",
            "☁️ AWS & Cloud",
            "💼 +4 anos de experiência",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={fadeIn("up", i * 0.1)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              className="border border-accent text-center font-medium rounded-full px-5 py-3 backdrop-blur-sm cursor-default transition-all duration-300 hover:border-secondary"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeIn("up", 0.6)}
          className="text-center mt-6 italic text-muted-foreground"
        >
          Se você busca um parceiro técnico para tirar sua ideia do papel,{" "}
          <Link
            href={"/contato"}
            className="text-accent underline cursor-pointer hover:text-accent/80"
          >
            vamos conversar!
          </Link>
        </motion.p>

        <motion.div variants={fadeIn("up", 0.8)} className="text-center mt-4">
          <p className="italic mb-2">Quer conhecer meus serviços?</p>
          <button
            onClick={handleScrollToServices}
            className="text-primary cursor-pointer font-semibold hover:underline tracking-wide animate-pulse"
          >
            Clique aqui.
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
