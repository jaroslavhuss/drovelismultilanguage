import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const Bio = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Estetrol je přirozený produkt fetálních jater, nemá aktivní či škodlivé metabolity. Do Drovelisu je estetrol vyráběn ze sójových bobů.</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Estetrol (E4) byl objeven v roce 1965 prof. Diczfalusim v Karolinském institutu ve Stockholmu. Jedná se o přirozený estrogen produkovaný fetálními játry.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Je produkován pouze během těhotenství a do těla matky se dostává placentárním oběhem.
                    </Text>
                    <Image source={require("../../../assets/soya.png")} style={{
                        resizeMode: "contain",
                        width: 400,
                        height: 200,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 10
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        E4 představuje konečný produkt metabolické přeměny, takže se nekonvertuje ani na aktivní metabolity jako E1, E2 nebo E3, ani nevznikají potenciálně škodlivé metabolity.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        E4 je do antikoncepce Drovelis vyráběn ze sojových bobů.
                    </Text>



                </View>
            </View>
            <Text style={{ marginBottom: 200 }}></Text>
        </ScrollView >
    )
}

export default Bio

const styles = StyleSheet.create({
    someItem: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 12,
        margin: 5,
        borderColor: "#5c294fd9"
    },
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