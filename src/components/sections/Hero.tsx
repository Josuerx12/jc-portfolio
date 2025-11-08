"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonCTA from "../button/CTA";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

const Hero = () => {
  const refLeft = useRef(null);
  const refRight = useRef(null);

  const isInViewLeft = useInView(refLeft, { once: false, amount: 0.2 });
  const isInViewRight = useInView(refRight, { once: false, amount: 0.2 });

  const { scrollTo } = useScroll();

  const handleScrollToAbout = () => {
    scrollTo("#sobre-mim");
  };

  return (
    <section className="flex min-h-screen flex-wrap-reverse items-center justify-around">
      <motion.div
        ref={refLeft}
        className="lg:max-w-6/12 flex flex-col gap-6"
        initial={{ opacity: 0, y: -100 }}
        animate={
          isInViewLeft
            ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
            : { opacity: 0, y: -100, transition: { duration: 0.6 } }
        }
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="mt-4">
          <h1 className="text-lg lg:text-3xl font-bold">
            Transformo ideias em experiências digitais modernas.
          </h1>
          <p className="italic mt-4 text-sm lg:text-base">
            Sou Josué Carvalho (JCDEV), desenvolvedor fullstack especializado em
            soluções escaláveis com foco em performance e design.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap mt-4">
          <ButtonCTA variant="secondary" className="w-full md:w-fit" rounded>
            Solicitar um projeto
          </ButtonCTA>

          <ButtonCTA variant="primary" className="w-full md:w-fit" rounded>
            Ver Portfólio
          </ButtonCTA>
        </div>

        <button
          className="hidden md:flex z-30 cursor-pointer animate-bounce mx-auto items-center gap-2 w-fit mt-20 font-medium hover:underline"
          onClick={handleScrollToAbout}
        >
          Veja mais sobre mim <ArrowDown />
        </button>
      </motion.div>

      <motion.div
        ref={refRight}
        className="lg:max-w-6/12 flex flex-col gap-6"
        initial={{ opacity: 0, y: -100 }}
        animate={
          isInViewRight
            ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
            : { opacity: 0, y: -100, transition: { duration: 0.6 } }
        }
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          src={"/profile.png"}
          width={1920}
          height={1080}
          className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] z-20"
          alt="Profile Picture"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
