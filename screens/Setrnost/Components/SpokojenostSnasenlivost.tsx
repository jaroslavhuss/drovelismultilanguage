import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const SpokojenostSnasenlivost = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Ve studii byly pacientky nejspokojenější ve skupině Drovelis. Nejvíce jich dokončilo studii a 82 % chtělo v medikaci pokračovat. </Text>
                    <Text>{"\n"}</Text>

                    <Text style={{ fontSize: 18, marginBottom: 30, marginTop: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>396 žen bylo rozděleno do 5 skupin </Text>
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        (15mg E4/3mg DRSP, 20mg E4/3mg DRSP, 15mg E4/0,15mg LNG, 20mg E4/0,15mg LNG a E2V/DNG)
                        a 6 měsíců užívali antikoncepci.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Nejvyšší procento žen, které ukončily studii bylo ve skupině Drovelis (91.1 %)
                    </Text>
                    <Text style={{
                        fontSize: 18, marginBottom: 20, textAlign: "center", marginTop: 20, borderWidth: 2, padding: 12, borderRadius: 12, borderColor: "#d9326f", shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.39,
                        shadowRadius: 8.30,

                        elevation: 13,
                    }}>
                        73,1 % žen bylo s touto antikoncepcí absolutně spokojeno{"\n"}{"\n"}
                        82,1 % žen se po skončení studie rozhodlo v této medikaci pokračovat{"\n"}{"\n"}
                        Kombinace 15mgE4/3mg DRSP měla také největší procento žen s hmotnostní ztrátou větší než 2 kg po 3 cyklech (30,7 %) i po 6 cyklech (36,7 %)
                    </Text>
                    <Text style={{ fontSize: 13, fontStyle: "italic" }}>Citace: Apter. Estetrol combined with drospirenone: an oral contraceptive with high acceptability, user satisfaction, well-being and favourable body weight control. Eur J Contracept Reprod Health Care. 2017 Aug;22(4):260-267.</Text>

                    <Text style={{ fontSize: 18, marginTop: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Uživatelky hodnotily spokojenost s antikoncepcí pomocí dotazníku MDQ (Menstrual Distress Questionnaire), který měl tyto okruhy otázek:</Text>{"\n"}

                    </Text>

                    <View style={{ margin: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Text style={styles.someItem}>Křeče</Text>
                        <Text style={styles.someItem}>Bolesti zad</Text>
                        <Text style={styles.someItem}>Přibývání na váze</Text>
                        <Text style={styles.someItem}>Stav pokožky</Text>
                        <Text style={styles.someItem}>Bolestivá nebo citlivá prsa</Text>
                        <Text style={styles.someItem}>Otoky (prsa/břicho)</Text>
                        <Text style={styles.someItem}>Cítíte se smutná nebo nenaladěná</Text>
                        <Text style={styles.someItem}>Změny nálady</Text>
                        <Text style={styles.someItem}>Pláč</Text>
                        <Text style={styles.someItem}>Podrážděnost</Text>
                    </View>
                    <Text>{"\n"}</Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nekontracepční výhody- spokojenost s užíváním Drovelisu</Text>
                    <Text>{"\n"}</Text>
                    <Image source={require("../../../assets/spokojenost_graf.png")} style={{
                        resizeMode: "contain",
                        width: 800,
                        height: 250,
                        alignSelf: "center"
                    }} />
                    <Text style={{ fontSize: 13, fontStyle: "italic" }}>Citace: Apter. Estetrol combined with drospirenone: an oral contraceptive with high acceptability, user satisfaction, well-being and favourable body weight control. Eur J Contracept Reprod Health Care. 2017 Aug;22(4):260-267.</Text>


                </View>
            </View>
            <Text style={{ marginBottom: 1000 }}></Text>
        </ScrollView >
    )
}

export default SpokojenostSnasenlivost

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