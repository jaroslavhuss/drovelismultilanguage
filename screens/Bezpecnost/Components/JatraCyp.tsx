import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import SecuredMarkdown from '../../../components/SecuredMarkdown'
import MultiImage from '../../../components/MultiImage'
const { width, height } = Dimensions.get("screen")
const JatraCyp = () => {
    return (
        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <SecuredMarkdown element='text' style={styles.fontStyle} keyName="SafetyLIVERHeadline1"/>

                    <SecuredMarkdown keyName='SafetyLIVERParagraph1' element='markdown'/>

                    <MultiImage style={{
                        resizeMode: "contain",
                        width: 300,
                        height: 150,
                        alignSelf: "center"
                    }} 
                    nameOfTheImage="SafetyLIVERImage1"
                    />
                   <SecuredMarkdown keyName='SafetyLIVERParagraph2' element='markdown'/>

                </View>
            </View>
            <Text style={{ marginBottom: 500 }}></Text>
        </ScrollView >
    )
}

export default JatraCyp

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