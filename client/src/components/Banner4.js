import React from "react";
import styled from "styled-components";
import img1 from "../assets/Nfts/home5.png";
import img2 from "../assets/Nfts/home2.png";
import img7 from "../assets/Nfts/home7.png";
import img6 from "../assets/Nfts/home10.png";
import img9 from "../assets/Nfts/home9.png";
import img10 from "../assets/Nfts/home10.png";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;

  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 48em) {
    width: 10rem;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: serif;
  font-size: 60px;
  margin-bottom: 3%;
  margin-top: 3%;

  @media (max-width: 48em) {
    font-size: 40px;
    margin-bottom: 2%;
    margin-top: 2%;
  }
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const Banner4 = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} />
        <img src={img9} />
        <img src={img10} />
        <img src={img2} />
        <img src={img7} />
        <img src={img6} />
      </ImgContainer>
      <ContentContainer>
        <Title style={{color:'black'}}>Order Product</Title>
      </ContentContainer>
      <BtnContainer>
      </BtnContainer>
    </Section>
  );
};

export default Banner4;
