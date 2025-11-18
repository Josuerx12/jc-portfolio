"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Send,
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { useState } from "react";

const fadeIn = (delay = 0) =>
  ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  } as any);

type SubmitStatus = "idle" | "loading" | "success" | "error";

const ContactPageComponent = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erro ao enviar mensagem");
      }

      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente ou entre em contato pelo email."
      );
    }
  };

  return (
    <section className="min-h-screen bg-background flex flex-col justify-center items-center py-20 px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        <motion.div
          className="flex flex-col justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div variants={fadeIn(0.1)} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              <ArrowLeft size={16} />
              Voltar para página inicial
            </Link>
          </motion.div>

          <div>
            <motion.h1
              variants={fadeIn(0.2)}
              className="text-4xl font-bold mb-4"
            >
              Vamos Conversar?
            </motion.h1>

            <motion.p
              variants={fadeIn(0.3)}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Estou sempre aberto a novos projetos e oportunidades. Preencha o
              formulário ou entre em contato pelos canais abaixo.
            </motion.p>
          </div>

          <motion.div variants={fadeIn(0.4)} className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Outras formas de contato:
            </h3>

            <Link
              href="mailto:contato@jcdev.com.br"
              className="flex items-center gap-3 w-fit text-muted-foreground hover:text-accent transition-colors group"
            >
              <div className="p-2 bg-neutral/50 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm">contato@jcdev.com.br</p>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/josueaze12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit text-muted-foreground hover:text-accent transition-colors group"
            >
              <div className="p-2 bg-neutral/50 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-sm">josueaze12</p>
              </div>
            </Link>

            <Link
              href="https://github.com/Josuerx12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit text-muted-foreground hover:text-accent transition-colors group"
            >
              <div className="p-2 bg-neutral/50 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Github size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-sm">@Josuerx12</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn(0.5)}
            className="bg-card/50 border border-accent/30 rounded-xl p-4"
          >
            <p className="text-sm text-muted-foreground">
              ⏱️ <strong className="text-foreground">Tempo de resposta:</strong>{" "}
              Geralmente respondo em até 24 horas úteis.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-neutral/50 p-8 rounded-2xl border border-neutral-700 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.h3 variants={fadeIn(0.2)} className="text-2xl font-bold mb-6">
            Envie sua Mensagem
          </motion.h3>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3"
            >
              <CheckCircle
                className="text-green-500 shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <p className="font-semibold text-green-500">
                  Mensagem enviada com sucesso!
                </p>
                <p className="text-sm text-green-500/80">
                  Responderei em breve.
                </p>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start gap-3"
            >
              <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-red-500">Erro ao enviar</p>
                <p className="text-sm text-red-500/80">{errorMessage}</p>
              </div>
            </motion.div>
          )}

          <motion.form
            variants={fadeIn(0.3)}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Nome completo <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ex: João Silva"
                {...register("name")}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-neutral-600 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemplo@dominio.com"
                {...register("email")}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-neutral-600 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground"
              >
                Assunto <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Ex: Desenvolvimento de aplicativo"
                {...register("subject")}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-neutral-600 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Detalhes do projeto / Mensagem{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Descreva aqui sua ideia, objetivo ou necessidade..."
                rows={5}
                {...register("message")}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-neutral-600 bg-neutral/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensagem
                </>
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPageComponent;
