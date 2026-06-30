import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouseldata } from './MainCarouselData';

const MainCarousel = () => {

    const items=mainCarouseldata.map((item)=><img src={item.image}/>)

  return (
    <div className='pb-12'>
    <AliceCarousel
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    /></div>
  )
}

export default MainCarousel