import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "JC DEV | Josué Carvalho - Desenvolvedor Full Stack & Criador de Soluções Web",
  description:
    "Portfólio de Josué Carvalho (JC DEV) — Desenvolvedor Full Stack especializado em criar soluções web escaláveis e de alta performance usando tecnologias modernas como NestJS, Next.js, Node.js, React e AWS. Conheça projetos como JCWPP, Separa+ e Floricultura Formosa.",
  keywords: [
    "JC DEV",
    "Josué Carvalho",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Desenvolvimento de Software",
    "Desenvolvimento Web",
    "Desenvolvedor Backend",
    "Desenvolvedor Frontend",
    "Next.js",
    "NestJS",
    "Node.js",
    "React",
    "TypeScript",
    "JavaScript",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "Sequelize",
    "Arquitetura Limpa",
    "DDD",
    "Portfólio de Desenvolvedor",
    "Soluções Digitais",
    "Aplicações Escaláveis",
    "Alta Performance Web",
    "Transformação Digital",
    "Inovação em Tecnologia",
    "JCWPP",
    "Separa+",
    "Floricultura Formosa",
  ],
  metadataBase: new URL("https://jcdev.com.br"),
  authors: [
    {
      name: "Josué Carvalho",
      url: "https://jcdev.com.br",
    },
  ],
  creator: "Josué Carvalho",
  publisher: "JC DEV",
  openGraph: {
    title: "JC DEV | Josué Carvalho - Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em soluções web modernas com NestJS, Next.js e AWS. Conheça os projetos JCWPP, Separa+ e Floricultura Formosa.",
    url: "https://jcdev.com.br",
    siteName: "JC DEV",
    images: [
      {
        url: "https://jcdev.com.br/profile.png",
        width: 1200,
        height: 630,
        alt: "JC DEV | Portfólio de Josué Carvalho - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JC DEV | Josué Carvalho - Desenvolvedor Full Stack",
    description:
      "Portfólio de Josué Carvalho (JC DEV) — Desenvolvedor Full Stack especialista em soluções escaláveis com NestJS, Next.js, React e AWS.",
    images: ["https://jcdev.com.br/profile.png"],
    creator: "@jcdev",
  },
  appleWebApp: {
    title: "JC DEV | Desenvolvedor Full Stack",
    statusBarStyle: "default",
  },
  applicationName: "JC DEV | Portfólio de Josué Carvalho",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jcdev.com.br",
  },
  category: "Portfólio de Desenvolvedor Full Stack",
  abstract:
    "Portfólio oficial de Josué Carvalho (JC DEV) — Desenvolvedor Full Stack com foco em arquitetura limpa, performance e soluções escaláveis usando as melhores tecnologias do mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Josué Carvalho",
              alternateName: "JC DEV",
              url: "https://jcdev.com.br",
              image:
                "https://www.jcdev.com.br/_next/image?url=%2Fprofile.png&w=640&q=75",
              jobTitle: "Desenvolvedor Full Stack",
              sameAs: [
                "https://github.com/Josuerx12",
                "https://www.linkedin.com/in/josueaze12/",
              ],
              worksFor: { "@type": "Organization", name: "FST" },
              description:
                "Desenvolvedor Full Stack especializado em soluções escaláveis com NestJS, Next.js, Node.js e AWS.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
