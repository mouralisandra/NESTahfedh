import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyles";
import { light } from "../components/styles/Themes";
import Home from "../components/sections/Home";
import Showcase from "../components/sections/Showcase";
import ScrollToTop from "../components/ScrollToTop";
import { observer } from 'mobx-react-lite';
import Banner3 from '../components/Banner3';

const HomePage = observer(() => {
    return (
        <div style={{alignItems:'center', alignSelf:'center'}} >
  
  <GlobalStyles />
      <ThemeProvider theme={light}>
        <Home />
        <Showcase />
        <ScrollToTop />
        <Banner3/>
      </ThemeProvider>
            
        
    </div>
    );
}
);

export default HomePage;