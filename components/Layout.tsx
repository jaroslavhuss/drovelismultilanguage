import React, {useState, useEffect} from "react";
import { Dimensions, ImageBackground, Platform} from "react-native";
import Menu from "./Menu";
import { useFocusEffect, useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Layout = ({ children}: any) => {
    const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
    const [width, setWidth] = useState<number>(Dimensions.get("screen").width);
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
      (async()=>{
        //post fetch
        try {
          const response = await fetch('https://private.gswps.eu:10443/api/drovelis-analytics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({data:{
              screen: route.name,
              platform: Platform.OS,
              event:"screen_move",
              countryiso: await AsyncStorage.getItem("countryiso") || "unknown"
            }}),
          });
          const json = await response.json();
          console.log(json)
        } catch (error) {
            console.log(error)
        }
     
      })()
  
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
