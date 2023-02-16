import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const StabilitaCyklu = () => {
    return (
        <ScrollView style={{ height: "100%", marginBottom:200}}>
            <Text style={styles.fontStyle}>Po adaptačním období prokázal Drovelis výbornou kontrolu cyklu. {"\n"}Díky prodloužené eliminaci z organismu toleruje chybu v užívání až 24hod. </Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Celkově Drovelis prokázal dobrou kontrolu cyklu s předvídatelným průběhem menstruace a minimálními nepravidelnostmi.
                    </Text>

                    <Text style={{ fontSize: 18, marginTop: 10 }}>
                        Pravidelné menzes či špinění se objevily u 92 až 94 % žen, 48 % epizod bylo pouze špinění.{"\n"}
                        Medián pravidelné menstruace či špinění se pohyboval v rozmezí 4 až 5 dnů na jeden cyklus.{"\n"}
                        Po adaptačním období omezeném na 1. cyklus se výskyt menstruačních nepravidelností pohyboval mezi 13 až 19 %. Většina příhod se však omezila pouze na špinění.
                    </Text>
                    <Text>{"\n"}</Text>
                    <Text style={{ fontWeight: "bold" }}>Záznam menstruačního krvácení – procento žen s jakýmkoli krvácením či špiněním v průběhu 12 cyklů</Text>
                    <Image source={require("../../../assets/kontrola_cyklus.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 250,
                        alignSelf: "center"
                    }} />
                    
           
                </View>
                
            </View>
           
         <Image source={require("../../../assets/graf_1.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 350,
                        alignSelf: "center",
                     borderRadius:12,
                        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
                    }} />
                    <Text>{"\n"}</Text>
                
         
                        <Text>{"\n"}</Text>
                        <Image source={require("../../../assets/graf_2.png")} style={{
                        resizeMode: "contain",
                        width: 900,
                        height: 350,
                        alignSelf: "center",
                     borderRadius:12,
                        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
                    }} />
                    <Text style={{fontSize:12, textAlign:"center", fontStyle:"italic"}}>{"\n"}Zpracováno dle Archer. Bleeding Patterns of Oral Contraceptives with a Cyclic Dosing Regimen: An Overview. J. Clin. Med. 2022, 11, 4634.</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
        </ScrollView>
    )
}

export default StabilitaCyklu

const styles = StyleSheet.create({
    fontStyle: {
        color: "#d9326f",
        fontSize: 25,
        padding: 10,
        fontFamily: "Museo",
        position: "absolute",
        top: 20,
        right: 0
    },
    content: {
        flexDirection: "column",
        justifyContent: "flex-end",
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