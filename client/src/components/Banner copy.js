import React from "react";
import styled from "styled-components";

import Button from "./Button";
import CatalogSettings from "./utills/CatalogSettings";
import img1 from "../assets/Nfts/home5.png";
import img2 from "../assets/Nfts/home6.png";
import img3 from "../assets/Nfts/home7.png";
import img4 from "../assets/Nfts/home8.png";
import img5 from "../assets/Nfts/home9.png";
import img6 from "../assets/Nfts/home10.png";
import img7 from "../assets/Nfts/home7.png";
import img8 from "../assets/Nfts/home8.png";
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
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 48em) {
    width: 10rem;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;

  text-shadow: 1px 1px 2px ${(props) => props.theme.text};

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
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

const JoinNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Banner2 = () => {
  return (
    <Section>
      <ImgContainer style={{height:'50px',weight:'50px'}} >
        <img height={'50px'} weight={'50px'} src={img1}  />
        <img height={'50px'} weight={'50px'}src={img3}  />
        <img height={'50px'} weight={'50px'} src={img10}  />
        <img height={'50px'} weight={'50px'} src={img4}  />
        <img height={'50px'} weight={'50px'} src={img9}  />
        <img height={'50px'} weight={'50px'} src={img6}  />
      </ImgContainer>
      <Title>
        NESTahfedh <br /> hidden gems
      </Title>
      <BtnContainer>
      </BtnContainer>
    </Section>
  );
};

export default Banner2;
