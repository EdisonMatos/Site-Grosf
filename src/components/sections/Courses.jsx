import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import hthLogo from "../../assets/imgs/brands/hthLogo.webp";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.webp";
import hidroazulLogo from "../../assets/imgs/brands/hidroazulLogo.webp";
import ImgTextAndButtonsCard from "../cards/ImgTextAndButtonsCard";

export default function Courses() {
  return (
    <div className="flex justify-center full bg-quinary" id="courses">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Aprimore seu conhecimento"
          sectionHeaderDescription="Confira abaixo nossas sugestões para palestras ou cursos para tratamento da sua piscina. Escolha o que mais lhe interessar, e boas aulas!"
        />
        <SectionContent>
          <ImgTextAndButtonsCard
            img={hthLogo}
            text="Curso presencial de tratamento de águas de piscinas."
            button1Label="Faça sua inscrição"
            button1Link="https://hth.com.br/cursos-presenciais
            "
            alt="Logo da marca Hth"
          />
          <ImgTextAndButtonsCard
            img={gencoLogo}
            text="Curso online na Escola da Piscina."
            button1Label="Faça sua inscrição"
            button1Link="https://www.genco.com.br/escola-da-piscina/"
            alt="Logo da marca Genco"
          />
          <ImgTextAndButtonsCard
            img={hidroazulLogo}
            text="Curso completo na Universidade da Piscina."
            button1Label="Faça sua inscrição"
            button1Link="https://hidroazul.com.br/universidade-da-piscina/"
            alt="Logo da marca Hidroazul"
          />
        </SectionContent>
      </div>
    </div>
  );
}
