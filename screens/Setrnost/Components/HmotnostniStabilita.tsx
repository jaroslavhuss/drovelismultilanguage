import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const HmotnostStabilita = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Drovelis nezpůsobuje žádnou, nebo jen minimální změnu tělesné hmotnosti díky společnému působení estetrolu a antimineralokortikoidnímu efektu DRSP.</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Z dosud dostupných klinických údajů vyplývá, že při podávání Drovelisu nebyla pozorována buď žádná nebo jen minimální změna tělesné hmotnosti.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        V souhrnném hodnocení všech 3.790 žen, které dostávaly Drovelis, byl nárůst hmotnosti hlášen jako nežádoucí příhoda celkem u 2,6 % žen.
                    </Text>
                    <Image source={require("../../../assets/airplane2.png")} style={{
                        resizeMode: "contain",
                        width: 200,
                        height: 100,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 10
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>
                        V klinickém hodnocení zaměřeném na stanovení terapeutické dávky bylo randomizováno celkem 396 žen do 5 skupin (15mg nebo 20mg E4 v kombinaci s 3mg DRSP nebo 150ug LNG a E2V s DNG), vždy v délce 6 cyklů a v režimu 24/4. Podíl žen s úbytkem hmotnosti 2 kg a více byl ve skupině s Drovelisem - 30,7 % žen po 3 cyklech a 36,7 % žen po 6 cyklech.
                    </Text>
                    <Text style={{ fontSize: 12, marginBottom: 15, fontStyle: "italic" }}>
                        Citace: Apter D, Zimmerman Y, Beekman L, Mawet M, Maillard C, Foidart JM, et al. Estetrol combined with drospirenone: an oral contraceptive with high acceptability, user satisfaction, well-being and favourable body weight control. Eur J Contracept Reprod Health Care. 2017;22(4):260-7.
                    </Text>
                    <Image source={require("../../../assets/airplane4.png")} style={{
                        resizeMode: "contain",
                        width: 200,
                        height: 100,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 10
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>
                        Ve dvou klinických hodnoceních III. fáze byla při každé návštěvě studijního centra měřena tělesná hmotnost a byly zjištěny pouze její minimální změny. Po 6 cyklech léčby byla průměrná změna hmotnosti 0,03 ± 2,76 kg.
                    </Text>
                    <Text style={{ fontSize: 12, marginBottom: 15, fontStyle: "italic" }}>
                        Citace: A Multicenter, Open-label, Single-Arm Study to Evaluate the Contraceptive Efficacy and Safety of a Combined Oral Contraceptive Containing 15 mg Estetrol and 3 mg Drospirenone (E4 FREEDOM Study).
                    </Text>




                </View>
            </View>
            <Text style={{ marginBottom: 1000 }}></Text>
        </ScrollView >
    )
}

export default HmotnostStabilita

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