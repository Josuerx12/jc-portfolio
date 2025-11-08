"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutLight from "../lights/AboutLight";
import { useScroll } from "@/hooks/useScroll";

const fadeIn = (direction = "up", delay = 0) =>
  ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
        type: "spring",
      },
    },
  } as any);

const About = () => {
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const isInViewLeft = useInView(refLeft, { once: false, amount: 0.2 });
  const isInViewRight = useInView(refRight, { once: false, amount: 0.2 });
  const { scrollTo } = useScroll();

  const handleScrollToServices = () => scrollTo("#servicos");

  return (
    <section
      id="sobre-mim"
      className="relative flex flex-wrap-reverse md:flex-nowrap justify-around items-center py-20 gap-10 bg-neutral text-foreground overflow-hidden"
    >
      <AboutLight />

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
            alt="Sobre mim"
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
        <div className="text-center md:text-left">
          <h2 className="text-3xl mb-6 font-bold text-secondary">Sobre Mim</h2>

          <p className="text-base leading-relaxed text-muted-foreground">
            Sou um{" "}
            <span className="font-semibold text-secondary">
              desenvolvedor fullstack
            </span>{" "}
            apaixonado por{" "}
            <span className="font-semibold text-secondary">
              criar soluções inovadoras e eficientes
            </span>
            . Com experiência em tecnologias modernas, estou sempre em busca de
            novos desafios e oportunidades de aprendizado para construir
            experiências digitais impactantes.
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
            "🧠 Código Limpo",
            "☁️ AWS & Cloud",
            "💼 +4 anos de experiência",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={fadeIn("up", i * 0.1)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              className="border border-accent text-center font-medium rounded-full px-5 py-3 backdrop-blur-sm cursor-default transition-colors duration-300 hover:bg-accent/70"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeIn("up", 0.6)}
          className="text-center mt-6 italic text-muted-foreground"
        >
          Estou sempre aberto a novas oportunidades e projetos. Se você deseja
          criar algo incrível, entre em contato comigo!
        </motion.p>

        <motion.div variants={fadeIn("up", 0.8)} className="text-center mt-4">
          <p className="italic mb-2">Quer conhecer meus serviços?</p>
          <button
            onClick={handleScrollToServices}
            className="text-accent font-semibold hover:underline tracking-wide animate-pulse"
          >
            Meus Serviços
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
