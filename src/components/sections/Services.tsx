import { Brackets, Code, HandFist, Palette } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <section id="servicos" className="bg-background min-h-screen">
      <h3 className="text-2xl text-center font-bold">Nossos Serviços</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        <div className="bg-neutral/50 flex flex-col gap-y-4 p-4 rounded-lg border border-neutral-700">
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
        </div>
        <div className="bg-neutral/50 flex flex-col gap-y-4 p-4 rounded-lg border border-neutral-700 h-max">
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
        </div>
        <div className="bg-neutral/50 p-4 flex flex-col gap-y-4 rounded-lg border border-neutral-700">
          <div className="mb-6 flex flex-col  gap-y-2">
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
        </div>
      </div>

      <div className="mt-20">
        <h4 className="text-center font-semibold text-lg">
          Entre em contato para discutir como posso ajudar no seu próximo
          projeto!
        </h4>

        <p className="text-center mt-6 italic">
          Conheça mais sobre meu trabalho{" "}
          <a href="/portfolio" className="text-accent">
            aqui
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Services;
