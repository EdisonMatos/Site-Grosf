import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import DomclorProducts from "../util/productsData/domclor/DomClorProducts";

export default function DomclorProductsList() {
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
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-start w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "cloros" || selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={DomclorProducts.cloros.domclorCloros1.img}
                  code={DomclorProducts.cloros.domclorCloros1.code}
                  description={
                    DomclorProducts.cloros.domclorCloros1.description
                  }
                  alt={DomclorProducts.cloros.domclorCloros1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={DomclorProducts.cloros.domclorCloros1.fispqLink}
                  category={DomclorProducts.cloros.domclorCloros1.category}
                />
                <ImgCodeDescButtonCard
                  img={DomclorProducts.cloros.domclorCloros2.img}
                  code={DomclorProducts.cloros.domclorCloros2.code}
                  description={
                    DomclorProducts.cloros.domclorCloros2.description
                  }
                  alt={DomclorProducts.cloros.domclorCloros2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={DomclorProducts.cloros.domclorCloros2.fispqLink}
                  category={DomclorProducts.cloros.domclorCloros2.category}
                />
                <ImgCodeDescButtonCard
                  img={DomclorProducts.cloros.domclorCloros3.img}
                  code={DomclorProducts.cloros.domclorCloros3.code}
                  description={
                    DomclorProducts.cloros.domclorCloros3.description
                  }
                  alt={DomclorProducts.cloros.domclorCloros3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={DomclorProducts.cloros.domclorCloros3.fispqLink}
                  category={DomclorProducts.cloros.domclorCloros3.category}
                />
                <ImgCodeDescButtonCard
                  img={DomclorProducts.cloros.domclorCloros4.img}
                  code={DomclorProducts.cloros.domclorCloros4.code}
                  description={
                    DomclorProducts.cloros.domclorCloros4.description
                  }
                  alt={DomclorProducts.cloros.domclorCloros4.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={DomclorProducts.cloros.domclorCloros4.fispqLink}
                  category={DomclorProducts.cloros.domclorCloros4.category}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
