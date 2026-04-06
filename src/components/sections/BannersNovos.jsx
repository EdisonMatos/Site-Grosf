import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../sectionElements/SectionHeader";

// Importe as imagens corretamente
import banner0 from "../../assets/banners/bannersNovos/bannerDesktop1.webp";
import banner1 from "../../assets/banners/bannersNovos/bannerDesktop2.webp";
import banner2 from "../../assets/banners/bannersNovos/bannerDesktop3.webp";

import banner0Mobile from "../../assets/banners/bannersNovos/bannerMobile1.webp";
import banner1Mobile from "../../assets/banners/bannersNovos/bannerMobile2.webp";
import banner2Mobile from "../../assets/banners/bannersNovos/bannerMobile3.webp";

// Array de banners
const banners = [
  {
    id: 1,
    title: "Primeiro Banner",
    description: "Descrição do primeiro banner",
    image: banner0,
  },
  {
    id: 2,
    title: "Segundo Banner",
    description: "Descrição do segundo banner",
    image: banner1,
  },
  {
    id: 3,
    title: "Terceiro Banner",
    description: "Descrição do terceiro banner",
    image: banner2,
  },
];

const bannersMobile = [
  {
    id: 1,
    title: "Primeiro Banner",
    description: "Descrição do primeiro banner",
    image: banner0Mobile,
  },
  {
    id: 2,
    title: "Segundo Banner",
    description: "Descrição do segundo banner",
    image: banner1Mobile,
  },
  {
    id: 3,
    title: "Terceiro Banner",
    description: "Descrição do terceiro banner",
    image: banner2Mobile,
  },
];

export default function BannersNovos() {
  const [current, setCurrent] = useState(0);

  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 8000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    startInterval();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    startInterval();
  };

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="w-full bg-white py-12">
      <div className="w-[90%] max-w-[1110px] m-auto">
        {/* <SectionHeader
          sectionHeaderTitleFirst="Como tratar a sua piscina em 5 passos"
          sectionHeaderDescription="Veja 5 passos simples, mas importantes para o tratamento adequado da sua piscina."
        /> */}

        {/* Mobile */}
        <div className="relative desktop1:hidden w-[90%] max-w-screen-xl mx-auto overflow-hidden aspect-[11/16.5] rounded-2xl shadow-lg h-auto">
          {bannersMobile.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          ))}

          {/* Botões de navegação */}
          <button
            aria-label="Botão para passar banner"
            onClick={prevSlide}
            className="absolute bottom-0 left-4 transform -translate-y-1/2 bg-white bg-opacity-100 text-secondary p-0 rounded-full hover:bg-opacity-70 z-10"
          >
            <ChevronLeft />
          </button>

          <button
            aria-label="Botão para passar banner"
            onClick={nextSlide}
            className="absolute bottom-0 right-4 transform -translate-y-1/2 bg-white bg-opacity-100 text-secondary p-0 rounded-full hover:bg-opacity-70 z-10"
          >
            <ChevronRight />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary scale-110" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden desktop1:flex w-[90%] max-w-screen-xl mx-auto overflow-hidden rounded-2xl shadow-lg h-auto aspect-[15/10]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full"
              />
            </div>
          ))}

          {/* Botões de navegação */}
          <button
            aria-label="Botão para passar banner"
            onClick={prevSlide}
            className="relative top-3/4 left-4 h-fit transform -translate-y-1/2 bg-white bg-opacity-100 text-primary p-2 rounded-full hover:bg-opacity-70 z-10"
          >
            <ChevronLeft />
          </button>

          <button
            aria-label="Botão para passar banner"
            onClick={nextSlide}
            className="absolute top-3/4 right-4 transform -translate-y-1/2 bg-white bg-opacity-100 text-primary p-2 rounded-full hover:bg-opacity-70 z-10"
          >
            <ChevronRight />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary scale-110" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
