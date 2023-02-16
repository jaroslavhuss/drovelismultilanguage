import React, {useState, useEffect} from "react";
import { Dimensions, ImageBackground} from "react-native";
import Menu from "./Menu";



const Layout = ({ children}: any) => {
    const {height, width} = Dimensions.get("screen");
 
  return (
    <ImageBackground source={require("../assets/pozadirozcestnik.png")} style={{ height,backgroundColor:"white", width }}>
       
      {children}  
      <Menu /> 
      
    </ImageBackground>
  );
};

export default Layout;
