import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const MetabolickyProfil = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Drovelis vykazuje maximální metabolickou neutralitu, neboť neovlivňuje metabolismus glukózy a tuků. Oproti tomu kombinace EE/LNG výrazněji zasahuje do hladin glukózy i tuků.</Text>

                    <Text style={{ fontSize: 18, marginTop: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Metabolismus sacharidů</Text>
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 10, marginTop: 30 }}>
                        <Text>Metabolismus glukózy byl vyšetřován pomocí měření</Text>
                    </Text>

                    <Text style={{ fontSize: 18, marginLeft: 30, marginBottom: 30 }}>
                        •	plazmatických hladin glukózy{"\n"}
                        •	glykovaného hemoglobinu{"\n"}
                        •	glukózového tolerančního testu (OGTT){"\n"}
                        •	hladin inzulinu a inzulinové rezistence.
                    </Text>


                    <Text style={{ fontSize: 18, marginBottom: 30 }}>
                        Hodnoty před nasazením Drovelisu a po 6ti cyklech léčby nevykazovaly žádné významné rozdíly.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Výsledky celkově ukázaly, že <Text style={{ fontWeight: "bold" }}>Drovelis významně neovlivňuje metabolismus glukózy.</Text>
                    </Text>

                    <Image source={require("../../../assets/pre-treatment.png")} style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 350,
                        alignSelf: "center"
                    }} />
                    <Image source={require("../../../assets/aftertreat.png")} style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 350,
                        alignSelf: "center"
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Metabolismus tuků</Text>
                    </Text>



                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                        Účinek Drovelisu na lipidový profil byl hodnocen měřením{"\n"}{"\n"}
                        <Text style={{ marginRight: 30 }}>
                            •	Triglyceridů{"\n"}
                            •	celkového cholesterolu, HDL-cholesterolu a LDL-cholesterolu
                        </Text>

                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}> Drovelis nevyvolal relevantní změny sledovaných ukazatelů lipidového metabolismu.</Text>
                    </Text>
                    <Image source={require("../../../assets/nevyvolal.png")} style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 350,
                        alignSelf: "center"
                    }} />
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