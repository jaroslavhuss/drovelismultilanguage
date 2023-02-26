import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get("screen")
import { useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Markdown from 'react-native-markdown-display';
const StabilitaCyklu = () => {
    const [lang, setLang] = useState<any>({})
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
    return (
   
     
        <ScrollView style={{ height: "100%", marginBottom:200}}>
            <Text style={styles.fontStyle}>
                {lang.EfficiencyCycleStabilityPageTitle ||""}
            </Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
               <Markdown>
                {lang.EfficiencyCycleStabilityPageFristParagraph || ""}
               </Markdown>

                <Image source={require("../../../assets/kontrola_cyklus.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 250,
                        alignSelf: "center"
                    }} />
                    
           
                </View>
                
            </View>
           
         <Image source={require("../../../assets/graf_1.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 350,
                        alignSelf: "center",
                     borderRadius:12,
                        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
                    }} />
                    <Text>{"\n"}</Text>
                
         
                        <Text>{"\n"}</Text>
                        <Image source={require("../../../assets/graf_2.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 350,
                        alignSelf: "center",
                     borderRadius:12,
                        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
                    }} />
                    <Text style={{textAlign:"center"}}>
{"\n"}

                    {lang.EfficiencyCycleStabilityPageReferenceText}
                    </Text>
                   
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
        </ScrollView>
    )
}

export default StabilitaCyklu

const styles = StyleSheet.create({
    fontStyle: {
        color: "#d9326f",
        fontSize: 25,
        padding: 10,
        fontFamily: "Museo",
        position: "absolute",
        top: 20,
        right: 0
    },
    content: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "center",
        width,
        height: height - 200,
        zIndex: -2
    },
    wrapper: {
        width: width - 300,
        alignSelf: "center",

    }

})