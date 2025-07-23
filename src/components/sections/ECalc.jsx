import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import SectionArticle from "../sectionElements/SectionArticle";
import SquareCalculator from "../interactives/SquareCalculator";
import RoundCalculator from "../interactives/RoundCalculator";
import ChatBot from "../interactives/ChatComponent";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Ecalc() {
  return (
    <div className="flex justify-center full bg-quinary" id="products">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Calcule Fácil Grosf"
          sectionHeaderDescription="Calcule você mesmo o volume da água da sua piscina, e baseado no resultado descubra a quantidade de produtos a ser adicionada na água, utilizando nossa tabela de cálculos."
        />
        <SectionContent>
          {/* <div className="flex flex-col justify-between w-full gap-8 desktop1:flex-row">
            <div>
              <p className="text-justify text-black/60">
                Piscinas Quadrada ou Retangulares: <br /> Comprimento x Largura
                x Profundidade = Volume em 1000L
              </p>
              <SquareCalculator />
            </div>
            <div>
              <p className="text-justify text-black/60">
                Piscina Circular ou Oval: <br /> Diâmetro x Diâmetro x
                Profundidade x 0,785 = Volume em 1000L
              </p>
              <RoundCalculator />
            </div>
          </div> */}
          <MotionDivDownToUp className="w-full">
            <ChatBot />
          </MotionDivDownToUp>
        </SectionContent>
      </div>
    </div>
  );
}
