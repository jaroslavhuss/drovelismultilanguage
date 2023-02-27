import React, {useState, useEffect} from "react";
import { Dimensions, ImageBackground} from "react-native";
import Menu from "./Menu";

const Layout = ({ children}: any) => {
    const [height, setHeight] = useState<number>(Dimensions.get("screen").height)
    const [width, setWidth] = useState<number>(Dimensions.get("screen").width)
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });
  return (
    <ImageBackground source={require("../assets/pozadirozcestnik.png")} style={{ height,backgroundColor:"white", width }}>
       
      {children}  
      <Menu /> 
      
    </ImageBackground>
  );
};

export default Layout;
