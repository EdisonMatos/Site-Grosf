import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.jpg";
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
          sectionHeaderTitleSecond="A definir."
          sectionHeaderDescription="A definir."
        />

        <div>
          <ArticleComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1:items-start desktop1:justify-between desktop1:gap-[0%]">
              <div className=" desktop1:w-[60%] desktop3:w-[55%]">
                <MotionDivLeftToRight>
                  <SectionArticle
                    articleSubtitle="A definir."
                    articleTitle="A definir."
                    articleParagraphOne="A definir."
                    articleParagraphTwo="A definir."
                    articleParagraphThree="A definir."
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
