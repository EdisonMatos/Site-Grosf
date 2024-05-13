import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import HidroazulProducts from "../util/productsData/hidroazul/HidroazulProducts";

export default function HidroazulProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-quinary">
      <div className="mx-auto w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px] flex flex-row">
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
                  img={HidroazulProducts.cloros.hidroazulCloros1.img}
                  code={HidroazulProducts.cloros.hidroazulCloros1.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros1.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros1.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros1.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros1.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros2.img}
                  code={HidroazulProducts.cloros.hidroazulCloros2.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros2.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros2.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros2.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros2.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros3.img}
                  code={HidroazulProducts.cloros.hidroazulCloros3.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros3.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros3.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros3.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros3.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros4.img}
                  code={HidroazulProducts.cloros.hidroazulCloros4.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros4.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros4.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros4.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros4.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros5.img}
                  code={HidroazulProducts.cloros.hidroazulCloros5.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros5.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros5.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros5.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros5.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros6.img}
                  code={HidroazulProducts.cloros.hidroazulCloros6.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros6.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros6.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros6.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros6.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros7.img}
                  code={HidroazulProducts.cloros.hidroazulCloros7.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros7.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros7.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros7.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros7.category}
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.cloros.hidroazulCloros8.img}
                  code={HidroazulProducts.cloros.hidroazulCloros8.code}
                  description={
                    HidroazulProducts.cloros.hidroazulCloros8.description
                  }
                  alt={
                    HidroazulProducts.cloros.hidroazulCloros8.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.cloros.hidroazulCloros8.fispqLink
                  }
                  category={HidroazulProducts.cloros.hidroazulCloros8.category}
                />
              </>
            )}
            {(selectedCategory === "auxiliares" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares1.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares1.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares1
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares1
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares1.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares1.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares2.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares2.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares2
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares2
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares2.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares2.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares3.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares3.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares3
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares3
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares3.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares3.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares4.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares4.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares4
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares4
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares4.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares4.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares5.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares5.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares5
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares5
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares5.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares5.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares6.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares6.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares6
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares6
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares6.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares6.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares7.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares7.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares7
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares7
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares7.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares7.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares8.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares8.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares8
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares8
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares8.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares8.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares9.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares9.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares9
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares9
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares9.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares9.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={HidroazulProducts.auxiliares.hidroazulAuxiliares10.img}
                  code={HidroazulProducts.auxiliares.hidroazulAuxiliares10.code}
                  description={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares10
                      .description
                  }
                  alt={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares10
                      .description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares10.fispqLink
                  }
                  category={
                    HidroazulProducts.auxiliares.hidroazulAuxiliares10.category
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
