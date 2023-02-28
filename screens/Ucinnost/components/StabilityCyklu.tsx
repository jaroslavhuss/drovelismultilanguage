import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get("screen")
import { useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Markdown from 'react-native-markdown-display';
import SecuredMarkdown from '../../../components/SecuredMarkdown';
import MultiImage from '../../../components/MultiImage';
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
            <SecuredMarkdown style={styles.fontStyle} keyName='EfficiencyCycleStabilityPageTitle'/>
            <View style={styles.content}>
                <View style={styles.wrapper}>
               <SecuredMarkdown element='markdown' keyName='EfficiencyCycleStabilityPageFristParagraph'></SecuredMarkdown>
                    
                    <MultiImage style={{resizeMode: "contain",
                        width: 900,
                        height: 250,
                        alignSelf: "center"}} nameOfTheImage='EfficiencyCycleStabilityPageImage1'/>
                </View>
                
            </View>
           <MultiImage style={{ resizeMode: "contain",
                        width: 900,
                        height: 350,
                        alignSelf: "center",
                     borderRadius:12}} nameOfTheImage="EfficiencyCycleStabilityPageImage2"/>

                    <Text>{"\n"}</Text>
                
         
                        <Text>{"\n"}</Text>
                        <MultiImage style={{ resizeMode: "contain",
                        width: 900,
                        height: 350,
                        alignSelf: "center",
                     borderRadius:12}} nameOfTheImage="EfficiencyCycleStabilityPageImage3"/>
    <SecuredMarkdown keyName='EfficiencyCycleStabilityPageReferenceText' element='text' style={{textAlign:"center"}}/>
                   
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