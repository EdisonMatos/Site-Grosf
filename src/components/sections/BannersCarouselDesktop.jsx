import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import imgAtendimentoDesktop from "../../assets/banners/bannersCarousel/atendimento-desktop.jpg";
import imgEntregasDesktop from "../../assets/banners/bannersCarousel/entregas-desktop.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function BannersCarousel() {
  return (
    <MotionDivLeftToRight>
      <div className="full py-[26px] phone3:py-[48px] flex justify-center">
        <div className="w-[88%] max-w-[1110px]">
        <ImagesGallery2Slides
          slide1={imgAtendimentoDesktop}
          slide2={imgEntregasDesktop}
        />
        </div>
      </div>
    </MotionDivLeftToRight>
  );
}
