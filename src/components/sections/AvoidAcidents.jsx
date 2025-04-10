import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import resgateAcidente from "../../assets/imgs/avoidAccidents/resgateAcidente.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";

export default function AboutUs() {
  return (
    <div className="flex justify-center full">
      <div className="font-mainFont w-[88%] max-w-[1110px] pb-[8px] pt-[26px] phone3:pt-[48px] tablet1:pb-0">
        <SectionHeader
          sectionHeaderTitleSecond="Zerar-Site"
          sectionHeaderDescription="Zerar-Site"
        />
        <div className=" desktop1:flex desktop1:flex-row-reverse desktop1:justify-between desktop1:pb-[54px] desktop3:pb-[48px]">
          <div className=" pb-[28px] desktop1:w-[48%] desktop1:py-0 desktop3:w-[46.3%]">
            <MotionDivRightToLeft>
              <img
                className=" flex phone1:w-[100%] phone1:h-[100%]"
                src={imgPastilhaCloro}
                alt="Mão segurando pastilha de cloro para limpeza de piscina"
              />
            </MotionDivRightToLeft>
          </div>
          <div className="desktop1:w-[48.5%] desktop3:w-[46.3%]">
            <MotionDivLeftToRight>
              <h1 className="  text-primary flex items-center phone1:w-[100%] phone1:font-medium phone1:text-title2 phone3:text-title2 phone1:pb-[10px] tablet1:text-title2 desktop1:text-title4">
                Zerar-Site
              </h1>
              <div className=" text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%]">
                <p>
                  Zerar-Site <br />
                  <br />
                  Zerar-Site <br />
                  <br />
                  Zerar-Site
                </p>
              </div>
            </MotionDivLeftToRight>
          </div>
        </div>
        <div className="desktop1:flex desktop1:flex-row desktop1:justify-between ">
          <div className=" py-[28px] desktop1:w-[48%] desktop1:py-0 desktop3:w-[46.3%]">
            <MotionDivLeftToRight>
              <img
                className=" flex phone1:w-[100%] phone1:h-[100%]"
                src={resgateAcidente}
                alt="Atendimento submerso após não efetuar a limpeza adequada da piscina"
              />
            </MotionDivLeftToRight>
          </div>
          <div className=" desktop1:w-[47.5%] desktop3:w-[46.3%]">
            <div className=" text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%]">
              <MotionDivRightToLeft>
                <p>
                  Zerar-Site <br />
                  <br />
                  Zerar-Site <br />
                  <br />
                  Zerar-Site <br />
                  <br />
                  Zerar-Site
                </p>
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
