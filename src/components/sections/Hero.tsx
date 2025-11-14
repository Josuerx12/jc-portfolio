"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonCTA from "../button/CTA";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
    },
  }),
} as any;

const Hero = () => {
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const isInViewLeft = useInView(refLeft, { once: true, amount: 0.2 });
  const isInViewRight = useInView(refRight, { once: true, amount: 0.2 });
  const { scrollTo } = useScroll();

  const handleScrollToAbout = () => scrollTo("#sobre-mim");
  const handleScrollToPortfolio = () => scrollTo("#portfolio");

  return (
    <section className="flex min-h-screen flex-wrap-reverse items-center justify-around px-10 md:px-20 lg:px-40 overflow-hidden">
      <motion.div
        ref={refLeft}
        className="lg:max-w-6/12 flex flex-col gap-6"
        initial="hidden"
        animate={isInViewLeft ? "visible" : "hidden"}
      >
        <motion.div variants={textVariants} custom={0.1}>
          <h1 className="mt-6 lg:mt-0 text-2xl lg:text-4xl font-bold leading-tight">
            Construo Sistemas que <span className="text-primary">Escalam</span>,{" "}
            <span className="text-secondary">Performam</span> e{" "}
            <span className="text-accent">Geram Resultados</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base lg:text-lg font-medium text-muted-foreground"
          variants={textVariants}
          custom={0.2}
        >
          Desenvolvedor Fullstack especializado em arquitetura escalável e alta
          performance
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center md:justify-start flex-wrap mt-2"
          variants={textVariants}
          custom={0.3}
        >
          {[
            { label: "anos", value: "3+" },
            { label: "projetos", value: "10+" },
            { label: "clientes", value: "10+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-3 justify-center md:justify-start flex-wrap mt-4"
          variants={textVariants}
          custom={0.4}
        >
          {["⚡ Performance", "🔒 Segurança", "📈 Escalabilidade"].map(
            (benefit, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-neutral/50 border border-neutral-700 rounded-full text-sm font-medium"
              >
                {benefit}
              </span>
            )
          )}
        </motion.div>

        <div className="flex flex-wrap gap-3 w-full">
          <motion.div
            className="w-full md:w-fit"
            variants={textVariants}
            custom={0.6}
          >
            <Link href={"/contato"}>
              <ButtonCTA
                variant="primary"
                rounded
                className="w-full md:w-fit gap-2"
              >
                <Mail size={18} />
                Solicitar Orçamento
              </ButtonCTA>
            </Link>
          </motion.div>
          <motion.div
            className="w-full md:w-fit"
            variants={textVariants}
            custom={0.6}
          >
            <ButtonCTA
              onClick={handleScrollToPortfolio}
              variant="secondary"
              className="w-full md:w-fit"
              rounded
            >
              Ver Projetos
            </ButtonCTA>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center md:justify-start gap-4 mt-4"
          variants={textVariants}
          custom={0.7}
        >
          <Link
            href="https://github.com/Josuerx12"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral/50 hover:bg-neutral/70 border border-neutral-700 rounded-full transition-all hover:scale-110"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/josueaze12"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral/50 hover:bg-neutral/70 border border-neutral-700 rounded-full transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </Link>
        </motion.div>

        <motion.button
          variants={textVariants}
          custom={0.8}
          className="hidden md:flex z-30 cursor-pointer animate-bounce mx-auto items-center gap-2 w-fit mt-12 font-medium hover:underline"
          onClick={handleScrollToAbout}
        >
          Veja mais sobre mim <ArrowDown />
        </motion.button>
      </motion.div>

      <motion.div
        ref={refRight}
        className="relative flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={
          isInViewRight
            ? {
                opacity: 1,
                x: 0,
                transition: { type: "spring", duration: 0.8, delay: 0.2 },
              }
            : { opacity: 0, x: 80 }
        }
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { type: "spring", stiffness: 200 },
          }}
          whileTap={{ scale: 0.97 }}
          className="relative z-20"
        >
          <Image
            src="/profile.png"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
            alt="Profile Picture"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent blur-3xl rounded-full z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
