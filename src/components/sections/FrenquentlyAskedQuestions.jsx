import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import SectionHeader from "../sectionElements/SectionHeader";
import Acordion from "../interactives/Acordion";
import faqImg from "../../assets/imgs/faq/faq.jpg";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="flex justify-center full bg-quinary" id="faq">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Perguntas Frequentes"
          sectionHeaderDescription="Aqui você encontra respostas para as perguntas mais  frequentes, caso ainda continue com alguma dúvida, entre em contato com um dos nossos atendentes."
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
