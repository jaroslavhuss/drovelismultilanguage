import React, {useState, useEffect} from "react";
import { Dimensions, ImageBackground} from "react-native";
import Menu from "./Menu";
import { useFocusEffect, useRoute } from '@react-navigation/native';

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

      const route = useRoute();
useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("focused", route.name);
      
      return () => {

        console.log(route.name);
      };
    }, [route])

)
  return (
    <ImageBackground source={require("../assets/pozadirozcestnik.png")} style={{ height,backgroundColor:"white", width }}>
       
      {children}  
      <Menu /> 
      
    </ImageBackground>
  );
};

export default Layout;
