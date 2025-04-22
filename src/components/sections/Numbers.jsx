import React, { useEffect, useState } from "react";
import imgOfficeGreenBackground from "../../assets/importAssets/bg2.jpg";
import ResultsCard from "../cards/ResultsCard";
import AnimatedCounter from "../util/AnimatedCounter";
import { Handshake, Building, Box, Truck } from "lucide-react";

export default function Numbers() {
  const [yearsOfService, setYearsOfService] = useState(0);

  useEffect(() => {
    const startDate = new Date("1995-04-11");
    const currentDate = new Date();
    const differenceInYears =
      currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      setYearsOfService(differenceInYears - 1);
    } else {
      setYearsOfService(differenceInYears);
    }
  }, []);

  return (
    <div
      className="relative flex justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/50" />

      <div className="relative z-10 w-[88%] max-w-[1110px]">
        <div className="py-[26px] phone3:py-[48px]">
          <h1 className="flex flex-col items-center w-full tablet1:flex-row tablet1:justify-between tablet1:flex-wrap desktop1:flex-nowrap">
            <ResultsCard
              icon={
                <Box
                  size={32}
                  strokeWidth={1}
                  aria-label="Ícone de Caixa de itens"
                  className="text-white"
                />
              }
              number={<AnimatedCounter endValue={yearsOfService} />}
              text="Anos no mercado"
            />
            <ResultsCard
              icon={
                <Box
                  size={32}
                  strokeWidth={1}
                  aria-label="Ícone de Caixa de itens"
                  className="text-white"
                />
              }
              number={
                <span className="flex items-center gap-1">
                  <AnimatedCounter endValue={900} /> mil
                </span>
              }
              text="Kilos/litros de produtos movimentados anualmente"
            />

            <ResultsCard
              icon={
                <Box
                  size={32}
                  strokeWidth={1}
                  aria-label="Ícone de Caixa de itens"
                  className="text-white"
                />
              }
              number={
                <span className="flex items-center gap-1">
                  <AnimatedCounter endValue={2100} />
                  m³
                </span>
              }
              text="De capacidade de armazenamento"
            />
            {/* <ResultsCard
              icon={
                <Box
                  size={32}
                  strokeWidth={1}
                  aria-label="Ícone de Caixa de itens"
                  className="text-white"
                />
              }
              number={<AnimatedCounter endValue={0} />}
              text="A definir."
            /> */}
          </h1>
        </div>
      </div>
    </div>
  );
}
