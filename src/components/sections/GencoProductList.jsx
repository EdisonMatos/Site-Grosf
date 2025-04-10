import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import GencoProducts from "../util/productsData/genco/GencoProducts";

export default function GencoProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-quinary">
      <div className="w-[88%] max-w-[1110px] mx-auto py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between tablet2:flex-col desktop1:flex-row font-mainFont">
          <div className="w-full desktop1:w-[21%]">
            <h3 className="mb-[10px] w-full text-center bg-white rounded-[10px] p-[15px] tablet2:mb-[10px] font-semibold text-paragraph5 desktop1:text-paragraph4 text-secondary desktop1:w-auto">
              Filtrar por categoria
            </h3>
            <div className="bg-white w-full desktop1:flex-col mb-[32px] flex flex-col phone3:justify-evenly phone3:flex-row p-[20px] phone3:p-4 rounded-[10px]">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === "all"}
                    onChange={() => handleCheckboxChange("all")}
                  />
                }
                label={<span className="font-mainFont">Todos</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === "cloros"}
                    onChange={() => handleCheckboxChange("cloros")}
                  />
                }
                label={<span className="font-mainFont">Cloros</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === "auxiliares"}
                    onChange={() => handleCheckboxChange("auxiliares")}
                  />
                }
                label={<span className="font-mainFont">Auxiliares</span>}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-start w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "cloros" || selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros1.img}
                  code={GencoProducts.cloros.gencoCloros1.code}
                  description={GencoProducts.cloros.gencoCloros1.description}
                  alt={GencoProducts.cloros.gencoCloros1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros1.fispqLink}
                  category={GencoProducts.cloros.gencoCloros1.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros2.img}
                  code={GencoProducts.cloros.gencoCloros2.code}
                  description={GencoProducts.cloros.gencoCloros2.description}
                  alt={GencoProducts.cloros.gencoCloros2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros2.fispqLink}
                  category={GencoProducts.cloros.gencoCloros2.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros3.img}
                  code={GencoProducts.cloros.gencoCloros3.code}
                  description={GencoProducts.cloros.gencoCloros3.description}
                  alt={GencoProducts.cloros.gencoCloros3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros3.fispqLink}
                  category={GencoProducts.cloros.gencoCloros3.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros4.img}
                  code={GencoProducts.cloros.gencoCloros4.code}
                  description={GencoProducts.cloros.gencoCloros4.description}
                  alt={GencoProducts.cloros.gencoCloros4.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros4.fispqLink}
                  category={GencoProducts.cloros.gencoCloros4.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros5.img}
                  code={GencoProducts.cloros.gencoCloros5.code}
                  description={GencoProducts.cloros.gencoCloros5.description}
                  alt={GencoProducts.cloros.gencoCloros5.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros5.fispqLink}
                  category={GencoProducts.cloros.gencoCloros5.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros6.img}
                  code={GencoProducts.cloros.gencoCloros6.code}
                  description={GencoProducts.cloros.gencoCloros6.description}
                  alt={GencoProducts.cloros.gencoCloros6.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros6.fispqLink}
                  category={GencoProducts.cloros.gencoCloros6.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros7.img}
                  code={GencoProducts.cloros.gencoCloros7.code}
                  description={GencoProducts.cloros.gencoCloros7.description}
                  alt={GencoProducts.cloros.gencoCloros7.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros7.fispqLink}
                  category={GencoProducts.cloros.gencoCloros7.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros8.img}
                  code={GencoProducts.cloros.gencoCloros8.code}
                  description={GencoProducts.cloros.gencoCloros8.description}
                  alt={GencoProducts.cloros.gencoCloros8.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros8.fispqLink}
                  category={GencoProducts.cloros.gencoCloros8.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros9.img}
                  code={GencoProducts.cloros.gencoCloros9.code}
                  description={GencoProducts.cloros.gencoCloros9.description}
                  alt={GencoProducts.cloros.gencoCloros9.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros9.fispqLink}
                  category={GencoProducts.cloros.gencoCloros9.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros10.img}
                  code={GencoProducts.cloros.gencoCloros10.code}
                  description={GencoProducts.cloros.gencoCloros10.description}
                  alt={GencoProducts.cloros.gencoCloros10.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros10.fispqLink}
                  category={GencoProducts.cloros.gencoCloros10.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros11.img}
                  code={GencoProducts.cloros.gencoCloros11.code}
                  description={GencoProducts.cloros.gencoCloros11.description}
                  alt={GencoProducts.cloros.gencoCloros11.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros11.fispqLink}
                  category={GencoProducts.cloros.gencoCloros11.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.cloros.gencoCloros12.img}
                  code={GencoProducts.cloros.gencoCloros12.code}
                  description={GencoProducts.cloros.gencoCloros12.description}
                  alt={GencoProducts.cloros.gencoCloros12.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={GencoProducts.cloros.gencoCloros12.fispqLink}
                  category={GencoProducts.cloros.gencoCloros12.category}
                />
              </>
            )}
            {(selectedCategory === "auxiliares" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares1.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares1.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares1.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares1.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares1.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares2.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares2.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares2.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares2.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares2.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares3.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares3.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares3.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares3.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares3.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares4.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares4.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares4.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares4.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares4.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares4.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares5.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares5.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares5.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares5.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares5.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares5.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares6.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares6.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares6.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares6.description}
                  button1Label="FISPQ Indisponível"
                  category={GencoProducts.auxiliares.gencoAuxiliares6.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares7.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares7.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares7.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares7.description}
                  button1Label="FISPQ Indisponível"
                  category={GencoProducts.auxiliares.gencoAuxiliares7.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares8.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares8.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares8.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares8.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares8.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares8.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares9.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares9.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares9.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares9.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares9.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares9.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares10.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares10.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares10.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares10.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares10.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares10.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares11.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares11.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares11.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares11.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares11.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares11.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares12.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares12.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares12.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares12.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares12.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares12.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares13.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares13.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares13.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares13.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares13.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares13.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares14.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares14.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares14.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares14.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares14.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares14.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares15.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares15.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares15.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares15.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares15.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares15.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares16.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares16.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares16.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares16.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares16.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares16.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares17.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares17.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares17.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares17.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares17.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares17.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares18.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares18.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares18.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares18.description}
                  button1Label="FISPQ Indisponível"
                  category={GencoProducts.auxiliares.gencoAuxiliares18.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares19.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares19.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares19.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares19.description}
                  button1Label="FISPQ Indisponível"
                  category={GencoProducts.auxiliares.gencoAuxiliares19.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares20.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares20.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares20.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares20.description}
                  button1Label="FISPQ Indisponível"
                  category={GencoProducts.auxiliares.gencoAuxiliares20.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares21.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares21.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares21.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares21.description}
                  button1Label="FISPQ Indisponível"
                  category={GencoProducts.auxiliares.gencoAuxiliares21.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares22.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares22.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares22.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares22.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares22.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares22.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares23.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares23.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares23.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares23.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares23.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares23.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares24.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares24.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares24.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares24.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares24.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares24.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares25.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares25.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares25.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares25.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares25.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares25.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares26.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares26.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares26.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares26.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares26.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares26.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares27.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares27.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares27.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares27.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares27.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares27.category}
                />
                <ImgCodeDescButtonCard
                  img={GencoProducts.auxiliares.gencoAuxiliares28.img}
                  code={GencoProducts.auxiliares.gencoAuxiliares28.code}
                  description={
                    GencoProducts.auxiliares.gencoAuxiliares28.description
                  }
                  alt={GencoProducts.auxiliares.gencoAuxiliares28.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    GencoProducts.auxiliares.gencoAuxiliares28.fispqLink
                  }
                  category={GencoProducts.auxiliares.gencoAuxiliares28.category}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
