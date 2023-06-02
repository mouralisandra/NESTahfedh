import React from "react";
import styled from "styled-components";

import Button from "./Button";
import CatalogSettings from "./utills/CatalogSettings";
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
import Type from "../pages/Type";

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
  opacity: 0.9;

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
  color: black;
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

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
      </ImgContainer>
      <ContentContainer style={{marginRight:'-14%'}}>
        <Title>     <div class=" d-flex align-items-center" style={{}}>
               <div class="text-align-left align-self-center" style={{marginLeft:'-4%',marginRight:'14%'}}>         
               <h2 style={{ color:'black',fontFamily:'serif', fontSize:'60px',marginBottom:'3%',marginTop:'3%'}}>Explore our Products: </h2>
               </div>
           </div></Title>
      </ContentContainer>
      <BtnContainer>
        <CatalogSettings />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
