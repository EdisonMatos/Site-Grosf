import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import SectionArticle from "../sectionElements/SectionArticle";
import SquareCalculator from "../interactives/SquareCalculator";
import RoundCalculator from "../interactives/RoundCalculator";

export default function Ecalc() {
  return (
    <div className="flex justify-center full bg-quinary" id="products">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="e-Calculadora"
          sectionHeaderDescription="Calcule você mesmo o volume da água da sua piscina e a quantidade de produtos a ser adicionada na água."
        />
        <SectionContent>
          <div className="flex justify-between w-full">
            <div>
              <p className="text-center text-black/60">
                Para piscinas retangulares: <br /> Comprimento x Largura x
                Profundidade = Volume em 1000L
              </p>
              <SquareCalculator />
            </div>
            <div>
              <p className="text-center text-black/60">
                Para piscinas redondas: <br /> Diâmetro x Diâmetro x
                Profundidade = Volume em 1000L
              </p>
              <RoundCalculator />
            </div>
          </div>
        </SectionContent>
      </div>
    </div>
  );
}
