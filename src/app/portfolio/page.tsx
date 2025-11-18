export const metadata: Metadata = {
  title: "Portfólio de Projetos | Josué Azevedo — Desenvolvedor Fullstack",
  description:
    "Conheça os projetos desenvolvidos por Josué Azevedo com foco em performance, escalabilidade, arquitetura limpa e experiência do usuário utilizando React, Next.js, Node.js e tecnologias modernas.",
  keywords: [
    "portfólio",
    "projetos",
    "desenvolvedor",
    "fullstack",
    "frontend",
    "react",
    "nextjs",
    "nodejs",
    "next.js",
    "node.js",
    "programador",
    "criação de sites",
    "desenvolvimento web",
  ],
  openGraph: {
    title: "Portfólio de Projetos — Josué Azevedo",
    description:
      "Explore os principais projetos desenvolvidos por Josué Azevedo utilizando tecnologias como Next.js, React, Node.js e arquiteturas escaláveis.",
    url: "https://jcdev.com.br/portfolio",
    siteName: "Josué Azevedo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://jcdev.com.br/profile.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Projetos — Josué Azevedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Projetos — Josué Azevedo",
    description:
      "Conheça os projetos criados com foco em qualidade, performance e escalabilidade.",
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

import { Metadata } from "next";
import PortfolioPageComponent from "./PortfolioPageComponent";

const PortfolioPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            name: "Portfólio de Projetos — Josué Azevedo",
            url: "https://jcdev.com.br/portfolio",
            description:
              "Projetos realizados por Josué Azevedo utilizando tecnologias modernas e práticas avançadas de desenvolvimento.",
            author: {
              "@type": "Person",
              name: "Josué Azevedo",
            },
          }),
        }}
      />

      <PortfolioPageComponent />
    </>
  );
};

export default PortfolioPage;
