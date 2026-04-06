import PropTypes from "prop-types";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import Buttons from "../interactives/Buttons";

export default function ImgTextAndButtonsCard(props) {
  const { img, alt, button1Label, button1Link, text } = props;

  ImgTextAndButtonsCard.propTypes = {
    img: PropTypes.any,
    alt: PropTypes.string,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
    text: PropTypes.any,
  };

  return (
    <div className="w-full tablet1:w-[45%] desktop1:w-[29%] min-h-[270px] bg-white p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[15px] justify-between">
      <MotionDivLeftToRight>
        <div className="flex justify-center items-center h-[125px] phone3:h-[80px] tablet1:h-[125px]">
          <img
            src={img}
            alt={alt}
            width={86}
            height={90}
            className="max-h-[90px] max-w-[150px]"
          />
        </div>
      </MotionDivLeftToRight>
      <p className="text-center font-mainFont text-paragraph3 text-quaternary">
        <MotionDivLeftToRight>
          <p>{text}</p>
        </MotionDivLeftToRight>
      </p>

      <a href={button1Link} target="_blank" className="w-full">
        <MotionDivLeftToRight>
          <Buttons
            name={button1Label}
            className="w-full h-10 desktop1:h-8 mb-4"
          />
        </MotionDivLeftToRight>
      </a>
    </div>
  );
}
