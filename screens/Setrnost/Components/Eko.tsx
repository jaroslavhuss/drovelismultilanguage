import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const Eko = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Estetrol je vylučován močí v podobě neaktivních metabolitů, nekumuluje se ve vodě a životním prostředí.</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Při metabolismu je estetrol glukuronizován a jako neaktivní metabolit je vylučován zejména močí, jen malá část stolicí.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Neznečišťuje odpadní vody a nekumuluje se ve vodě a životním prostředí.
                    </Text>
                    <Image source={require("../../../assets/envi.png")} style={{
                        resizeMode: "contain",
                        width: 400,
                        height: 200,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 10
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Případné negativní účinky E4 na životní prostředí jsou nižší ve srovnání s jinými registrovanými estrogeny, běžně se vyskytujícími ve vodním prostředí (EE a E2), a to jak ve vodních organismech, tak v organismech žijících v sedimentech.
                    </Text>




                </View>
            </View>
            <Text style={{ marginBottom: 200 }}></Text>
        </ScrollView >
    )
}

export default Eko

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