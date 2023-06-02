import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyles";
import { light } from "../components/styles/Themes";
import Home from "../components/sections/Home";
import Showcase from "../components/sections/Showcase";
import ScrollToTop from "../components/ScrollToTop";
import { observer } from 'mobx-react-lite';
import Banner3 from '../components/Banner3';
import ConfettiComponent from '../components/Confetti';

const HomePage = observer(() => {
    return (
        <div style={{alignItems:'center', alignSelf:'center'}} >
  
  <GlobalStyles />
  <ConfettiComponent />
      <ThemeProvider theme={light}>
        <Home />
        <Showcase />
        <Banner3/>
      </ThemeProvider>
            
        
    </div>
    );
}
);

export default HomePage;