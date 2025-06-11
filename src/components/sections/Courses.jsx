import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import hthLogo from "../../assets/imgs/brands/hthLogo.jpg";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.jpg";
import ImgTextAndButtonsCard from "../cards/ImgTextAndButtonsCard";

export default function Courses() {
  return (
    <div className="flex justify-center full bg-quinary" id="courses">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="A definir."
          sectionHeaderDescription="A definir."
        />
        <SectionContent>
          <ImgTextAndButtonsCard
            img={hthLogo}
            text="A definir."
            button1Label="A definir."
            // button1Link="https://hth.com.br/cursos-presenciais
            // "
            alt="Logo da marca Hth"
          />
          <ImgTextAndButtonsCard
            img={gencoLogo}
            text="A definir."
            button1Label="A definir."
            // button1Link="https://www.genco.com.br/escola-da-piscina/"
            alt="Logo da marca Genco"
          />
        </SectionContent>
      </div>
    </div>
  );
}
