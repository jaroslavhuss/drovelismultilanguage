import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const VTE = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Drovelis je z hlediska tromboembolie velmi bezpečný, protože v porovnání s jinými kombinovanými přípravky vykazuje nejmenší změny v APC rezistenci a hodnotách SHBG. </Text>
                    <Text style={styles.fontStyle}>Estetrol má žádný nebo minimální vliv na parametry krevní srážlivosti a tvorbu jaterních proteinů</Text>
                    <Text style={styles.fontStyle}>Za riziko VTE je primárně zodpovědná estrogenní složka antikoncepce. Ze studií vyplývá, že unikátní kombinace E4/DRSP je mnohem bezpečnější než kombinace EE/LNG a EE/DRSP.</Text>

                    <Image source={require("../../../assets/kaskady.png")} style={{
                        resizeMode: "contain",
                        width: 1200,
                        height: 450,
                        alignSelf: "center", 
                        marginTop:20,
                        marginBottom:20
                    }} />

                    <Text style={{ fontSize: 18, marginTop: 10 }}>
                        Užívání COCs obecně vede k urychlení koagulace, což je přičítáno estrogenové komponentě přípravků v součinnosti se změnami plazmatických hladin SHBG. Mimo to dochází ke zvýšení APC rezistence. <Text style={{ fontWeight: "bold" }}>Ze zkoumaných typů COC vykazoval Drovelis nejmenší změny v hladině SHBG a v APC resistenci.</Text>
                    </Text>
                    <Text style={{ fontSize: 18, marginTop: 10 }}>
                        <Text style={{ fontWeight: "bold" }}>APC rezistence</Text> je rezistence k aktivovanému proteinu C (protein C není schopen štěpit srážlivé faktory). Projevuje se zvýšeným rizikem VTE (až 6x).</Text>
                    <Text style={{ fontSize: 18, marginTop: 30 }}>
                        Jedna z relativně častých příčin trombofilie:
                    </Text>
                    <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>
                        •	může být buď vrozená - mutace koagulačního faktoru V = Leidenská mutace{"\n"}
                        •	nebo způsobena užíváním perorální antikoncepce nebo těhotenstvím
                    </Text>


                    <Text>{"\n"}</Text>
                    <Text style={{ fontWeight: "bold" }}>Graf ukazuje změny APC resistence po 6 cyklech užívání antikoncepce různého složení. Nejmenší změny APC resistence vykazuje Drovelis.</Text>
                    <Image source={require("../../../assets/tromboembolie.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 400,
                        alignSelf: "center"
                    }} />
                    <Text style={{ fontSize: 11, textAlign: "center" }}>Citace: Data on file. MIT-Es0001 CSR. April2019</Text>
                    <Text style={{ fontSize: 18, marginTop: 30, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Graf ukazuje porovnání APC resistence u různých typů antikoncepce a porovnává prediktivní riziko VTE</Text> (prediktivní = předvídající na základě pozorování, zkušeností)
                    </Text>
                    <Image source={require("../../../assets/apc.png")} style={{
                        resizeMode: "contain",
                        width: 1100,
                        height: 600,
                        alignSelf: "center",
                        padding:20,
                        margin:10
                    }} />
                    <Text style={{ fontSize: 11, textAlign: "center" }}>Citace: Gemzell-Danielsson. A novel estetrol-containing combined oral contraceptive: European expert panel review. The European Journal of Contraception & Reproductive Health Care.</Text>
{
    // <Text style={{ fontSize: 18, marginTop: 30, marginBottom: 30 }}>
    //                     <Text style={{ fontWeight: "bold" }}>Graf ukazuje změnu hodnot SHBG po 6 cyklech užívání antikoncepce různého složení. Nejmenší nárůst SHBG vykazuje Drovelis.</Text>
    //                 </Text>
    //                 <Image source={require("../../../assets/SHBG.png")} style={{
    //                     resizeMode: "contain",
    //                     width: 900,
    //                     height: 350,
    //                     alignSelf: "center"
    //                 }} />
}
                    
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