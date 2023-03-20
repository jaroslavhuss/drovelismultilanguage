import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import UcinnostRozcestnik from './screens/Ucinnost/UcinnostMain';
import { GlobalProvider } from "./context/GlobalContext";
import KontrolaCyklu from './screens/KontrolaCyklu/KontrolaCykluMain';
import BezpecnostMain from './screens/Bezpecnost/BezpecnostMain';
import EstetrolMain from './screens/Estetrol/EstetrolMain';
import SPC from './screens/SPC/SPC';
import { Image } from "react-native"
import { Asset } from 'expo-asset';
import Setrnost from './screens/Setrnost/SetrnostMain';
import * as Font from 'expo-font';
import Settings from './screens/Settings';
import LangSelection from './screens/LangSelection';
import DynamicPages from './screens/DynamicPages';


export default function App() {
  const Drawer = createDrawerNavigator();
  //
  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      "Museo": require("./assets/fonts/museo.otf"),
      "MuseoBold": require("./assets/fonts/museo900.otf"),
      // Any string can be used as the fontFamily name. Here we use an object to provide more control

    });
  }

  //



  useEffect(() => {
    loadFonts();
    let process: boolean = true;
    cacheImages([
      require('./assets/airplane.png'),
      require('./assets/airplane2.png'),
      require('./assets/airplane3.png'),
      require('./assets/airplane4.png'),
    ]);
    return () => {
      process = false;
    }
  }, [])
  function cacheImages(images: string[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Drawer.Navigator initialRouteName="Home" screenOptions={
          {
           headerStyle:{
            display:"none"
           },
           headerShown:false
          }
        }>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Efficiency" component={UcinnostRozcestnik} />
          <Drawer.Screen name="Cycle-control" component={KontrolaCyklu} />
          <Drawer.Screen name="Frugality" component={Setrnost} />
          <Drawer.Screen name="Safety" component={BezpecnostMain} />
          <Drawer.Screen name="Estetrol" component={EstetrolMain} />
          <Drawer.Screen name="spc" component={SPC} />
          <Drawer.Screen name="settings" component={Settings} />
          <Drawer.Screen name="lang-selection" component={LangSelection} />
          <Drawer.Screen name="dynamic-pages" component={DynamicPages} />
        </Drawer.Navigator>
        <StatusBar hidden={true} />
      </GlobalProvider>
    </NavigationContainer>
  );
}
