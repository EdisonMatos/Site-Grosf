import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import SectionHeader from "../sectionElements/SectionHeader";
import Acordion from "../interactives/Acordion";
import faqImg from "../../assets/imgs/faq/faq.webp";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="flex justify-center full bg-quinary" id="faq">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Perguntas Frequentes"
          sectionHeaderDescription="Ficou com alguma dúvida? Clique na pergunta abaixo e obtenha a resposta. 
        Caso não tenha encontrado a resposta que precisa, entre em contato conosco."
        />
        <div className="flex items-center">
          <div className=" w-full desktop1:w-[100%] desktop2:w-[100%]">
            <Acordion />
          </div>
          <div className="hidden desktop1:w-[70%] desktop1:flex desktop1:items-center">
            <MotionDivRightToLeft>
              <img
                src={faqImg}
                alt="Boneco com ponto de interrogação com dúvida"
                className="desktop1:w-[100%]"
              ></img>
            </MotionDivRightToLeft>
          </div>
        </div>
      </div>
    </div>
  );
}
