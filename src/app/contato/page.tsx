"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";

const fadeIn = (delay = 0) =>
  ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  } as any);

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviado:", form);
  };

  return (
    <section className="min-h-screen bg-background flex flex-col justify-center items-center py-20 px-6">
      <motion.div
        className="w-full max-w-2xl bg-neutral/50 p-10 rounded-2xl border border-neutral-700 shadow-md"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* Voltar */}
        <motion.div variants={fadeIn(0.1)} className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            <ArrowLeft size={16} />
            Voltar para página inicial
          </Link>
        </motion.div>

        {/* Título */}
        <motion.h3
          variants={fadeIn(0.2)}
          className="text-2xl font-bold text-center mb-3"
        >
          Entre em Contato
        </motion.h3>

        <motion.p
          variants={fadeIn(0.3)}
          className="text-center text-muted-foreground mb-10"
        >
          Preencha o formulário abaixo com as informações do seu projeto ou
          mensagem. Responderei o mais breve possível.
        </motion.p>

        {/* Formulário */}
        <motion.form
          variants={fadeIn(0.4)}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-muted-foreground"
            >
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ex: João Silva"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-accent/40 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="exemplo@dominio.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-accent/40 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-muted-foreground"
            >
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Ex: Desenvolvimento de aplicativo"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-accent/40 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-muted-foreground"
            >
              Detalhes do projeto / Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Descreva aqui sua ideia, objetivo ou necessidade..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-accent/40 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none"
              required
            />
          </div>

          <motion.button
            variants={fadeIn(0.5)}
            type="submit"
            className="mt-6 flex items-center justify-center gap-2 bg-accent text-background font-semibold py-3 rounded-lg shadow hover:bg-accent/80 transition"
          >
            <Send size={18} />
            Enviar Mensagem
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Rodapé pequeno */}
      <motion.p
        className="mt-10 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        ou envie um e-mail diretamente para{" "}
        <a
          href="mailto:contato@jcdev.com.br"
          className="text-accent hover:underline"
        >
          contato@jcdev.com.br
        </a>
      </motion.p>
    </section>
  );
};

export default ContactPage;
