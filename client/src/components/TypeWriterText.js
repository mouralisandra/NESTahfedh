import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "serif";
  }

  .text-1 {
    font-family: "serif";
    color: Black;
  }

  .text-2 {
    font-family: "serif";
    color: Grey;
  }

  .text-3 {
    font-family: "serif";
    color: Black;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title style={{fontSize:'50px'}}>
        Esta7fedh ala flousek
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='text-1'>Better than Frippe de luxe</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>The best thrift shop.</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'Better than Tayara</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>The new Techwall Generation</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
