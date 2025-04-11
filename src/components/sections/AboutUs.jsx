import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3.jpg";
import slide4 from "../../assets/banners/aboutUs/slide4.jpg";
import slide5 from "../../assets/banners/aboutUs/slide5.jpg";
import slide6 from "../../assets/banners/aboutUs/slide6.jpg";
import slide7 from "../../assets/banners/aboutUs/slide7.jpg";
import slide8 from "../../assets/banners/aboutUs/slide8.jpg";
import slide9 from "../../assets/banners/aboutUs/slide9.jpg";


import ArticleComponent from "../sectionElements/ArticleComponent";
import SectionArticle from "../sectionElements/SectionArticle";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import React, { useState } from "react";
import AboutModal from "../sectionElements/about/AboutModal";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import AboutFading from "../sectionElements/about/AboutFading";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function AboutUs({ modal }) {
  return (
    <div className="flex justify-center full">
      <div
        className="font-mainFont py-[26px] phone3:py-[48px] w-[88%] max-w-[1110px]"
        id="about"
      >
        <SectionHeader
          sectionHeaderTitleSecond="Sobre nós"
          sectionHeaderDescription=""
        />

        <div>
          <ArticleComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1:items-start desktop1:justify-between desktop1:gap-[0%]">
              <div className=" desktop1:w-[60%] desktop3:w-[55%]">
                <MotionDivLeftToRight>
                  <SectionArticle
                    articleSubtitle="A definir."
                    articleTitle="NOSSA HISTÓRIA!"
                    articleParagraphOne="No dia 6 de janeiro do ano de 1979, por volta de 6h da manhã, desembarcava na rodoviária Júlio Prestes no centro da capital paulista trazido por uma tia, um jovem migrante paranaense com apenas 17 anos de idade…"
                  />
                  <MotionDivDownToUp>
                    {modal ? <ParagraphWithFading /> : <ParagraphSemFading />}
                    {modal && <AboutModal />}
                  </MotionDivDownToUp>
                </MotionDivLeftToRight>
              </div>

              <div className="desktop1:w-[40%] desktop1:pt-[15px]">
                <MotionDivRightToLeft>
                  <ImagesGallery3Slides
                    slide1={slide1}
                    slide2={slide2}
                    slide3={slide3}
                    slide4={slide4}
                    slide5={slide5}
                    slide6={slide6}
                    slide7={slide7}
                    slide8={slide8}
                    slide9={slide9}
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
