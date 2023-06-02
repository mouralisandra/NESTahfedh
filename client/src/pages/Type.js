import React from "react";
import Typewriter from "typewriter-effect";
import { useStyles } from "./Home-style";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Our new collection is out!",
          "Hats, Caps and accessories",
          "Exceptional taste in fashion",
          "Latest Fashion Trends ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 100,
        marginleft:15,
        fontFamily: 'serif', fontSize: '70px',

      }}
    />
  );
}

export default Type;