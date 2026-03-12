import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery3Slides(props) {
  const { slide1, slide2, slide3, slide4, slide5, slide6, slide7 } = props;

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  ImagesGallery3Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
    slide4: PropTypes.any,
    slide5: PropTypes.any,
    slide6: PropTypes.any,
    slide7: PropTypes.any,
  };

  const images = slides
    .filter(Boolean) // remove undefined
    .map((img) => ({
      original: img,
      thumbnail: img,
      originalAlt: "Imagem do departamento da Grosf",
      thumbnailAlt: "Imagem do departamento da Grosf",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    }));

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={true}
        showThumbnails={true}
      />
    </div>
  );
}
