import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import SecuredMarkdown from '../../../components/SecuredMarkdown'
import MultiImage from '../../../components/MultiImage'
const { width, height } = Dimensions.get("screen")
const MetabolickyProfil = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
              
                <SecuredMarkdown element='text' style={styles.fontStyle} keyName="SafetyMETABOLICHeadline1"/>
                    <SecuredMarkdown  element='markdown' keyName='SafetyMETABOLICParagraph1'/>

                    <MultiImage style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 350,
                        alignSelf: "center"
                    }} 
                    nameOfTheImage="SafetyMETABOLICImage1"
                    />
                    <MultiImage style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 350,
                        alignSelf: "center"
                    }} 
                    nameOfTheImage="SafetyMETABOLICImage2"
                    />
                   
                   <SecuredMarkdown  element='markdown' keyName='SafetyMETABOLICParagraph3'/>
                   <MultiImage style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 350,
                        alignSelf: "center"
                    }} 
                    nameOfTheImage="SafetyMETABOLICImage3"
                    />
                  
                </View>
            </View>
            <Text style={{ marginBottom: 1500 }}></Text>
        </ScrollView >
    )
}

export default MetabolickyProfil

const styles = StyleSheet.create({
    fontStyle: {
        color: "#d9326f",
        fontSize: 25,
        padding: 10,
        fontFamily: "Museo",

    },
    content: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        width,
        height: height - 170,
        zIndex: -2
    },
    wrapper: {
        width: width - 300,
        alignSelf: "center",

    }

})