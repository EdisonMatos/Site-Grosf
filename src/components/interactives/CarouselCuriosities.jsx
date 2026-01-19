import React from 'react'
import { Carousel } from 'primereact/carousel'

export default function CarouselCuriosities({
  value = [],
  renderItem,
  numVisible = 1,
  numScroll = 1,
  responsiveOptions,
}) {
  return (
    <Carousel
      value={value}
      numVisible={numVisible}
      numScroll={numScroll}
      responsiveOptions={responsiveOptions}
      itemTemplate={(item, index) => renderItem(item, index)}
    />
  )
}
