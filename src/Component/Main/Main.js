import React from 'react';
import NavigationMain from "../NavigationMain/NavigationMain"
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import AboutProject from "./AboutProject/AboutProject"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";


function Main() {
    return (
      <div className="Main">
        <NavigationMain/>
        <Promo/>
        <main className="main">
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
        <Footer/>
      </div>
    );
  }
  
export default Main;