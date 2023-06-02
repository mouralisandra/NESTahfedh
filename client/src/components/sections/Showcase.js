import React, { useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

import img1 from "../../assets/Nfts/home1.png";
import img2 from "../../assets/Nfts/home2.png";
import img3 from "../../assets/Nfts/home3.png";
import img4 from "../../assets/Nfts/home4.png";
import img5 from "../../assets/Nfts/home5.png";
import img6 from "../../assets/Nfts/home6.png";
import img7 from "../../assets/Nfts/home7.png";
import img8 from "../../assets/Nfts/home8.png";
import img9 from "../../assets/Nfts/home9.png";
import img10 from "../../assets/Nfts/home10.png";
import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
  0%{ transform: translateX(100%)};
  100%{ transform: translateX(-100%)};
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

  }
`;



const NftItem = ({ img }) => {
  let play = (e) => {
   
  };
  let pause = (e) => {
  
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img}  />
      
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase"  style={{paddingTop:'-5%',marginBottom:'-5%'}} >
      <Row direction="none"  style={{marginTop:'-5%',marginBottom:'-5%'}} >
        <NftItem img={img1} />
        <NftItem img={img2}  />
        <NftItem img={img3}  />
        <NftItem img={img4} />
        <NftItem img={img5}  />
        <NftItem img={img6}  />
        <NftItem img={img7} />
        <NftItem img={img8} />
        <NftItem img={img9}  />
        <NftItem img={img10} />
      </Row>
    </Section>
  );
};

export default Showcase;
