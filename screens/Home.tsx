import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Text, ImageBackground, View, Dimensions, Image, Animated } from 'react-native'
import Layout from '../components/Layout'
//@ts-ignore
import TypingText from "react-native-typical";
const {width, height} = Dimensions.get("screen");
import { useFonts } from 'expo-font';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../Global_URL';
import MultiImage from '../components/MultiImage';
const Home = () => {

    const [lang, setLang] = useState<any>({})
    const [logoURL, setLogoURL] = useState("");

    const fadeAnim = useRef(new Animated.Value(0)).current;
    Animated.sequence([
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver:true,
          }),
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver:true,
          })
    ]).start();

    useFocusEffect(
        React.useCallback(() => {
            (async()=>{
              const data:string|null = await AsyncStorage.getItem("i18");
              if(data){      
                  setLang(JSON.parse(data)) 
              }
          })()
            return () => {
                setLoadAnimatedComponents(false);
                fadeAnim.setValue(0);
            };
          }, [])
    )

    const [loadAnimatedComponents, setLoadAnimatedComponents] = useState(false);
    const [loaded] = useFonts({
        "Museo": require("../assets/fonts/museo.otf"),
        "MuseoBold": require("../assets/fonts/museo900.otf"),
      });
      
      if (!loaded) {
        return null;
      }
    
    return (
        <Layout>
           <ImageBackground source={require("../assets/bgd.png")} style={styles.bg}>
               <View style={styles.textbanner}>
                    <Text style={{
                        fontFamily:"Museo",
                        color:"#612751",
                        fontSize:40,
                       
                    }}>
                {lang.HPModern}
                    </Text>
               {lang?<TypingText
                steps={[`${lang.HPContraception}`]||[""]}
                loop={1}
                blinkCursor={false}
                style={{fontFamily:"Museo",
                color:"#E81E75",
                fontSize:35,}}
            />:<></>}
        
       
       <MultiImage nameOfTheImage='HPDrovelisImageLogo'style={{ resizeMode:"contain",
                    width:250,
                    height:200,
                    opacity:1}}/>
              </View>
           </ImageBackground>
        </Layout>
    )
}

export default Home

const styles = StyleSheet.create({
    bg:{
        flex:1,
        resizeMode:"contain",
    },
    textbanner:{
        position:"absolute",
        right:0,
        marginTop:height/3,
        marginRight:20,
        width:300
    }
});