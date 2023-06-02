import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from "../assets/Nfts/home1.png";
import img2 from "../assets/Nfts/home2.png";
import img3 from "../assets/Nfts/home3.png";
import img4 from "../assets/Nfts/home4.png";
import img5 from "../assets/Nfts/home5.png";
import img6 from "../assets/Nfts/home6.png";
import img7 from "../assets/Nfts/home7.png";
import img8 from "../assets/Nfts/home8.png";
import img9 from "../assets/Nfts/home9.png";
import img10 from "../assets/Nfts/home10.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    width: 4rem;
    left: 0;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10}  />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
