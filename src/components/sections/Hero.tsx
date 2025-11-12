"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonCTA from "../button/CTA";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
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
          <h1 className="mt-6 lg:mt-0 text-lg lg:text-3xl font-bold leading-tight">
            Transformo ideias em experiências digitais modernas e escaláveis.
          </h1>
        </motion.div>

        <motion.p
          className="italic mt-4 text-sm lg:text-base text-muted-foreground"
          variants={textVariants}
          custom={0.3}
        >
          Sou <strong className="text-primary uppercase">Josué Carvalho</strong>
          , desenvolvedor fullstack apaixonado por criar soluções eficientes e
          de alta performance utilizando
          <strong className="text-primary"> NestJS</strong>,{" "}
          <strong className="text-primary">Next.js</strong> e{" "}
          <strong className="text-primary">AWS</strong>. Meu foco é entregar
          produtos digitais que unem{" "}
          <strong className="text-secondary uppercase">design, </strong>
          <strong className="text-secondary uppercase">
            tecnologia
          </strong> e{" "}
          <strong className="text-secondary uppercase">resultado</strong>.
        </motion.p>

        <div className="flex gap-2 flex-wrap mt-4">
          <motion.div variants={textVariants} custom={0.3}>
            <Link href={"/contato"}>
              <ButtonCTA variant="primary" className="w-full md:w-fit" rounded>
                Solicitar um projeto
              </ButtonCTA>
            </Link>
          </motion.div>
          <motion.div variants={textVariants} custom={0.3}>
            <ButtonCTA
              onClick={handleScrollToPortfolio}
              variant="secondary"
              className="w-full md:w-fit"
              rounded
            >
              Ver Portfólio
            </ButtonCTA>
          </motion.div>
        </div>

        <motion.button
          variants={textVariants}
          custom={0.7}
          className="hidden md:flex z-30 cursor-pointer animate-bounce mx-auto items-center gap-2 w-fit mt-20 font-medium hover:underline"
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
