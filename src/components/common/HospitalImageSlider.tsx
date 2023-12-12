import { FC } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type HospitalLogoImage = {
  index: number;
  image: string;
};
interface ImageSliderProps {
  imageData: HospitalLogoImage[];
}

const HospitalImageSlider: FC<ImageSliderProps> = ({ imageData }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {imageData.map((imageUrl, index) => (
        <div key={index} className="px-5">
          <img
            loading="lazy"
            src={`/images/icons/hospital-names/${imageUrl.image}.svg`}
            alt={`${imageUrl.image}`}
            className="hover:cursor-pointer"
          />
        </div>
      ))}
    </Slider>
  );
};

export default HospitalImageSlider;
