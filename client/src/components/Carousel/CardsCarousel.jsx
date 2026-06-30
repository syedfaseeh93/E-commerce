import React, { useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomePageCard from "../HomePageCards/HomeProductCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardsCarousel = ({ data, sectionName }) => {



  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(
    () =>
      data.slice(0,10).map((item, index) => <HomePageCard key={index} product={item} />),
    [data],
  );

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncSlide = ({ item }) => setActiveIndex(item);

  return (
    <div className="m-4 ">
      <h3 className="font-extrabold text-2xl pt-6 mx-10">{sectionName}</h3>
      <div className="relative p-4 mx-4">
        <div>
          <AliceCarousel ref={carouselRef}
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
            onSlideChanged={syncSlide}
            activeIndex={activeIndex}
          />

          <div className="absolute top-44 left-0">
            {activeIndex !== 0 && (
              <button
                onClick={slidePrev}
                variant="contained"
                className="z-50 cursor-pointer bg-white h-28 rounded-md shadow-lg hover:bg-gray-300 transition"
              >
                <ArrowBackIosNewIcon color="black" />
              </button>
            )}
          </div>

          <div className="absolute top-44 right-0">
            {activeIndex !== items.length - 5 && (
              <button
                onClick={slideNext}
                variant="contained"
                className="z-50 cursor-pointer bg-white h-28 rounded-md shadow-lg hover:bg-gray-300 transition"
              >
                <ArrowForwardIosIcon className="hover:white"/>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCarousel;
