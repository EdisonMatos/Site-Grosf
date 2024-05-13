import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import SuallProducts from "../util/productsData/suall/SuallProducts";

export default function SuallProductsList() {
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
                    checked={selectedCategory === "auxiliares"}
                    onChange={() => handleCheckboxChange("auxiliares")}
                  />
                }
                label={<span className="font-mainFont">Auxiliares</span>}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-start w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "auxiliares" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={SuallProducts.auxiliares.suallAuxiliares1.img}
                  code={SuallProducts.auxiliares.suallAuxiliares1.code}
                  description={
                    SuallProducts.auxiliares.suallAuxiliares1.description
                  }
                  alt={
                    SuallProducts.auxiliares.suallAuxiliares1.description
                  }
                  button1Label="FISPQ Indisponível"
                  category={SuallProducts.auxiliares.suallAuxiliares2.category}
                />
                <ImgCodeDescButtonCard
                  img={SuallProducts.auxiliares.suallAuxiliares2.img}
                  code={SuallProducts.auxiliares.suallAuxiliares2.code}
                  description={
                    SuallProducts.auxiliares.suallAuxiliares2.description
                  }
                  alt={
                    SuallProducts.auxiliares.suallAuxiliares2.description
                  }
                  button1Label="FISPQ Indisponível"
                  category={SuallProducts.auxiliares.suallAuxiliares2.category}
                />
                <ImgCodeDescButtonCard
                  img={SuallProducts.auxiliares.suallAuxiliares3.img}
                  code={SuallProducts.auxiliares.suallAuxiliares3.code}
                  description={
                    SuallProducts.auxiliares.suallAuxiliares3.description
                  }
                  alt={
                    SuallProducts.auxiliares.suallAuxiliares3.description
                  }
                  button1Label="FISPQ Indisponível"
                  category={SuallProducts.auxiliares.suallAuxiliares3.category}
                />
                <ImgCodeDescButtonCard
                  img={SuallProducts.auxiliares.suallAuxiliares4.img}
                  code={SuallProducts.auxiliares.suallAuxiliares4.code}
                  description={
                    SuallProducts.auxiliares.suallAuxiliares4.description
                  }
                  alt={
                    SuallProducts.auxiliares.suallAuxiliares4.description
                  }
                  button1Label="FISPQ Indisponível"
                  category={SuallProducts.auxiliares.suallAuxiliares4.category}
                />
                <ImgCodeDescButtonCard
                  img={SuallProducts.auxiliares.suallAuxiliares5.img}
                  code={SuallProducts.auxiliares.suallAuxiliares5.code}
                  description={
                    SuallProducts.auxiliares.suallAuxiliares5.description
                  }
                  alt={
                    SuallProducts.auxiliares.suallAuxiliares5.description
                  }
                  button1Label="FISPQ Indisponível"
                  category={SuallProducts.auxiliares.suallAuxiliares5.category}
                />
                <ImgCodeDescButtonCard
                  img={SuallProducts.auxiliares.suallAuxiliares6.img}
                  code={SuallProducts.auxiliares.suallAuxiliares6.code}
                  description={
                    SuallProducts.auxiliares.suallAuxiliares6.description
                  }
                  alt={
                    SuallProducts.auxiliares.suallAuxiliares6.description
                  }
                  button1Label="FISPQ Indisponível"
                  category={SuallProducts.auxiliares.suallAuxiliares6.category}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
