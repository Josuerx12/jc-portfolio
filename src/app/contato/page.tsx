import { Metadata } from "next";
import ContactPageComponent from "./ContactPageComponent";

export const metadata: Metadata = {
  title: "Contato | Josué Azevedo — Desenvolvedor Fullstack",
  description:
    "Entre em contato com Josué Azevedo para solicitar orçamentos, tirar dúvidas ou iniciar um novo projeto. Resposta em até 24 horas úteis.",
  keywords: [
    "contato",
    "falar com desenvolvedor",
    "orcamento site",
    "orcamento sistema",
    "desenvolvedor fullstack",
    "nextjs",
    "react",
    "programador freelance",
    "contratar desenvolvedor",
    "desenvolvimento web",
  ],
  openGraph: {
    title: "Fale Comigo — Josué Azevedo",
    description:
      "Fale diretamente com Josué Azevedo e envie sua ideia ou projeto. Resposta rápida e atendimento direto.",
    url: "https://jcdev.com.br/contato",
    siteName: "Josué Azevedo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://jcdev.com.br/profile.png",
        width: 1200,
        height: 630,
        alt: "Página de Contato — Josué Azevedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entre em Contato — Josué Azevedo",
    description:
      "Envie sua mensagem, solicite um orçamento ou tire dúvidas. Retorno rápido.",
    images: ["https://jcdev.com.br/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato — Josué Azevedo",
            url: "https://jcdev.com.br/contato",
            mainEntity: {
              "@type": "Person",
              name: "Josué Azevedo",
              jobTitle: "Desenvolvedor Fullstack",
              email: "mailto:contato@jcdev.com.br",
              sameAs: [
                "https://www.linkedin.com/in/josueaze12",
                "https://github.com/Josuerx12",
              ],
            },
          }),
        }}
      />

      <ContactPageComponent />
    </>
  );
}
