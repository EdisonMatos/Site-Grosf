import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import imgAtendimentoTablet from "../../assets/banners/bannersCarousel/atendimento-tablet.jpg";
import imgEntregasTablet from "../../assets/banners/bannersCarousel/entregas-tablet.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function TabletBannersCarousel() {
  return (
    <MotionDivLeftToRight>
      <div className="full py-[26px] phone3:py-[48px] flex justify-center">
        <div className="w-[88%] max-w-[1110px]">
          <ImagesGallery2Slides
            slide1={imgAtendimentoTablet}
            slide2={imgEntregasTablet}
          />
        </div>
      </div>
    </MotionDivLeftToRight>
  );
}
