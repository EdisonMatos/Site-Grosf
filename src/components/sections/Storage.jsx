import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/imgs/armazem/slide1.webp";
import slide2 from "../../assets/imgs/armazem/slide2.webp";
import slide3 from "../../assets/imgs/armazem/slide3.webp";
import slide4 from "../../assets/imgs/armazem/slide4.webp";

import ArticleComponent from "../sectionElements/ArticleComponent";
import SectionArticle from "../sectionElements/SectionArticle";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import React, { useState } from "react";
import StorageModal from "../sectionElements/storage/storageModal";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import AboutFading from "../sectionElements/about/AboutFading";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Storage({ modal }) {
  return (
    <div className="flex justify-center full">
      <div
        className="font-mainFont py-[26px] phone3:py-[48px] w-[88%] max-w-[1110px]"
        id="about"
      >
        <SectionHeader
          sectionHeaderTitleSecond="Armazenamento"
          sectionHeaderDescription=""
        />

        <div>
          <ArticleComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1:items-start desktop1:justify-between desktop1:gap-[0%]">
              <div className=" desktop1:w-[55%] desktop3:w-[55%]">
                <MotionDivLeftToRight>
                  <SectionArticle
                    articleSubtitle="A definir."
                    articleTitle="Orientações gerais de estocagem e armazenamento"
                    articleParagraphOne="Veja abaixo dicas e orientações para armazenagem correta dos produtos para piscinas que ficarão por alguns dias no almoxarifado da sua loja."
                    articleParagraphTwo="Via de regra, todo produto químico, inclusive aqueles utilizados no tratamento diário de piscinas, devem ser armazenados em lugar seco e fresco totalmente livre de umidade, fungos ou mofo."
                    articleParagraphThree="No caso dos produtos de piscinas os cuidados a estocagem precisa seguir algumas regras básicas, os cuidados precisam ser redobrados, são produtos usados diariamente por profissionais do ramo como balconistas, estoquistas entre outros, mas às vezes são manuseados por pessoas sem o conhecimento necessário dos cuidados que precisa ter com esse procedimento."
                    articleParagraphFour="A casa de máquinas não é um local adequado para guardar os produtos da sua piscina, pois o local é normalmente úmido e com poucas possibilidades de vazamentos e isso potencializa o risco de contaminação dos produtos."
                  />
                  <MotionDivDownToUp>
                    {modal ? <ParagraphWithFading /> : <ParagraphSemFading />}
                    {modal && <StorageModal />}
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
