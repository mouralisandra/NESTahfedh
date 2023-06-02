import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      numberOfPieces={150}
      gravity={0.01}
      width={width}
      height={height}
      //set up the confetti colors
      colors={["#bb0000", "#ffffff", "#000000", "#ffbb00", "#ffffff"]}
    />
  );
};

export default ConfettiComponent;
