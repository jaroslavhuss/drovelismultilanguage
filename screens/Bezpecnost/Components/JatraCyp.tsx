import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const JatraCyp = () => {
    return (
//
        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Estetrol je šetrný k játrům, neboť neovlivňuje jaterní cytochrom P450 a sám jím není metabolizován. Zároveň estetrol neinteraguje s jinými léky, což je velkou výhodou pro ženy užívající i jinou medikaci.</Text>

                    <Text style={{ fontSize: 18, marginBottom: 30, marginTop: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Estetrol</Text>
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Na rozdíl od ostatních estrogenů, <Text style={{ fontWeight: "bold" }}>E4 není metabolizován izoenzymem CYP3A4 cytochromu P450</Text> a má omezený vliv na další izoenzymy cytochromu P450. Jako takový, E4 může vykazovat ve srovnání s jinými estrogeny méně interakcí s ostatními léčivy.
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        Studie ukázaly, že <Text style={{ fontWeight: "bold" }}>E4 nemění aktivitu (tzn. inhibici či indukci) nejdůležitějších jaterních izoenzymů CYP cytochromu P450.</Text>
                    </Text>

                    <Image source={require("../../../assets/icon_purple.png")} style={{
                        resizeMode: "contain",
                        width: 300,
                        height: 150,
                        alignSelf: "center"
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Drospirenon</Text>
                    </Text>


                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                        Metabolity DRSP jsou vytvářeny převážně nezávisle na CYP. Ale současné podávání inhibitorů CYP3A4 (např. ketokonazolu) může vést k lehce vyšší expozici DRSP (vyšší plocha pod křivkou AUC. Nelze proto vyloučit ovlivnění DRSP léčivy ovlivňujícími CYP3A4 (ať již inhibitory či induktory).</Text>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                        Studie lékových interakcí se substráty CYP3A4 ukázaly, že je velmi nepravděpodobná možnost ovlivnění jiných léčiv při současném podáváním DRSP v dávce 3 mg.
                    </Text>

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