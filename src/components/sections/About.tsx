"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutLight from "../lights/AboutLight";
import { useScroll } from "@/hooks/useScroll";

const About = () => {
  const refLeft = useRef(null);
  const refRight = useRef(null);

  const isInViewLeft = useInView(refLeft, { once: false, amount: 0.2 });
  const isInViewRight = useInView(refRight, { once: false, amount: 0.2 });

  const { scrollTo } = useScroll();

  const handleScrollToServices = () => {
    scrollTo("#servicos");
  };

  return (
    <section
      id="sobre-mim"
      className="flex z-20 justify-around bg-neutral py-20 flex-wrap-reverse md:flex-nowrap gap-6"
    >
      <AboutLight />
      <motion.div
        ref={refLeft}
        className="w-full lg:max-w-6/12 flex flex-col gap-6"
        initial={{ opacity: 0, x: -100 }}
        animate={isInViewLeft ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={"/about.png"}
          width={600}
          height={500}
          className="hidden md:block lg:w-[500px] lg:h-[300px] md:w-[400px] md:h-[200px] z-20"
          alt="Profile Picture"
        />
      </motion.div>

      <motion.div
        ref={refRight}
        className="flex flex-col  gap-y-6 lg:max-w-6/12 "
        initial={{ opacity: 0, y: -100 }}
        animate={isInViewRight ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="text-2xl mb-10 font-bold text-center text-secondary">
            Sobre Mim
          </h2>

          <p className="text-base font-thin">
            Sou um{" "}
            <span className="font-bold text-secondary"> desenvolvedor </span>
            apaixonado por{" "}
            <span className="font-bold text-secondary">
              criar soluções inovadoras e eficientes
            </span>
            . Com experiência em diversas tecnologias, estou sempre em busca de
            novos desafios e oportunidades de aprendizado.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-6 items-center">
          <li className="border drop-shadow-accent/60 drop-shadow-sm cursor-default duration-200 ease-in-out hover:bg-accent/80 font-bold text-center border-accent rounded-full px-4 py-3">
            🚀 Desenvolvedor Fullstack
          </li>
          <li className="border drop-shadow-accent/60 drop-shadow-sm bg-accent/40 cursor-default duration-200 ease-in-out hover:bg-accent/80 font-bold text-center border-accent rounded-full px-4 py-3">
            🧠 Código Limpo
          </li>
          <li className="border drop-shadow-accent/60 drop-shadow-sm bg-accent/40 cursor-default duration-200 ease-in-out hover:bg-accent/80 font-bold text-center border-accent rounded-full px-4 py-3">
            ☁️ AWS & Cloud
          </li>
          <li className="border drop-shadow-accent/60 drop-shadow-sm cursor-default duration-200 ease-in-out hover:bg-accent/80 font-bold text-center border-accent rounded-full px-4 py-3">
            💼 +4 anos de experiência
          </li>
        </ul>

        <p className="text-center mt-6 italic">
          Estou sempre aberto a novas oportunidades e projetos. Se você está
          interessado em trabalhar comigo, não hesite em entrar em contato!
        </p>

        <p className="text-center mt-6 italic">
          Conheça mais sobre meus serviços, clique abaixo!
        </p>
        <button
          onClick={handleScrollToServices}
          className="block text-center text-accent font-semibold hover:underline mt-2 animate-pulse"
        >
          Meus Serviços
        </button>
      </motion.div>
    </section>
  );
};

export default About;
