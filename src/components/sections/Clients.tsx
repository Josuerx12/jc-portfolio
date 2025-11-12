"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
      className="py-20 px-6 md:px-20 bg-linear-to-br from-neutral via-neutral/90 to-background relative overflow-hidden"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl text-secondary font-bold mb-2">
          Clientes Satisfeitos
        </h2>
        <p className="max-w-xl mx-auto">
          Empresas que confiaram em meu trabalho para impulsionar seus
          resultados digitais.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12!"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center gap-4 h-56">
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-32 object-cover rounded-full p-2"
              />

              <h3 className="text-lg font-medium text-foreground text-center">
                {client.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/30 via-transparent to-background/30"></div>
    </section>
  );
};

export default ClientsSection;
