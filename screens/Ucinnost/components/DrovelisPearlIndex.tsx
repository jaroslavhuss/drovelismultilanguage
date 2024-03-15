import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const { width, height } = Dimensions.get("screen")
import { useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Markdown from 'react-native-markdown-display';
import MultiImage from '../../../components/MultiImage';
import SecuredMarkdown from '../../../components/SecuredMarkdown';
const DrovelisPearlIndex = () => {
    const [lang, setLang] = useState<any>({})
    useFocusEffect(
        React.useCallback(() => {
            (async()=>{
              const data:string|null = await AsyncStorage.getItem("i18");
              if(data){      
                  setLang(JSON.parse(data))
              }
          })()
          }, [])
    )
    return (
  
        <View>
            <ScrollView>
           <SecuredMarkdown style={styles.fontStyle} keyName='EfficiencyDrovelisPearlIndexPageTitle'/>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    
<SecuredMarkdown element='markdown' keyName="EfficiencyDrovelisPearlIndexPageFirstParagraph"></SecuredMarkdown>
                <Text>{""}</Text>
                <Text>{""}</Text>
                <Text>{""}</Text>
                   
                    <MultiImage nameOfTheImage='EfficiencyDrovelisPearlIndexPageImage' style={{ resizeMode: "contain",
                        width: 600,
                        height: 250,
                        alignSelf: "center"}}/>
                        
                        <SecuredMarkdown element='markdown' keyName="EfficiencyDrovelisPearlIndexPageSecondParagraph"></SecuredMarkdown>
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