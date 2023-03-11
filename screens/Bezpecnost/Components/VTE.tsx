import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import SecuredMarkdown from '../../../components/SecuredMarkdown'
import MultiImage from '../../../components/MultiImage'
const { width, height } = Dimensions.get("screen")
const VTE = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <SecuredMarkdown style={styles.fontStyle} keyName='SafetyVTEHeadline1' element='text'/>
                    <SecuredMarkdown style={styles.fontStyle} keyName='SafetyVTEHeadline2' element='text'/>
                    <SecuredMarkdown style={styles.fontStyle} keyName='SafetyVTEHeadline3' element='text'/>
             
                    <MultiImage style={{ resizeMode: "contain",
                        width: 1200,
                        height: 450,
                        alignSelf: "center", 
                        marginTop:20,
                        marginBottom:20}} nameOfTheImage='SafetyVTEImage1' />

                    <SecuredMarkdown element='markdown' keyName='SafetyVTEParagraph'/>
                    <MultiImage 
                    style={{ resizeMode: "contain",
                    width: 900,
                    height: 400,
                    alignSelf: "center"}}
                    nameOfTheImage="SafetyVTEImage2"
                    />

                   
                   

<SecuredMarkdown element='markdown' keyName='SafetyVTEParagraph2'/>
                    <MultiImage style={{
                        resizeMode: "contain",
                        width: 1100,
                        height: 600,
                        alignSelf: "center",
                        padding:20,
                        margin:10
                    }} 
                    nameOfTheImage="SafetyVTEImage3"
                    />
                   <SecuredMarkdown element='markdown' keyName='SafetyVTEEndCitation' />
                    
                </View>
            </View>
            <Text style={{ marginBottom: 2000 }}></Text>
        </ScrollView >
    )
}

export default VTE

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