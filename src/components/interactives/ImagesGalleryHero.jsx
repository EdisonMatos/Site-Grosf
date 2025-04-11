import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGalleryHero(props) {
  const { slide1, slide2 } = props;

  ImagesGalleryHero.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      originalAlt: "Produto para limpeza de piscina em São Bernardo do Campo",
    },
    {
      original: slide2,
      originalAlt: "Produto para tratamento de água de piscina em São Paulo",
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        slideInterval={2500}
      />
    </div>
  );
}
