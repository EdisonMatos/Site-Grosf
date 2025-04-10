import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.webp";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.webp";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.webp";
import ArticleComponent from "../sectionElements/ArticleComponent";
import SectionArticle from "../sectionElements/SectionArticle";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function AboutUs() {
  return (
    <div className="flex justify-center full">
      <div
        className="font-mainFont py-[26px] phone3:py-[48px] w-[88%] max-w-[1110px]"
        id="about"
      >
        <SectionHeader
          sectionHeaderTitleSecond="Sobre nós"
          sectionHeaderDescription="A MPA destaca-se no mercado pela excelência no atendimento personalizado e sua vasta experiência em piscinas com grandes volumes de água."
        />

        <div>
          <ArticleComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1:items-start desktop1:justify-between desktop1:gap-[0%]">
              <div className=" desktop1:w-[60%] desktop3:w-[55%]">
                <MotionDivLeftToRight>
                  <SectionArticle
                    articleSubtitle="Nossa História"
                    articleTitle="Experiência em piscinas olímpicas e semiolímpicas."
                    articleParagraphOne="A MPA é uma empresa familiar criada especialmente para oferecer um atendimento exclusivo e personalizado aos proprietários de piscinas com grandes volumes de água, como piscinas olímpicas e semiolímpicas, entre outras."
                    articleParagraphTwo="Sua criação remonta ao ano de 2003, mas seus idealizadores têm ligação com esse segmento há pelo menos 45 anos, contando assim com vasta experiência no atendimento diferenciado que esse tipo de negócio exige."
                    articleParagraphThree="A missão da empresa é se aprimorar a cada dia, subir degrau por degrau, avançar sempre no sentido de cumprir objetivos, entregar ao cliente exatamente o que foi negociado com ele na sua plenitude e, ao final de tudo, ter a certeza de ter proporcionado a ele uma boa experiência de compra. E para que tudo isso aconteça, a empresa tem a clara convicção de que precisa contar sempre com você, cliente! Junte-se à MPA Piscinas!"
                  />
                </MotionDivLeftToRight>
              </div>

              <div className="desktop1:w-[40%] desktop1:pt-[15px]">
                <MotionDivRightToLeft>
                  <ImagesGallery3Slides
                    slide1={slide1}
                    slide2={slide2}
                    slide3={slide3}
                  />
                </MotionDivRightToLeft>
              </div>
            </div>
          </ArticleComponent>
        </div>
      </div>
    </div>
  );
}
