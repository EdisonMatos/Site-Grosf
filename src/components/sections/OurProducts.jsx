import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ImgAndButtonsCard from "../cards/ImgAndButtonsCard";
import hthLogo from "../../assets/imgs/brands/hthLogo.jpg";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.jpg";
import domclorLogo from "../../assets/imgs/brands/domclorLogo.jpg";
import hidroazulLogo from "../../assets/imgs/brands/hidroazulLogo.jpg";
import neoclorLogo from "../../assets/imgs/brands/neoclorLogo.jpg";
import netunoLogo from "../../assets/imgs/brands/netunoLogo.jpg";
import sodramarLogo from "../../assets/imgs/brands/sodramarLogo.jpg";
import suallLogo from "../../assets/imgs/brands/suallLogo.jpg";

export default function OurProducts() {
  return (
    <div className="flex justify-center full bg-quinary" id="products">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="A definir."
          sectionHeaderDescription="A definir."
        />
        <SectionContent>
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Consultar Produtos"
            button1Link="/hth"
            alt="Logo da marca Hth"
          />
          <ImgAndButtonsCard
            img={gencoLogo}
            button1Label="Consultar Produtos"
            button1Link="/genco"
            alt="Logo da marca Genco"
          />
          <ImgAndButtonsCard
            img={neoclorLogo}
            button1Label="Consultar Produtos"
            button1Link="/neoclor"
            alt="Logo da marca Neoclor"
          />
          <ImgAndButtonsCard
            img={hidroazulLogo}
            button1Label="Consultar Produtos"
            button1Link="/hidroazul"
            alt="Logo da marca Hidroazul"
          />
          <ImgAndButtonsCard
            img={domclorLogo}
            button1Label="Consultar Produtos"
            button1Link="/domclor"
            alt="Logo da marca Domclor"
          />
          <ImgAndButtonsCard
            img={suallLogo}
            button1Label="Consultar Produtos"
            button1Link="/suall"
            alt="Logo da marca Suall"
          />
          <ImgAndButtonsCard
            img={sodramarLogo}
            button1Label="Consultar Produtos"
            button1Link="/sodramar"
            alt="Logo da marca Sodramar"
          />
          <ImgAndButtonsCard
            img={netunoLogo}
            button1Label="Consultar Produtos"
            button1Link="/netuno"
            alt="Logo da marca Netuno"
          />
        </SectionContent>
      </div>
    </div>
  );
}
