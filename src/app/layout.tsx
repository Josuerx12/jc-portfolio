import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JC DEV - Desenvolvedor Full Stack",
  keywords: [
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "JCDEV",
    "Josué Carvalho",
    "Portfólio de Desenvolvedor",
    "Soluções Web",
    "Aplicações Escaláveis",
    "Desenvolvimento de Software",
    "Tecnologia da Informação",
    "Inovação Digital",
    "Performance Web",
    "Design de Interfaces",
    "Experiência do Usuário",
    "Programação Web",
    "Desenvolvedor de Aplicações",
    "Soluções Tecnológicas",
    "Desenvolvimento Ágil",
    "Transformação Digital",
    "IA",
    "Separa+",
    "JCWPP",
    "Floricultura Formosa",
    "FloriculturaFormosa",
  ],
  bookmarks: ["https://jcdev.com.br"],
  authors: [
    {
      name: "Josué Carvalho",
      url: "https://jcdev.com.br",
    },
  ],
  metadataBase: new URL("https://jcdev.com.br"),
  openGraph: {
    title: "JC DEV - Desenvolvedor Full Stack",
    description:
      "Site portfolio de Josué Carvalho (JCDEV) - Desenvolvedor Full Stack",
    url: "https://jcdev.com.br",
    siteName: "JC DEV - Desenvolvedor Full Stack",
    images: [
      {
        url: "https://jcdev.com.br/profile.png",
        width: 1200,
        height: 630,
        alt: "JC DEV - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JC DEV - Desenvolvedor Full Stack",
    description:
      "Site portfolio de Josué Carvalho (JCDEV) - Desenvolvedor Full Stack",
    images: ["https://jcdev.com.br/profile.png"],
  },
  publisher: "Josué Carvalho",
  abstract:
    "Site portfolio de Josué Carvalho (JCDEV) - Desenvolvedor Full Stack",
  appleWebApp: {
    title: "JC DEV - Desenvolvedor Full Stack",
    statusBarStyle: "default",
  },
  applicationName: "JC DEV - Desenvolvedor Full Stack",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  creator: "Josué Carvalho",
  robots: {
    index: true,
    follow: true,
  },

  description:
    "Site portfolio de Josué Carvalho (JCDEV) - Desenvolvedor Full Stack",
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
              jobTitle: "Desenvolvedor Full Stack",
              url: "https://jcdev.com.br",
              sameAs: [
                "https://github.com/Josuerx12",
                "https://www.linkedin.com/in/josueaze12/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
