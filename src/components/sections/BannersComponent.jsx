import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../sectionElements/SectionHeader";

// Importe as imagens corretamente
import banner0 from "../../assets/banners/bannersCarousel/banners0.png";
import banner1 from "../../assets/banners/bannersCarousel/banners1.png";
import banner3 from "../../assets/banners/bannersCarousel/banners3.png";
import banner4 from "../../assets/banners/bannersCarousel/banners4.png";
import banner5 from "../../assets/banners/bannersCarousel/banners5.png";

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
    image: banner3,
  },
  {
    id: 4,
    title: "Quarto Banner",
    description: "Descrição do quarto banner",
    image: banner4,
  },
  {
    id: 5,
    title: "Quinto Banner",
    description: "Descrição do quinto banner",
    image: banner5,
  },
];

export default function BannerCarouselComponent() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // muda a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-quinary py-12">
      <div className="w-[90%] max-w-[1110px] m-auto">
        <SectionHeader
          sectionHeaderTitleFirst=" 5 passos simples para cuidar da sua piscina"
          sectionHeaderDescription="Mantenha a água limpa, segura e cristalina com cuidados práticos no dia a dia."
        />
        <div className="relative w-[90%] max-w-screen-xl mx-auto overflow-hidden rounded-2xl shadow-lg h-64 md:h-[550px]">
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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4"></div>
            </div>
          ))}

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="relative top-1/2 left-4 transform -translate-y-1/2 bg-primary bg-opacity-100 text-white p-2 rounded-full hover:bg-opacity-70 z-10"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary bg-opacity-100 text-white p-2 rounded-full hover:bg-opacity-70 z-10"
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
