"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const clients = [
  {
    name: "Águas do Paraíba",
    logo: "/clients/aguas-do-paraiba.png",
  },
  {
    name: "Floricultura Formosa",
    logo: "/clients/image.png",
  },
  {
    name: "MX3 Marketing",
    logo: "/clients/mx3-marketing.jpg",
  },
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="relative overflow-hidden py-20 px-6 md:px-20 bg-linear-to-br from-neutral via-neutral/90 to-background"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-secondary font-bold mb-2">
          Clientes Satisfeitos
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Empresas que confiaram em meu trabalho para impulsionar seus
          resultados digitais.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12!"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center gap-4 h-56 "
              >
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  className="w-28 h-28 object-cover rounded-full p-2"
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-lg font-medium text-foreground text-center">
                  {client.name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-background/40 via-transparent to-background/40"></div>
    </section>
  );
};

export default ClientsSection;
