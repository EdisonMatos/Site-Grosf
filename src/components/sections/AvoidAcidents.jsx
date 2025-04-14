import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import resgateAcidente from "../../assets/imgs/avoidAccidents/resgateAcidente.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import React, { useState } from "react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../interactives/Button";
import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import slide1 from "../../assets/imgs/avoidAccidents/slide1.jpg"
import slide2 from "../../assets/imgs/avoidAccidents/slide2.jpg"


export default function AboutUs() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(
      "Negócios corporativos x meio ambiente. É possível uma convivência pacífica?"
    );
    setModalContent(
      <div className="text-paragraph3">
        <p>
          Nesses mais de 30 anos de operação ininterrupta, nossa empresa tem se
          dedicado e operado com o que há de mais sagrado e importante no nosso
          planeta, “a água”! Sagrado porque é fonte de vida, importante porque
          mantém a vida.
        </p>
        <br />
        <p>
          Toda água pode ser recuperada se tratada adequadamente e esse é o
          grande desafio.
        </p>{" "}
        <br />
        <p>
          Água servida, água barrenta, água contaminada, água de reuso, água de
          rios e lagos, água suja, essa tem sido nossa luta constante embora não
          seja nossa atividade fim.
        </p>
        <br />
        <p>
          Recuperar e nunca jogar fora águas de piscinas, essa sim é a nossa
          principal atividade e foi com esse objetivo que nossa empresa foi
          criada.
        </p>
        <br />
        <p>
          Nossa luta incessante, tem sido no sentido de adotar práticas de
          atuação responsável que unem em um único tripé, ambiente corporativo,
          rentabilidade e sustentabilidade.
        </p>
        <br />
        <p>
          Conheça os projetos que já executamos e os projetos previstos para
          serem executados futuramente, todos esses projetos têm em comum o
          mesmo objetivo, contribuir para a melhoria do meio ambiente, vamos lá:
        </p>
        <br />
        <p>
          Durante a reforma e readequação do nosso edifício para receber as
          instalações da nossa empresa, nossa nova sede passou por profundas
          transformações, tomamos o cuidado de reservar uma área verde de
          aproximadamente 60m² onde formamos uma área de jardinagem que inclui
          flores de várias espécies e algumas árvores frutíferas de pequeno
          porte como mamão, laranja, limão, amora, mexerica entre outras.
        </p>
        <br />
        <p>
          Construímos um reservatório com capacidade para armazenar 26000 L de
          água proveniente da chuva que é bastante abundante na nossa região
          durante o período do verão, essa água é distribuída por uma rede com 4
          pontos espalhados estrategicamente por várias partes do edifício e
          serve para lavar veículos da nossa frota, lavar quintais e calçadas,
          nosso estacionamento entre outros.
        </p>
        <br />
        <p>
          Como se trata de rede pressurizada, qualquer dos pontos quando
          abertos, aciona a bomba principal e jorra água em abundância para o
          cumprimento do objetivo principal.
        </p>
        <br />
        <p>
          Instalamos lixeiras para coleta de recicláveis e lixo orgânico foram
          instaladas em vários pontos do novo espaço, o objetivo principal foi a
          coleta interna dos materiais recicláveis separadamente do lixo
          orgânico a fim de facilitar sua seleção quando este chega ao ponto de
          descarte.
        </p>
        <br />
        <p>
          No ano de 2020 acabamos de forma definitiva com o uso de utensílios
          descartáveis na nossa empresa e adotamos a utilização de utensílios
          reutilizáveis no nosso dia a dia, são pratos, talheres, copos para
          água e café, taças, canecas, jarras entre outros, com essa ação
          deixamos de descartar anualmente na natureza cerca de 20 mil copos
          grandes e pequenos entre outros utensílios, e isso nos enche de
          orgulho.
        </p>
        <br />
        <p>
          Para o futuro mas a curto prazo, pois já está em fase de estudo,
          estaremos implantando uma usina solar para geração de energia
          elétrica, a usina funcionará como uma espécie de fazenda solar e a sua
          capacidade instalada será suficiente para gerar toda a energia
          consumida em nossos processos diariamente, dessa forma nos tornarmos
          auto sustentáveis no consumo de água pluvial para reuso e também no
          consumo de energia elétrica, esse será um dos mais importantes passos
          que nossa empresa estará dando no sentido de contribuir para um
          planeta melhor e mais sustentável, porém ainda não será esse o mais
          importante de todos.
        </p>
        <br />
        <p>
          Como projeto de longo prazo, temos a substituição gradativa da nossa
          atual frota de veículos utilitários movidos a diesel, um combustível
          altamente poluente, por veículos movidos 100% a energia elétrica
          produzida em nossa usina solar.
        </p>
        <br />
        <p>
          Para que esse projeto seja executado ainda dependemos de fatores
          alheios à nossa vontade ou nossa ação, um deles é que as montadoras
          consigam a médio prazo aumentar substancialmente a autonomia desses
          modernos veículos, um processo ainda demorado mas que a qualquer
          momento pode acontecer.
        </p>
        <br />
        <p>
          Esse sim será o mais ambicioso e o mais importante projeto que será
          implantado em nossa empresa, quando tudo isso estiver operando teremos
          a certeza de que nossa empresa estará preparada para o futuro, o
          futuro da energia limpa, o futuro da auto suficiência em água e
          energia, um futuro sustentável do ponto de vista de energia e
          utilização de água servida.
        </p>
        <br />
        <MotionDivRightToLeft>
          <ImagesGallery2Slides slide1={slide1} slide2={slide2} />
        </MotionDivRightToLeft>
        <p className="my-[20px]">Quer saber mais? Clique abaixo 👇</p>
        <div>
          <Button
            aria-label="Botão de contato"
            label="Fale com um consultor"
            animation={false}
            className="hover:scale-105"
            icon={<FaWhatsapp size={24} />}
          />
        </div>
      </div>
    );
    setVisible(true);
  };

  return (
    <div className="flex justify-center full">
      <div className="font-mainFont w-[88%] max-w-[1110px] pb-[8px] pt-[26px] phone3:pt-[48px] tablet1:pb-0">
        <SectionHeader
          sectionHeaderTitleSecond="Atuação responsável"
          sectionHeaderDescription=""
        />
        <div className=" desktop1:flex desktop1:flex-row-reverse desktop1:justify-between desktop1:pb-[54px] desktop3:pb-[48px]">
          <div className=" pb-[28px] desktop1:w-[48%] desktop1:py-0 desktop3:w-[46.3%]">
            <MotionDivRightToLeft>
              <img
                className=" flex phone1:w-[100%] phone1:h-[100%]"
                src={imgPastilhaCloro}
                alt="imagem de cuidados"
              />
            </MotionDivRightToLeft>
          </div>
          <div className="desktop1:w-[48.5%] desktop3:w-[46.3%]">
            <MotionDivLeftToRight>
              <h1 className="  text-primary flex items-center phone1:w-[100%] phone1:font-medium phone1:text-title2 phone3:text-title2 phone1:pb-[10px] tablet1:text-title2 desktop1:text-title4">
                Negócios corporativos x meio ambiente. É possível uma
                convivência pacífica?
              </h1>
              <div className=" text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%]">
                <p>
                  A resposta é sim.
                  <br />
                  <br />
                  Aprendemos nas últimas décadas que é possível obter maior
                  lucratividade quando se respeita leis e práticas ambientais.
                  Nosso planeta tem pressa, não é possível esperar, amanhã é
                  agora no nosso planeta!
                </p>

                <MotionDivDownToUp>
                  <Button
                    className="my-[20px] text-black"
                    label="Continuar lendo"
                    onClick={onClick}
                    removeAnchor={true}
                    removeTarget={true}
                    animation={true}
                    icon={<MoveRight />}
                  />
                </MotionDivDownToUp>
              </div>
            </MotionDivLeftToRight>
          </div>
        </div>
        {/* <div className="desktop1:flex desktop1:flex-row desktop1:justify-between ">
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
                  A definir. <br />
                  <br />
                  A definir. <br />
                  <br />
                  A definir. <br />
                  <br />A definir.
                </p>
              </MotionDivRightToLeft>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <Dialog
          className="font-secondFont"
          header={modalTitle}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
        >
          {modalContent}
        </Dialog>
      </div>
    </div>
  );
}
