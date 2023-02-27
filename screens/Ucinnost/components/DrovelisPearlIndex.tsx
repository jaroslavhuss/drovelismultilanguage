import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const { width, height } = Dimensions.get("screen")
import { useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Markdown from 'react-native-markdown-display';
import MultiImage from '../../../components/MultiImage';
const DrovelisPearlIndex = () => {
    const [lang, setLang] = useState<any>({})
    const [image, setImage] = useState("")
    useFocusEffect(
        React.useCallback(() => {
            (async()=>{
              const data:string|null = await AsyncStorage.getItem("i18");
              if(data){      
                  setLang(JSON.parse(data))
              }
          })()
            return () => {
                setLang({})
            };
          }, [])
    )

    useEffect(()=>{
        //here will be image caching logic
        if(Object.keys(lang).length>0){
         lang.hasOwnProperty("HPDrovelisImageLogo")&&setImage(URL+lang.HPDrovelisImageLogo.data.attributes.url);
        }
       
      //  
     },[lang])
    return (
  
        <View>
            <ScrollView>
            <Text style={styles.fontStyle}>{lang.EfficiencyDrovelisPearlIndexPageTitle || ""}</Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Markdown>
                       {lang.EfficiencyDrovelisPearlIndexPageFirstParagraph || ""}
                      </Markdown>

                <Text>{""}</Text>
                <Text>{""}</Text>
                <Text>{""}</Text>
                   
                    <MultiImage nameOfTheImage='EfficiencyDrovelisPearlIndexPageImage' style={{ resizeMode: "contain",
                        width: 600,
                        height: 250,
                        alignSelf: "center"}}/>
                    <Markdown>
                        {lang.EfficiencyDrovelisPearlIndexPageSecondParagraph}
                    </Markdown>
                   
                </View>
            </View>
            </ScrollView>
        </View>

    )
}

export default DrovelisPearlIndex

const styles = StyleSheet.create({
    fontStyle: {
        color: "#d9326f",
        fontSize: 30,
        padding: 10,
        fontFamily: "Museo",
        position: "absolute",
        top: 20,
        right: 0,
    },
    content: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "center",
        width,
        height: height - 170,
        zIndex: -2
    },
    wrapper: {
        width: width - 300,
        alignSelf: "center"
    }

})