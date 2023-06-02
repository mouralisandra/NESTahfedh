import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyles";
import { light } from "../components/styles/Themes";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Showcase from "../components/sections/Showcase";
import Team from "../components/sections/Team";
import ScrollToTop from "../components/ScrollToTop";
import { observer } from 'mobx-react-lite';

const HomePage = observer(() => {
    return (
        <div style={{alignItems:'center', alignSelf:'center'}} >
  
  <GlobalStyles />
      <ThemeProvider theme={light}>
        <Home />
        <Showcase />
        <ScrollToTop />
      </ThemeProvider>
            
        
    </div>
    );
}
);

export default HomePage;